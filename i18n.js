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
        cve_badge: 'Vulnerability Archive',
        cve_hero_title: 'Official Contributions',
        cve_hero_desc: 'A repository of our discovered vulnerabilities, registered CVEs/KVEs, and coordinated disclosures.',
        cve1_title: 'Path Traversal in Official Example Script Leading to Arbitrary File Write',
        cve1_summary_label: 'Summary:',
        cve1_summary: 'The official example script examples/recursively_extract_attachments.py contains a path traversal vulnerability that allows arbitrary file write outside the intended output directory. Attachment filenames extracted from parsed emails are directly used to construct output file paths without any sanitization, allowing an attacker-controlled filename to escape the target directory.',
        cve1_contrib_label: 'Contribution type:',
        cve1_contrib: 'Vulnerability Discovery & Report',
        cve1_disclosed: 'Disclosed: 2026-03-05',
        cve1_btn: 'NVD Advisory',
        cve2_title: 'Authentication Bypass in Enterprise Platform',
        cve2_impact_label: 'Impact:',
        cve2_impact: 'A flaw in token validation allowed attackers to forge sessions and escalate privileges to administrative accounts without valid credentials.',
        cve2_contrib_label: 'Contribution type:',
        cve2_contrib: 'Vulnerability Analysis & Coordinated Disclosure',
        cve2_disclosed: 'Disclosed: 2026-01-10',
        cve2_btn: 'KVE Details',

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
        cve_badge: '취약점 아카이브',
        cve_hero_title: '공식 기여 목록',
        cve_hero_desc: '발굴한 취약점, 등록된 CVE/KVE, 그리고 조율된 공개 내역을 모아둔 저장소입니다.',
        cve1_title: '공식 예제 스크립트의 경로 탐색 취약점으로 인한 임의 파일 쓰기',
        cve1_summary_label: '요약:',
        cve1_summary: '공식 예제 스크립트 examples/recursively_extract_attachments.py에 경로 탐색 취약점이 존재하여 의도된 출력 디렉토리 외부에 임의의 파일을 쓸 수 있습니다. 파싱된 이메일에서 추출된 첨부파일 이름이 별도의 검증 없이 출력 파일 경로 구성에 직접 사용되어, 공격자가 제어하는 파일명으로 대상 디렉토리를 탈출할 수 있습니다.',
        cve1_contrib_label: '기여 유형:',
        cve1_contrib: '취약점 발굴 및 보고',
        cve1_disclosed: '공개일: 2026-03-05',
        cve1_btn: 'NVD 어드바이저리',
        cve2_title: '엔터프라이즈 플랫폼의 인증 우회',
        cve2_impact_label: '영향:',
        cve2_impact: '토큰 검증 로직의 결함으로 인해 공격자가 세션을 위조하고 유효한 자격 증명 없이 관리자 계정으로 권한을 상승시킬 수 있습니다.',
        cve2_contrib_label: '기여 유형:',
        cve2_contrib: '취약점 분석 및 조율된 공개',
        cve2_disclosed: '공개일: 2026-01-10',
        cve2_btn: 'KVE 세부 정보',

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

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Text content translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // HTML content translations (for elements with mixed bold/text content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update lang attribute
    document.documentElement.lang = lang;

    // Update toggle button label
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.textContent = lang === 'en' ? '한국어' : 'English';

    // Persist choice
    localStorage.setItem('redpoc_lang', lang);
}

function toggleLanguage() {
    const current = localStorage.getItem('redpoc_lang') || 'ko';
    applyTranslations(current === 'en' ? 'ko' : 'en');
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('redpoc_lang') || 'ko';
    applyTranslations(saved);
});
