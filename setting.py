import http.server
import socketserver
import json
import os
import re
import webbrowser

PORT = 8088
DATA_FILES = {
    'cve': 'cve_data.js',
    'research': 'research_data.js',
    'team': 'team_data.js'
}

class RedPocCMS(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(ADMIN_UI.encode('utf-8'))
        elif self.path == '/api/load':
            self.handle_load()
        else:
            return super().do_GET()

    def do_POST(self):
        if self.path == '/api/save':
            self.handle_save()
        else:
            self.send_error(404)

    def handle_load(self):
        results = {}
        for key, filename in DATA_FILES.items():
            results[key] = self.read_js_data(filename)
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(results, ensure_ascii=False).encode('utf-8'))

    def handle_save(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            payload = json.loads(post_data)
            
            target = payload.get('target')
            data = payload.get('data')
            
            if target in DATA_FILES:
                filename = DATA_FILES[target]
                var_names = {'cve': 'CVE_DATA', 'research': 'RESEARCH_DATA', 'team': 'TEAM_DATA'}
                
                # Header for JS compatibility
                js_content = f"/** Managed by RedPoc Admin Hub */\nconst {var_names[target]} = {json.dumps(data, indent=4, ensure_ascii=False)};\n"
                
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(js_content)
                    
                self.send_response(200)
                self.end_headers()
                self.wfile.write(b"OK")
            else:
                self.send_error(400, "Invalid target")
        except Exception as e:
            print(f"Save error: {e}")
            self.send_error(500, str(e))

    def read_js_data(self, filename):
        if not os.path.exists(filename): return {}
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
                # Find the very first { and the very last }
                start = content.find('{')
                end = content.rfind('}')
                
                if start != -1 and end != -1:
                    obj_str = content[start:end+1].strip()
                    return self.parse_loose_json(obj_str)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
            return {}
        return {}

    def parse_loose_json(self, s):
        """Attempts to parse a JS-like object string into a Python dict."""
        try:
            return json.loads(s)
        except:
            # 1. Quote unquoted keys
            s = re.sub(r'([\{\,]\s*)([a-zA-Z_]\w*)\s*:', r'\1"\2":', s)
            # 2. Replace single quotes
            s = re.sub(r"'(.*?)'", r'"\1"', s)
            # 3. Clean up trailing commas
            s = re.sub(r',\s*\}', '}', s)
            s = re.sub(r',\s*\]', ']', s)
            try:
                return json.loads(s)
            except Exception as e:
                snippet = s[0:50] if len(s) > 50 else s
                print(f"Final parse crash on: {snippet}... : {e}")
                return {}

ADMIN_UI = """
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>RedPoc Master Admin</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body { background: #070707; color: #eee; padding: 40px 0; }
        .cms-container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .sidebar { background: #111; border: 1px solid #222; border-radius: 12px; padding: 15px; height: fit-content; }
        .main-content { background: #111; border: 1px solid #222; border-radius: 12px; padding: 30px; min-height: 500px; position: relative; }
        
        .nav-item { padding: 12px 20px; cursor: pointer; border-radius: 8px; margin-bottom: 8px; color: #777; transition: 0.3s; font-weight: bold; }
        .nav-item.active { background: #ff2a2a; color: #fff; }

        .item-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: #000; border: 1px solid #1a1a1a; border-radius: 10px; margin-bottom: 12px; }
        .item-info { display: flex; flex-direction: column; overflow: hidden; }
        .item-title { font-weight: bold; color: #fff; font-size: 1rem; }
        .item-meta { font-size: 0.75rem; color: #555; margin-top: 3px; }
        
        #loader { display: none; position: absolute; inset: 0; background: rgba(0,0,0,0.7); z-index: 100; align-items: center; justify-content: center; }
        .editor-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); display: none; justify-content: center; align-items: center; z-index: 1000; padding: 20px; }
        .editor-modal { background: #0a0a0a; border: 1px solid #333; width: 100%; max-width: 750px; padding: 30px; border-radius: 15px; overflow-y: auto; max-height: 90vh; }
        
        label { display: block; margin: 15px 0 5px; color: #ff2a2a; font-size: 0.7rem; font-weight: bold; }
        input, textarea, select { width: 100%; background: #000; border: 1px solid #222; color: #fff; padding: 12px; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="cms-container">
        <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center;">
            <div class="logo"><h1>RedPoc <span>Master Hub</span></h1></div>
        </header>
        <div style="display: grid; grid-template-columns: 240px 1fr; gap: 30px;">
            <div class="sidebar">
                <div id="nav-cve" class="nav-item active" onclick="setTab('cve')">🛡️ CVE ARCHIVE</div>
                <div id="nav-research" class="nav-item" onclick="setTab('research')">📑 RESEARCH</div>
                <div id="nav-team" class="nav-item" onclick="setTab('team')">👤 TEAM</div>
            </div>
            <div class="main-content">
                <div id="loader">SAVING...</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h2 id="tab-title" style="margin:0;">CVE ARCHIVE</h2>
                    <button class="btn btn-primary" onclick="openEditor()">+ ADD NEW</button>
                </div>
                <div id="data-list"></div>
            </div>
        </div>
    </div>

    <div id="editor-overlay" class="editor-overlay">
        <div class="editor-modal">
            <h2 id="editor-title" style="color:#ff2a2a; margin:0 0 20px 0;">EDIT ENTRY</h2>
            <div id="editor-fields"></div>
            <div style="margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <button class="btn btn-primary" onclick="saveEntry()">SAVE</button>
                <button class="btn" style="background:#222;" onclick="closeEditor()">CANCEL</button>
            </div>
        </div>
    </div>

    <script>
        let currentTab = 'cve';
        let fullData = {};
        let editingIdx = -1;

        async function loadData() {
            const res = await fetch('/api/load');
            fullData = await res.json();
            renderList();
        }

        function setTab(tab) {
            currentTab = tab;
            document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.id === 'nav-'+tab));
            document.getElementById('tab-title').innerText = (tab === 'cve' ? 'CVE ARCHIVE' : (tab === 'research' ? 'RESEARCH' : 'TEAM'));
            renderList();
        }

        function renderList() {
            const list = document.getElementById('data-list');
            list.innerHTML = '';
            let items = [];
            if (currentTab === 'cve') items = [...(fullData.cve.cves || []), ...(fullData.cve.kves || [])];
            else if (currentTab === 'research') items = fullData.research.articles || [];
            else if (currentTab === 'team') items = Object.entries(fullData.team.members || {});

            list.innerHTML = items.map((item, idx) => {
                let title = '', subtitle = '';
                if (currentTab === 'team') {
                    title = item[1].name;
                    subtitle = `@${item[0]}`;
                } else {
                    title = (item.title && item.title.en) ? item.title.en : (item.id || 'Untitled');
                    subtitle = item.id || '';
                }
                return `
                    <div class="item-row">
                        <div class="item-info"><span class="item-title">${title}</span><span class="item-meta">${subtitle}</span></div>
                        <div style="display:flex;"><button class="btn btn-sm" onclick="openEditor(${idx})">EDIT</button><button class="btn btn-sm btn-danger" onclick="deleteItem(${idx})">DEL</button></div>
                    </div>
                `;
            }).join('');
        }

        function openEditor(idx = -1) {
            editingIdx = idx;
            const fields = document.getElementById('editor-fields');
            fields.innerHTML = '';
            const schema = {
                cve: [
                    { label: 'CVE/KVE ID (고유 식별자)', key: 'id' },
                    { label: '제목 (영어)', key: 'title.en' }, { label: '제목 (한글)', key: 'title.ko' },
                    { label: 'Impact Score (0-10)', key: 'impact' },
                    { label: '대상 시스템 (Target)', key: 'target' },
                    { label: '공동 기여자 (선택)', key: 'contributors', type: 'multi' },
                    { label: '요약 (영어)', key: 'summary.en', type: 'area' }, { label: '요약 (한글)', key: 'summary.ko', type: 'area' },
                    { label: '링크', key: 'advisory' }
                ],
                research: [
                    { label: '태그 (영어)', key: 'tag.en' }, { label: '태그 (한글)', key: 'tag.ko' },
                    { label: '제목 (영어)', key: 'title.en' }, { label: '제목 (한글)', key: 'title.ko' },
                    { label: '설명 (영어)', key: 'desc.en', type: 'area' }, { label: '설명 (한글)', key: 'desc.ko', type: 'area' },
                    { label: '날짜 (영어)', key: 'date.en' }, { label: '날짜 (한글)', key: 'date.ko' },
                    { label: '링크', key: 'link' }
                ],
                team: [
                    { label: 'ID', key: 'id' }, { label: '이름', key: 'name' },
                    { label: '역할 (영어)', key: 'role.en' }, { label: '역할 (한글)', key: 'role.ko' },
                    { label: '소개 (영어)', key: 'desc.en', type: 'area' }, { label: '소개 (한글)', key: 'desc.ko', type: 'area' },
                    { label: 'GitHub', key: 'github' }
                ]
            };

            let item = {};
            if (idx !== -1) {
                if (currentTab === 'cve') item = [...fullData.cve.cves, ...fullData.cve.kves][idx];
                else if (currentTab === 'research') item = fullData.research.articles[idx];
                else if (currentTab === 'team') item = { id: Object.keys(fullData.team.members)[idx], ...Object.values(fullData.team.members)[idx] };
            }

            schema[currentTab].forEach(f => {
                let val = '';
                if (f.key.includes('.')) { const ks = f.key.split('.'); val = (item[ks[0]] && item[ks[0]][ks[1]]) ? item[ks[0]][ks[1]] : ''; }
                else val = item[f.key] || '';
                
                fields.innerHTML += `<label>${f.label}</label>`;
                if (f.type === 'area') fields.innerHTML += `<textarea data-key="${f.key}" rows="3">${val}</textarea>`;
                else if (f.type === 'multi') {
                    let teamIds = Object.keys(fullData.team.members);
                    let checkedIds = Array.isArray(val) ? val : [];
                    let grid = `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:#000; padding:10px; border:1px solid #222; border-radius:8px;">`;
                    grid += teamIds.map(tid => `
                        <label style="display:flex; align-items:center; margin:0; text-transform:none; color:#888; cursor:pointer; font-weight:normal;">
                            <input type="checkbox" name="cont-check" value="${tid}" ${checkedIds.includes(tid) ? 'checked' : ''} style="width:auto; margin-right:8px;"> ${tid}
                        </label>
                    `).join('');
                    grid += `</div>`;
                    fields.innerHTML += grid;
                } else if (f.type === 'select') {
                    let os = f.options.map(o => `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`).join('');
                    fields.innerHTML += `<select data-key="${f.key}">${os}</select>`;
                } else fields.innerHTML += `<input type="text" data-key="${f.key}" value="${val}">`;
            });
            document.getElementById('editor-overlay').style.display = 'flex';
        }

        async function saveEntry() {
            const inputs = document.querySelectorAll('[data-key]');
            let newItem = {};
            inputs.forEach(i => {
                const k = i.getAttribute('data-key');
                if (k.includes('.')) { const [k1, k2] = k.split('.'); if (!newItem[k1]) newItem[k1] = {}; newItem[k1][k2] = i.value; }
                else newItem[k] = i.value;
            });

            // Gather Checkboxes for contributors
            if (currentTab === 'cve') {
                const checked = Array.from(document.querySelectorAll('input[name="cont-check"]:checked')).map(cb => cb.value);
                newItem.contributors = checked;
                
                // Auto Severity based on Impact
                let score = parseFloat(newItem.impact || 0);
                if (score >= 9.0) newItem.severity = 'critical';
                else if (score >= 7.0) newItem.severity = 'high';
                else newItem.severity = 'moderate';
            }

            if (newItem.id) newItem.id = newItem.id.toUpperCase();

            document.getElementById('loader').style.display = 'flex';
            if (currentTab === 'cve') {
                let all = [...(fullData.cve.cves || []), ...(fullData.cve.kves || [])];
                if (editingIdx === -1) all.unshift(newItem); else all[editingIdx] = newItem;
                fullData.cve.cves = all.filter(x => x.id && x.id.toUpperCase().startsWith('CVE'));
                fullData.cve.kves = all.filter(x => !x.id || !x.id.toUpperCase().startsWith('CVE'));
            } else if (currentTab === 'research') {
                if (editingIdx === -1) fullData.research.articles.unshift(newItem); else fullData.research.articles[editingIdx] = newItem;
            } else if (currentTab === 'team') {
                const sid = newItem.id; delete newItem.id; newItem.img = `https://github.com/${newItem.github}.png`;
                fullData.team.members[sid] = newItem;
            }

            const res = await fetch('/api/save', { method: 'POST', body: JSON.stringify({ target: currentTab, data: fullData[currentTab] }) });
            document.getElementById('loader').style.display = 'none';
            if (res.ok) { closeEditor(); loadData(); }
        }

        async function deleteItem(idx) {
            if (!confirm('DEL?')) return;
            if (currentTab === 'cve') {
                let all = [...fullData.cve.cves, ...fullData.cve.kves]; all.splice(idx, 1);
                fullData.cve.cves = all.filter(x => x.id && x.id.toUpperCase().startsWith('CVE'));
                fullData.cve.kves = all.filter(x => !x.id || !x.id.toUpperCase().startsWith('CVE'));
            } else if (currentTab === 'research') fullData.research.articles.splice(idx, 1);
            else if (currentTab === 'team') delete fullData.team.members[Object.keys(fullData.team.members)[idx]];
            await fetch('/api/save', { method: 'POST', body: JSON.stringify({ target: currentTab, data: fullData[currentTab] }) });
            loadData();
        }

        function closeEditor() { document.getElementById('editor-overlay').style.display = 'none'; }
        loadData();
    </script>
</body>
</html>
"""

if __name__ == "__main__":
    print(f"RedPoc Master Hub Server on http://localhost:{PORT}")
    webbrowser.open(f"http://localhost:{PORT}")
    with socketserver.TCPServer(("", PORT), RedPocCMS) as httpd:
        httpd.serve_forever()
