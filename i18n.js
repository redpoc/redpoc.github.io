/**
 * RedPoc i18n - Language Toggle System
 * Supports: 'ko' (Korean) and 'en' (English)
 * Usage: Add data-i18n="key" to any element whose textContent should be translated.
 *        Add data-i18n-html="key" for elements that need innerHTML translation.
 */

const translations = {
    en: {
        // Nav
        nav_home: 'Home',
        nav_cve: 'CVE Archive',
        nav_research: 'Research',
        nav_team: 'Team',

        // Footer
        footer_copy: '© 2026 RedPoc Team | All Rights Reserved',
        modal_desc: 'Research Team for this vulnerability',

        // --- index.html ---
        index_badge: 'whoami',
        index_hero_title: 'We find vulnerabilities before the adversaries do.',
        index_hero_desc: 'RedPoc is an elite offensive security research team focused on vulnerability discovery, advanced red teaming, and pushing the boundaries of cybersecurity.',
        index_btn_cve: 'View Our CVEs',
        index_btn_research: 'Read Research',
        index_section_title: 'Core Focus',
        index_card1_title: '0-Day Discovery',
        index_card1_desc: 'We actively analyze widespread software, enterprise platforms, and critical infrastructure to unearth zero-day vulnerabilities and report them responsibly.',
        index_card2_title: 'Red Teaming',
        index_card2_desc: 'Simulating advanced persistent threats (APT) to test and improve organizational detection and response capabilities.',
        index_card3_title: 'Security Tooling',
        index_card3_desc: 'Building open-source offensive security tools to automate exploitation and payload generation, aiding the research community.',

        // --- cve.html ---
        cve_badge: 'Official Disclosures',
        cve_hero_title: 'Vulnerability Research',
        cve_hero_desc: 'Research findings identifying vulnerabilities discovered in a zero-day state within latest stable releases, responsibly disclosed to maintainers for subsequent patching and CVE assignment.',
        cve_tab_cve: 'CVE TRACK',
        cve_tab_kve: 'KVE & OTHERS',
        cve_label_impact: 'Impact',
        cve_label_target: 'Target',
        cve_btn_copy: 'Copy ID',
        cve_btn_copied: 'Copied!',
        cve_multi_title: 'Multi-Vendor Driver Remote Code Execution',
        cve_multi_summary: 'Stack overflow vulnerability in the IOCTL handler of a kernel driver commonly used by multiple hardware vendors. Allows arbitrary code execution with kernel privileges.',
        cve_label_collab: 'Colleagues',
        cve1_title: 'Path Traversal in Official Example Script Leading to Arbitrary File Write',
        cve1_summary_label: 'Summary:',
        cve1_summary: 'The official example script examples/recursively_extract_attachments.py contains a path traversal vulnerability that allows arbitrary file write outside the intended output directory.',
        cve1_target: 'Python Examples',
        cve1_btn: 'NVD Advisory',
        cve2_title: 'Authentication Bypass in Enterprise Platform',
        cve2_impact_label: 'Impact:',
        cve2_impact: 'A flaw in token validation allowed attackers to forge sessions and escalate privileges to administrative accounts without valid credentials.',
        cve2_target: 'Enterprise CMS',
        cve2_btn: 'Detail',

        // --- research.html ---
        research_badge: 'Publications',
        research_hero_title: 'Security Research',
        research_hero_desc: 'Deep dives into exploitation techniques, reverse engineering, and offensive methodology.',
        research_card1_tag: 'Article',
        research_card1_title: 'Bypassing Modern EDRs with Custom Syscalls',
        research_card1_desc: 'An exploration of direct system calls and how to evade API hooking dynamically while maintaining stability in payloads.',
        research_card1_date: 'March 2026',
        research_card2_tag: 'Writeup',
        research_card2_title: 'Analysis of the UploadServer RCE',
        research_card2_desc: 'Detailed breakdown of how we achieved remote code execution by chaining vulnerabilities in the Python UploadServer module.',
        research_card2_date: 'February 2026',
        research_read_more: 'Read More',

        // --- team.html ---
        team_badge: 'The Collective',
        team_hero_title: 'Meet the Team',
        team_hero_desc: 'We are a group of dedicated security engineers and researchers united by a passion for offensive security.',
        team_role: 'Co-Founder',
        team_desc: 'Specializes in Web Security, Cloud Architecture, and APT Simulation.',
    },
    ko: {
        // Nav
        nav_home: '홈',
        nav_cve: 'CVE 아카이브',
        nav_research: '연구',
        nav_team: '팀',

        // Footer
        footer_copy: '© 2026 RedPoc Team | All Rights Reserved',
        modal_desc: '이 취약점에 대한 연구 및 분석팀입니다.',

        // --- index.html ---
        index_badge: 'whoami',
        index_hero_title: '공격자보다 먼저 취약점을 찾습니다.',
        index_hero_desc: 'RedPoc은 취약점 발굴, 레드팀 활동, 그리고 사이버보안의 한계를 넓히는 데 집중하는 오펜시브 보안 연구팀입니다.',
        index_btn_cve: 'CVE 확인하기',
        index_btn_research: '연구 보기',
        index_section_title: '핵심 분야',
        index_card1_title: '0-Day 발굴',
        index_card1_desc: '광범위하게 사용되는 소프트웨어, 기업 플랫폼, 핵심 인프라를 능동적으로 분석하여 제로데이 취약점을 발굴하고 책임감 있게 보고합니다.',
        index_card2_title: '레드팀 활동',
        index_card2_desc: '고급 지속 위협(APT)을 시뮬레이션하여 조직의 탐지 및 대응 역량을 테스트하고 개선합니다.',
        index_card3_title: '보안 도구 개발',
        index_card3_desc: '익스플로잇 자동화 및 페이로드 생성을 위한 오픈소스 오펜시브 보안 도구를 개발하여 연구 커뮤니티를 지원합니다.',

        // --- cve.html ---
        cve_badge: '공식 취약점 제보',
        cve_hero_title: '취약점 연구 성과 (Vulnerability Research)',
        cve_hero_desc: '최신 안정 버전에서 발견 당시 제로데이(0-Day) 상태였던 취약점들을 식별하고, 책임감 있는 제보를 통해 패치와 CVE 할당을 이끌어낸 연구 기록입니다.',
        cve_tab_cve: 'CVE 트랙',
        cve_tab_kve: 'KVE 및 기타',
        cve_label_impact: '영향도',
        cve_label_target: '대상',
        cve_btn_copy: 'ID 복사',
        cve_btn_copied: '복사됨!',
        cve_multi_title: '멀티 벤더 드라이버 원격 코드 실행',
        cve_multi_summary: '다수의 하드웨어 벤더에서 공통으로 사용되는 커널 드라이버의 IOCTL 핸들러에서 발견된 스택 오버플로우 취약점입니다. 공격자는 이를 통해 커널 권한으로 임의 코드를 실행할 수 있습니다.',
        cve_label_collab: '공동 연구',
        cve1_title: '공식 예제 스크립트 경로 탐색 취약점',
        cve1_summary_label: '요약:',
        cve1_summary: 'recursively_extract_attachments.py 파일 내 경로 검증 루틴 부재로 인해 임의 경로 파일 쓰기가 가능한 취약점입니다.',
        cve1_target: 'Python 예제',
        cve1_btn: 'NVD 어드바이저리',
        cve2_title: '엔터프라이즈 플랫폼 인증 우회',
        cve2_impact_label: '영향:',
        cve2_impact: '사용자 세션 토큰 검증 로직의 결함을 이용하여 별도의 비밀번호 없이 관리자 계정 권한을 탈취할 수 있는 취약점입니다.',
        cve2_target: '기업용 CMS',
        cve2_btn: '상세보기',

        // --- research.html ---
        research_badge: '발행물',
        research_hero_title: '보안 연구',
        research_hero_desc: '익스플로잇 기법, 리버스 엔지니어링, 오펜시브 방법론에 대한 심층 분석.',
        research_card1_tag: '아티클',
        research_card1_title: '커스텀 시스콜로 최신 EDR 우회하기',
        research_card1_desc: '직접 시스템 콜과 페이로드 안정성을 유지하면서 API 후킹을 동적으로 회피하는 방법에 대한 탐구.',
        research_card1_date: '2026년 3월',
        research_card2_tag: '라이트업',
        research_card2_title: 'UploadServer RCE 분석',
        research_card2_desc: 'Python UploadServer 모듈의 취약점 체이닝을 통해 원격 코드 실행을 달성한 과정에 대한 상세한 분석.',
        research_card2_date: '2026년 2월',
        research_read_more: '자세히 보기',

        // --- team.html ---
        team_badge: '구성원',
        team_hero_title: '팀 소개',
        team_hero_desc: '오펜시브 보안에 대한 열정으로 뭉친 보안 엔지니어 및 연구자들의 그룹입니다.',
        team_role: '공동 창립자',
        team_desc: '웹 보안, 클라우드 아키텍처, APT 시뮬레이션을 전문으로 합니다.',
    }
};

// ── Core i18n Engine ──────────────────────────────────────────────────────────

// ── Global Helper for JS components ──────────────────────────────────────────
function getI18n(key) {
    const lang = localStorage.getItem('redpoc_lang') || 'ko';
    return (translations[lang] && translations[lang][key]) || key;
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    localStorage.setItem('redpoc_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.documentElement.lang = lang;
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.textContent = lang === 'en' ? '한국어' : 'English';
}

function toggleLanguage() {
    const current = localStorage.getItem('redpoc_lang') || 'ko';
    applyTranslations(current === 'en' ? 'ko' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
    // Default to 'en' (English) for international visitors if no preference saved
    applyTranslations(localStorage.getItem('redpoc_lang') || 'en');
});
