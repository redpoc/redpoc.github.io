/** Managed by RedPoc Admin Hub */
const CVE_DATA = {
    "cves": [
        {
            "id": "CVE-2026-25924",
            "title": {
                "en": "Administrative RCE via Security Control Bypass",
                "ko": "Administrative RCE via Security Control Bypass"
            },
            "impact": "8.4",
            "target": "Kanboard <= 1.2.5",
            "summary": {
                "en": "Kanboard is project management software focused on Kanban methodology. Prior to 1.2.50, a security control bypass vulnerability in Kanboard allows an authenticated administrator to achieve full Remote Code Execution (RCE). Although the application correctly hides the plugin installation interface when the PLUGIN_INSTALLER configuration is set to false, the underlying backend endpoint fails to verify this security setting. An attacker can exploit this oversight to force the server to download and install a malicious plugin, leading to arbitrary code execution.",
                "ko": "Kanboard is project management software focused on Kanban methodology. Prior to 1.2.50, a security control bypass vulnerability in Kanboard allows an authenticated administrator to achieve full Remote Code Execution (RCE). Although the application correctly hides the plugin installation interface when the PLUGIN_INSTALLER configuration is set to false, the underlying backend endpoint fails to verify this security setting. An attacker can exploit this oversight to force the server to download and install a malicious plugin, leading to arbitrary code execution."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-25924",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-30215",
            "title": {
                "en": "test131",
                "ko": "ㅋㅋ"
            },
            "impact": "8.8",
            "target": "hi",
            "summary": {
                "en": "zzz",
                "ko": "ㅋㅋㅋ"
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-20111",
            "title": {
                "en": "Multi-Vendor Driver Remote Code Execution",
                "ko": "멀티 벤더 드라이버 원격 코드 실행"
            },
            "impact": "9.8",
            "severity": "critical",
            "target": "Generic Windows Drivers",
            "contributors": [
                "drkim",
                "redyank",
                "dyingman1"
            ],
            "summary": {
                "en": "RCE and LPE vulnerability via stack overflow in IOCTL handlers of Windows kernel drivers.",
                "ko": "Windows 커널 드라이버의 IOCTL 핸들러 내 스택 오버플로우를 이용한 권한 상승 및 원격 코드 실행 취약점입니다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-20111"
        },
        {
            "id": "CVE-2026-29780",
            "title": {
                "ko": "공식 예제 스크립트 경로 탐색 취약점",
                "en": "Path Traversal in Official Example Scripts"
            },
            "contributors": [
                "redyank"
            ],
            "impact": 5.5,
            "severity": "moderate",
            "target": "Python Email Examples",
            "summary": {
                "ko": "recursively_extract_attachments.py 파일 내 경로 검증 루틴 부재로 인해 임의 경로 파일 쓰기가 가능한 취약점입니다.",
                "en": "Lack of path validation in recursively_extract_attachments.py allows arbitrary file write."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-29780"
        },
        {
            "id": "CVE-2026-15432",
            "title": {
                "en": "test11",
                "ko": "테스트11"
            },
            "impact": "8.8",
            "severity": "high",
            "target": "npm",
            "contributors": [
                "drkim"
            ],
            "summary": {
                "en": "test123",
                "ko": "테스트123"
            },
            "advisory": "http://www.naver.com"
        }
    ],
    "kves": [
        {
            "id": "KVE-2025-0142",
            "title": {
                "en": "Confidential Vulnerability Research",
                "ko": "Confidential Vulnerability Research"
            },
            "impact": "9.0",
            "target": "SK",
            "summary": {
                "en": "Confidential Vulnerability ResearchConfidential Vulnerability ResearchConfidential Vulnerability ResearchConfidential Vulnerability Research",
                "ko": "Confidential Vulnerability ResearchConfidential Vulnerability ResearchConfidential Vulnerability ResearchConfidential Vulnerability Research"
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "critical"
        },
        {
            "id": "KVE-2026-0001",
            "title": {
                "ko": "엔터프라이즈 플랫폼 인증 우회",
                "en": "Enterprise Platform Auth Bypass"
            },
            "contributors": [
                "drkim",
                "HiHyeonji"
            ],
            "impact": 8.1,
            "severity": "high",
            "target": "Enterprise CMS",
            "summary": {
                "ko": "사용자 세션 토큰 검증 로직의 결함을 이용하여 관리자 계정 권한을 탈취할 수 있는 취약점입니다.",
                "en": "Logic flaw in session token validation allows hijacking administrator privileges."
            },
            "detail_link": "#"
        }
    ]
};
