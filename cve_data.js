/** Managed by RedPoc Admin Hub */
const CVE_DATA = {
    "cves": [
        {
            "id": "CVE-2026-40491",
            "title": {
                "en": "Arbitrary File Write via Path Traversal in gdown.extractall",
                "ko": "gdown.extractall에서 경로 탐색을 통한 임의 파일 쓰기 취약점"
            },
            "impact": "6.5",
            "target": "gdown <= 5.2.1",
            "summary": {
                "en": "The gdown library (tested on v5.2.1) is vulnerable to a Path Traversal attack within its extractall functionality. When extracting a maliciously crafted ZIP or TAR archive, the library fails to sanitize or validate the filenames of the archive members. This allow files to be written outside the intended destination directory, potentially leading to arbitrary file overwrite and Remote Code Execution (RCE).",
                "ko": "gdown 라이브러리(v5.2.1에서 테스트됨)는 extractall 기능에서 경로 탐색(Path Traversal) 공격에 취약합니다. 악의적으로 조작된 ZIP 또는 TAR 아카이브를 추출할 때, 라이브러리가 아카이브 내부 파일 이름을 적절히 정제하거나 검증하지 않습니다. 이로 인해 의도된 대상 디렉터리 외부에 파일이 생성될 수 있으며, 잠재적으로 임의 파일 덮어쓰기 및 원격 코드 실행(RCE)으로 이어질 수 있습니다."
            },
            "advisory": "https://github.com/wkentaro/gdown/security/advisories/GHSA-76hw-p97h-883f",
            "contributors": [
                "drkim",
                "redyank",
                "dyingman1",
                "HiHyeonji"
            ],
            "severity": "moderate"
        },
        {
            "id": "CVE-2026-39376",
            "title": {
                "en": "Infinite redirect loop DoS via meta-refresh chain",
                "ko": "meta-refresh 체인 이용 무한 리디렉션 루프 DoS"
            },
            "impact": "7.5",
            "target": "fastfeedparser<= 0.5.9",
            "summary": {
                "en": "When parse() fetches a URL that returns an HTML page containing a <meta http-equiv=\"refresh\"> tag, it recursively calls itself with the redirect URL — with no depth limit, no visited-URL deduplication, and no redirect count cap. An attacker-controlled server that returns an infinite chain of HTML meta-refresh responses causes unbounded recursion, exhausting the Python call stack and crashing the process. This vulnerability can also be chained with the companion SSRF issue to reach internal network targets after bypassing the initial URL check.",
                "ko": "parse ()는 <meta http-equiv=\"refresh\"> 태그가 포함된 HTML 페이지를 반환하는 URL을 가져올 때, 깊이 제한, 방문 URL 중복 제거, 리디렉션 횟수 제한 없이 재귀적으로 리디렉션 URL을 호출합니다. 공격자가 제어하는 서버가 HTML 메타 refresh 응답의 무한 체인을 반환하면 무한한 재귀가 발생하여 Python 호출 스택이 소진되고 프로세스가 중단됩니다. 이 취약점은 초기 URL 확인을 우회한 후 내부 네트워크 대상에 도달하기 위해 동반 SSRF 문제와도 연결될 수 있습니다"
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-35492",
            "title": {
                "en": "Path Traversal in PartitionedDataset via Unsanitized Partition Keys Leading to Arbitrary File Write",
                "ko": "검증되지 않은 파티션 키로 인한 PartitionedDataset 경로 조작 취약점 및 임의 파일 쓰기"
            },
            "impact": "6.5",
            "target": "kedro<9 .3.0",
            "summary": {
                "en": "The PartitionedDataset implementation constructs the final storage path by concatenating the base directory (dir_path) and the partition key (path) using a string join operation.\n\nBecause the partition identifier is not normalized or validated, it appears possible to include path traversal sequences such as ../ in the partition key. If partition identifiers are influenced by external input, this could allow files to be written outside the intended dataset directory.",
                "ko": "PartitionedDataset 구현은 최종 저장 경로를 생성할 때, 기본 디렉터리(dir_path)와 파티션 키(path)를 단순 문자열 결합 방식으로 이어 붙입니다.\n\n이때 파티션 식별자에 대한 정규화(normalization)나 검증이 수행되지 않기 때문에, ../와 같은 경로 조작(Path Traversal) 문자열을 포함시킬 수 있습니다.\n\n만약 파티션 식별자가 외부 입력에 의해 제어될 수 있는 경우, 공격자는 이를 악용하여 의도된 데이터셋 디렉터리를 벗어난 위치에 파일을 생성하거나 덮어쓸 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "moderate"
        },
        {
            "id": "CVE-2025-62429",
            "title": {
                "en": "Improper Input Sanitization Leading to Remote Code Execution",
                "ko": "입력값 검증 미흡으로 인한 원격 코드 실행(RCE) 취약점"
            },
            "impact": "7.2",
            "target": "ClipBucket v5 < 5.5.2 #147",
            "summary": {
                "en": "A code injection vulnerability exists in versions prior to 5.5.2 #147 due to improper sanitization of user-supplied input. A specific parameter in a backend endpoint is directly embedded into executable PHP code without sufficient validation. An authenticated attacker with elevated privileges can exploit this flaw to inject and execute arbitrary PHP code on the server, resulting in remote code execution.",
                "ko": "5.5.2 #147 이전 버전에서 사용자 입력값 검증 미흡으로 인한 코드 인젝션 취약점이 존재한다. 특정 파라미터 값이 충분한 검증 없이 서버 측 PHP 코드에 직접 삽입되어 실행되며, 공격자는 이를 악용하여 임의의 PHP 코드를 실행할 수 있다. 해당 취약점은 인증된 고권한 사용자가 악용할 경우 서버에서 원격 코드 실행(Remote Code Execution)을 가능하게 한다."
            },
            "advisory": "https://github.com/MacWarrior/clipbucket-v5/security/advisories/GHSA-3x4g-x3gv-rjmq",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-34444",
            "title": {
                "en": "Sandbox escape and RCE due to incomplete attribute_filter enforcement in getattr/setattr\t",
                "ko": "getattr/setattr에서 attribute_filter 적용 미흡으로 인한 샌드박스 탈출 및 원격 코드 실행(RCE)"
            },
            "impact": "",
            "target": "lupa<= 2.6",
            "summary": {
                "en": "The attribute_filter in the Lupa library is intended to restrict access to sensitive Python attributes when exposing objects to Lua. However, the filter is not consistently applied when attributes are accessed through built-in functions like getattr and setattr. This allows an attacker to bypass the intended restrictions and eventually achieve arbitrary code execution.",
                "ko": "Lupa 라이브러리의 attribute_filter는 Lua에 객체를 노출할 때 민감한 Python 속성에 대한 접근을 제한하기 위해 설계되었습니다.\n\n하지만 getattr, setattr와 같은 내장 함수를 통해 속성에 접근하는 경우에는 해당 필터가 일관되게 적용되지 않습니다. 이로 인해 공격자는 의도된 제한을 우회할 수 있으며, 결국 임의 코드 실행으로 이어질 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "moderate"
        },
        {
            "id": "CVE-2026-33752",
            "title": {
                "en": "Redirect-based SSRF leading to internal network access in curl_cffi (with TLS impersonation bypass)",
                "ko": "리다이렉트 기반 SSRF로 인해 curl_cffi에서 내부 네트워크 접근이 가능하며, TLS 위장 기능을 통해 보안 통제를 우회할 수 있는 취약점"
            },
            "impact": "8.6",
            "target": "curl-cffi<=v0.15.0b4",
            "summary": {
                "en": "curl_cffi does not restrict requests to internal IP ranges, and follows redirects automatically via the underlying libcurl.\n\nBecause of this, an attacker-controlled URL can redirect requests to internal services such as cloud metadata endpoints. In addition, curl_cffi’s TLS impersonation feature can make these requests appear as legitimate browser traffic, which may bypass certain network controls.",
                "ko": "curl_cffi는 내부 IP 대역으로의 요청을 제한하지 않으며, 내부적으로 사용하는 libcurl을 통해 리다이렉트를 자동으로 따라갑니다.\n\n이로 인해 공격자가 제어하는 URL을 통해 요청을 내부 서비스(예: 클라우드 메타데이터 엔드포인트)로 리다이렉트시킬 수 있습니다. 또한 curl_cffi의 TLS 위장(impersonation) 기능을 사용하면 이러한 요청이 정상적인 브라우저 트래픽처럼 보이게 되어, 일부 네트워크 보안 장비를 우회할 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-32321",
            "title": {
                "en": "Authenticated Time-based Blind SQL Injection in ClipBucket v5",
                "ko": "ClipBucket v5 내 인증된 사용자에 의한 시차 기반 블라인드 SQL 인젝션(Time-based Blind SQLi) 취약점"
            },
            "impact": "8.8",
            "target": "ClipBucket v5 (version prior to 5.5.3 #80)",
            "summary": {
                "en": "An authenticated time-based blind SQL injection vulnerability exists in ClipBucket prior to 5.5.3 #80 within the actions/ajax.php endpoint. Due to insufficient input sanitization of the userid parameter, an authenticated attacker can execute arbitrary SQL queries, leading to full database disclosure and potential administrative account takeover.",
                "ko": "ClipBucket 5.5.3 #80 이전 버전의 actions/ajax.php 엔드포인트에서 인증된 사용자가 수행할 수 있는 시차 기반 블라인드 SQL 인젝션 취약점이 발견되었습니다. userid 파라미터에 대한 입력값 검증이 미흡하여, 공격자가 임의의 SQL 쿼리를 실행함으로써 데이터베이스 전체 정보를 유출하거나 관리자 계정을 탈취할 수 있는 위험이 있습니다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-32321",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-33310",
            "title": {
                "en": "Command Injection via shell() Expansion in Parameter Defaults",
                "ko": "파라미터 기본값의 shell() 확장을 통한 Command Injection"
            },
            "impact": "8.8",
            "target": "intake <= 2.0.9",
            "summary": {
                "en": "The shell() syntax within parameter default values appears to be automatically expanded during the catalog parsing process.\nIf a catalog contains a parameter default such as shell(), the command may be executed when the catalog source is accessed.\nThis means that if a user loads a malicious catalog YAML, embedded commands could execute on the host system.\nThis behavior could potentially be classified as CWE-78: OS Command Injection / Unsafe Shell Expansion.",
                "ko": "파라미터 기본값에 포함된 shell() 구문은 카탈로그 파싱 과정에서 자동으로 확장되는 것으로 보입니다.\n카탈로그에 shell() 형태의 기본값이 포함되어 있을 경우, 해당 카탈로그 소스를 로드하는 시점에 명령이 실행될 수 있습니다.\n\n이는 사용자가 악의적으로 조작된 카탈로그 YAML 파일을 로드할 경우, 내부에 삽입된 명령이 호스트 시스템에서 실행될 수 있음을 의미합니다.\n\n따라서 이 동작은 CWE-78: OS Command Injection (운영체제 명령어 인젝션) 또는 Unsafe Shell Expansion으로 분류될 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-33147",
            "title": {
                "en": "Stack-based Buffer Overflow in gmt_remote_dataset_id",
                "ko": "gmt_remote_dataset_id 내 스택 기반 버퍼 오버플로우"
            },
            "impact": "7.3",
            "target": "GenericMappingTools/gmt (C/C++)<= 6.6.0",
            "summary": {
                "en": "A stack-based buffer overflow vulnerability was identified in the gmt_remote_dataset_id function within src/gmt_remote.c. This issue occurs when a specially crafted long string is passed as a dataset identifier (e.g., via the which module), leading to a crash or potential arbitrary code execution.",
                "ko": "데이터셋 식별자(예: which 모듈을 통해 전달됨)로 특수하게 조작된 긴 문자열이 입력될 때, 고정된 크기의 스택 버퍼를 초과하여 복사하면서 발생하는 취약점입니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-33154",
            "title": {
                "en": "Remote Code Execution (RCE) via Insecure Template Evaluation in @jinja Resolver",
                "ko": "@jinja 리졸버의 안전하지 않은 템플릿 평가를 통한 원격 코드 실행(RCE)"
            },
            "impact": "7.5",
            "target": "dynaconf<= 3.2.12",
            "summary": {
                "en": "Dynaconf is vulnerable to Server-Side Template Injection (SSTI) due to unsafe template evaluation in the @Jinja resolver.\nWhen the jinja2 package is installed, Dynaconf evaluates template expressions embedded in configuration values without a sandboxed environment.",
                "ko": "Dynaconf 라이브러리에서 jinja2 패키지가 설치된 경우, 설정값에 포함된 템플릿 표현식을 평가할 때 샌드박스(Sandbox) 환경을 사용하지 않아 발생하는 취약점입니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-30862",
            "title": {
                "en": "Stored Cross-Site Scripting Leading to Privilege Escalation",
                "ko": "Stored XSS를 통한 권한 상승 취약점"
            },
            "impact": "9.1",
            "target": "Appsmith < 1.96",
            "summary": {
                "en": "A critical Stored Cross-Site Scripting (XSS) vulnerability exists in versions prior to 1.96. Due to improper neutralization of user-supplied input, an authenticated attacker can inject malicious scripts that are stored and later executed in other users’ browsers. By leveraging this vulnerability, an attacker may escalate privileges and potentially take over administrative functionality within the application.",
                "ko": "1.96 이전 버전에서 Stored Cross-Site Scripting(XSS) 취약점이 존재한다. 사용자 입력값에 대한 적절한 필터링이 이루어지지 않아 공격자가 악성 스크립트를 저장할 수 있으며, 해당 스크립트는 다른 사용자가 페이지를 열 때 실행된다. 이를 통해 공격자는 권한 상승을 수행하거나 관리자 기능을 탈취할 수 있다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-30862",
            "contributors": [
                "drkim"
            ],
            "severity": "critical"
        },
        {
            "id": "CVE-2026-25991",
            "title": {
                "en": "Blind SSRF via Redirect Bypass",
                "ko": "URL 리다이렉트 검증 미흡으로 인한 인증 사용자 Blind SSRF 취약점"
            },
            "impact": "7.7",
            "target": "Tandoor Recipes < 2.5.1",
            "summary": {
                "en": "A Blind Server-Side Request Forgery (SSRF) vulnerability exists in the Cookmate recipe import functionality prior to version 2.5.1. The application fails to properly validate the destination URL after following HTTP redirects. An authenticated user can exploit this issue to force the server to make requests to arbitrary internal or external resources. This may allow attackers to scan internal network services, access cloud instance metadata services, or disclose the server’s real IP address.",
                "ko": "2.5.1 이전 버전의 Cookmate 레시피 Import 기능에서 Blind SSRF 취약점이 존재한다. HTTP 리다이렉트 이후 최종 목적지 URL에 대한 검증이 제대로 이루어지지 않아 인증된 사용자가 서버로 하여금 임의의 내부 또는 외부 자원에 요청을 보내도록 만들 수 있다. 이를 통해 내부 네트워크 포트 스캔, 클라우드 메타데이터 서비스 접근, 서버의 실제 IP 주소 노출 등의 공격이 가능하다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-25991",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-25964",
            "title": {
                "en": "Authenticated LFD via Path Traversal",
                "ko": "Path Traversal을 통한 인증 사용자 임의 파일 읽기(LFD) 취약점"
            },
            "impact": "4.9",
            "target": "Tandoor Recipes < 2.5.1",
            "summary": {
                "en": "An authenticated Local File Disclosure (LFD) vulnerability via Path Traversal exists in the Recipe Import functionality of the affected application prior to version 2.5.1. The issue is caused by insufficient validation of the file_path parameter in the local storage backend. An authenticated user with recipe import permissions can manipulate the parameter to traverse directories and read arbitrary files from the server, including sensitive system files or application configuration files.",
                "ko": "2.5.1 이전 버전의 Recipe Import 기능에서 Path Traversal을 통한 Local File Disclosure(LFD) 취약점이 존재한다. Local 스토리지 처리 과정에서 file_path 파라미터에 대한 입력 검증이 충분히 이루어지지 않아 인증된 사용자가 디렉터리 경로를 조작할 수 있다. 이를 통해 공격자는 시스템 파일이나 애플리케이션 설정 파일 등 서버의 임의 파일을 읽을 수 있다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-25964",
            "contributors": [
                "drkim"
            ],
            "severity": "moderate"
        },
        {
            "id": "CVE-2026-25924",
            "title": {
                "en": "Access Control Bypass Leading to Remote Code Executio",
                "ko": "접근제어 우회로 인한 원격 코드 실행(RCE) 취약점"
            },
            "impact": "8.4",
            "target": "Kanboard < 1.2.50",
            "summary": {
                "en": "A security control bypass vulnerability exists in Kanboard prior to version 1.2.50. Although the application disables the plugin installation interface when the PLUGIN_INSTALLER configuration is set to false, the backend endpoint does not properly enforce this restriction. An authenticated administrator can exploit this flaw to force the server to download and install a malicious plugin, resulting in arbitrary code execution on the server.",
                "ko": "Kanboard 1.2.50 이전 버전에서 플러그인 설치 기능과 관련된 접근제어 우회 취약점이 존재한다. PLUGIN_INSTALLER 설정이 false로 설정된 경우 사용자 인터페이스에서는 플러그인 설치 기능이 비활성화되지만, 서버의 백엔드 엔드포인트에서는 해당 설정에 대한 검증이 제대로 이루어지지 않는다. 인증된 관리자는 이를 악용하여 악성 플러그인을 서버에 다운로드 및 설치하도록 강제할 수 있으며, 이를 통해 서버에서 임의의 코드 실행(Remote Code Execution)이 가능하다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-25924",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "CVE-2026-29780",
            "title": {
                "en": "Path Traversal Vulnerability in eml_parser Leading to Arbitrary File Write",
                "ko": "eml_parser 라이브러리 내 경로 조작을 통한 임의 파일 쓰기 취약점"
            },
            "impact": "5.5",
            "target": "eml-parser< 2.0.1",
            "summary": {
                "en": "A path traversal vulnerability exists in the official example script of eml_parser prior to version 2.0.1. It allows an attacker to write arbitrary files outside the intended directory by using unsanitized attachment filenames from crafted EML files.\n",
                "ko": "eml_parser 2.0.1 미만 버전의 예제 스크립트에서 경로 조작 취약점이 발견되었습니다. 조작된 EML 파일의 첨부파일명을 검증 없이 사용하여, 지정된 디렉토리 외부의 경로에 임의 파일을 생성하거나 덮어쓸 수 있습니다."
            },
            "advisory": "https://nvd.nist.gov/vuln/detail/CVE-2026-29780",
            "contributors": [
                "redyank"
            ],
            "severity": "moderate"
        }
    ],
    "kves": [
        {
            "id": "KVE-2026-0325",
            "title": {
                "en": "Insecure Direct Object Reference (IDOR) via manipulation of the org_part parameter in hotel reservation lookup",
                "ko": "호텔 코드(org_part) 파라미터 조작을 통한 타 사용자 예약 정보 열람(IDOR)"
            },
            "impact": "none",
            "target": "mobile",
            "summary": {
                "en": "The hotel reservation lookup API lacks proper server-side access control on the org_part parameter. As a result, an authenticated user can modify this value to access reservation details belonging to other organizations or users, including real names and stay information.",
                "ko": "호텔 예약 조회 API에서 org_part 파라미터에 대한 서버 측 접근 통제가 미흡하여, 인증된 사용자가 임의로 값을 변경함으로써 타 부대/타 사용자 예약자의 실명 및 숙박 정보를 조회할 수 있음"
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "moderate"
        },
        {
            "id": "KVE-2025-0250",
            "title": {
                "en": "Improper Session Management Leading to Account Takeover via User Identifier Manipulation",
                "ko": "사용자 식별자 변조를 통한 계정 탈취 취약점"
            },
            "impact": "9.1",
            "target": "-",
            "summary": {
                "en": "A critical session management flaw was identified in a mobile application backend API. The application relied on a user identifier parameter included in HTTP requests to determine the acting user instead of validating the authenticated session. By modifying this identifier, an authenticated attacker could impersonate other users and perform actions on their behalf. This issue could result in complete account takeover, including access to personal information and the ability to perform privileged user actions.",
                "ko": "모바일 애플리케이션 백엔드 API에서 세션 관리 및 사용자 식별 과정이 부적절하게 구현된 취약점이 발견되었습니다. 서버는 인증된 세션 정보와 사용자 식별자를 연계하여 검증하지 않고, 요청에 포함된 사용자 식별자 값을 신뢰하여 권한을 부여하고 있었습니다. 공격자는 HTTP 요청에 포함된 사용자 식별자를 다른 사용자 값으로 변경함으로써 해당 사용자의 권한으로 다양한 기능을 수행할 수 있으며, 이로 인해 계정 탈취 및 개인정보 접근 등의 보안 문제가 발생할 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "critical"
        },
        {
            "id": "KVE-2025-0249",
            "title": {
                "en": "Improper Authorization Leading to Unauthorized Access to User Information via API Parameter Manipulation",
                "ko": "API 파라미터 조작을 통한 사용자 정보 무단 조회 취약점"
            },
            "impact": "9.1",
            "target": "-",
            "summary": {
                "en": "An authorization flaw was identified in a mobile application backend API responsible for retrieving user profile information. By manipulating a user identifier parameter in the request, an authenticated user could access personal information associated with other accounts without proper authorization checks. The vulnerability may allow attackers to enumerate user identifiers and collect sensitive information such as email addresses, phone numbers, and profile metadata.",
                "ko": "모바일 애플리케이션 백엔드의 사용자 정보 조회 API에서 권한 검증이 미흡한 취약점이 발견되었습니다. 인증된 사용자가 요청 파라미터에 포함된 사용자 식별자 값을 조작할 경우, 서버는 별도의 인가 검증 없이 해당 사용자 계정의 정보를 반환합니다. 이를 통해 공격자는 사용자 식별자를 변경하며 다른 사용자 계정의 이메일, 휴대전화 번호 등 개인정보를 무단으로 조회할 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "critical"
        },
        {
            "id": "KVE-2025-0248",
            "title": {
                "en": "Improper Input Validation Leading to Application Credit Manipulation",
                "ko": "입력값 검증 미흡으로 인한 애플리케이션 크레딧 조작 취약점"
            },
            "impact": "7.2",
            "target": "-",
            "summary": {
                "en": "A business logic vulnerability caused by insufficient input validation was identified in a mobile application platform. The server fails to properly validate certain client-controlled parameters involved in application credit processing. By manipulating these values, an attacker may influence the application’s internal transaction logic and alter the user’s credit balance in an unintended manner. This issue could allow malicious users to accumulate application credits illegitimately and potentially abuse the platform’s digital asset system.",
                "ko": "모바일 애플리케이션 플랫폼에서 입력값 검증 미흡으로 인한 비즈니스 로직 취약점이 확인되었다. 서버 측에서 애플리케이션 크레딧 처리와 관련된 일부 클라이언트 전달 값에 대한 검증이 충분히 이루어지지 않아 공격자가 값을 조작할 수 있다. 이를 통해 애플리케이션의 내부 트랜잭션 로직에 영향을 주어 사용자의 크레딧 잔액을 의도하지 않은 방식으로 변경할 수 있으며, 결과적으로 서비스의 디지털 자산 시스템이 악용될 가능성이 있다."
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "KVE-2025-0142",
            "title": {
                "en": "Improper Input Validation Leading to Reward Manipulation",
                "ko": "입력값 검증 미흡으로 인한 보상 포인트 조작 취약점"
            },
            "impact": "7.0",
            "target": "-",
            "summary": {
                "en": "A business logic vulnerability caused by improper input validation was identified in a mobile reward platform application. The server fails to sufficiently validate certain client-supplied parameters related to reward processing. By manipulating these values, an attacker could influence the application’s internal reward calculation logic and obtain points in an unintended manner. This issue could allow malicious users to accumulate rewards illegitimately and disrupt the integrity of the platform’s reward system.",
                "ko": "모바일 리워드 플랫폼 애플리케이션에서 입력값 검증 미흡으로 인한 비즈니스 로직 취약점이 확인되었다. 서버 측에서 클라이언트가 전달하는 일부 파라미터에 대한 검증이 충분히 이루어지지 않아 공격자가 값을 조작할 수 있으며, 이를 통해 애플리케이션의 보상 계산 로직에 영향을 주어 의도하지 않은 방식으로 포인트를 획득할 수 있다. 이러한 취약점은 서비스의 보상 시스템 무결성을 훼손할 가능성이 있다."
            },
            "advisory": "",
            "contributors": [
                "drkim"
            ],
            "severity": "high"
        },
        {
            "id": "KVE-2026-0167",
            "title": {
                "en": "Insecure storage of API Key leading to unauthorized API consumption",
                "ko": "안전하지 않은 API키를 이용한 인한 비인가된 API 무단 사용"
            },
            "impact": "5.3",
            "target": "-",
            "summary": {
                "en": "The application exposes an unrestricted Google API Key that is directly linked to the organization's Google Cloud Billing account. Since Google Maps is a usage-based paid service, an attacker can exploit this key to incur unauthorized financial costs and exhaust the project's credit limits. This vulnerability represents a direct financial risk and Generate Denial-of-Service.",
                "ko": "안드로이드 애플리케이션 소스 코드 내에 하드코딩된 Google API Key가 외부로 노출되는 취약점이 발견되었습니다. 해당 키는 구글 맵스와 같은 종량제 과금 서비스와 연동되어 있으나, 사용 범위에 대한 적절한 제한 설정이 누락되어 있어 직접적인 경제적 타격 및 서비스 거부 반응을 유발합니다."
            },
            "advisory": "",
            "contributors": [
                "dyingman1"
            ],
            "severity": "moderate"
        },
        {
            "id": "KVE-2026-0154",
            "title": {
                "en": "Insecure Direct Object Reference (IDOR) leading to Unauthorized PII Disclosure via Member ID",
                "ko": "회원번호 변조를 통한 개인정보 무단 조회 취약점"
            },
            "impact": "7.5",
            "target": "-",
            "summary": {
                "en": "A critical Insecure Direct Object Reference (IDOR) vulnerability was identified in the user profile retrieval module. The application fails to perform an access control check, allowing an attacker to access sensitive Personal Identifiable Information (PII) of other users by simply modifying the Member ID parameter in the request.",
                "ko": "사용자 프로필 조회 모듈에서 적절한 접근 제어(Access Control) 검증이 이루어지지 않아 발생하는 IDOR(부적절한 직접 객체 참조) 취약점이 발견되었습니다. 공격자는 요청 패킷 내의 회원번호(Member ID) 파라미터를 타인의 번호로 변조하는 것만으로, 별도의 패스워드 인증 없이 민감한 개인정보(PII)를 무단으로 열람할 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "dyingman1"
            ],
            "severity": "high"
        },
        {
            "id": "KVE-2026-0141",
            "title": {
                "en": "Insecure storage of API Key leading to unauthorized API consumption",
                "ko": "안전하지 않은 API키를 이용한 인한 비인가된 API 무단 사용"
            },
            "impact": "5.3",
            "target": "-",
            "summary": {
                "en": "The application exposes an unrestricted Google API Key that is directly linked to the organization's Google Cloud Billing account. Since Google Maps is a usage-based paid service, an attacker can exploit this key to incur unauthorized financial costs and exhaust the project's credit limits. This vulnerability represents a direct financial risk and Generate Denial-of-Service.",
                "ko": "안드로이드 애플리케이션 소스 코드 내에 하드코딩된 Google API Key가 외부로 노출되는 취약점이 발견되었습니다. 해당 키는 구글 맵스와 같은 종량제 과금 서비스와 연동되어 있으나, 사용 범위에 대한 적절한 제한 설정이 누락되어 있어 직접적인 경제적 타격 및 서비스 거부 반응을 유발합니다."
            },
            "advisory": "",
            "contributors": [
                "dyingman1"
            ],
            "severity": "moderate"
        },
        {
            "id": "KVE-2026-0118",
            "title": {
                "en": "Unauthorized Access to National Teacher Information via Broken Access Control in Childcare Service Mobile App",
                "ko": "영유아 교육 서비스 앱 내 권한 검증 미흡을 통한 전국 교사 개인정보 무단 열람 취약점"
            },
            "impact": "9.1",
            "target": "-",
            "summary": {
                "en": "The mobile app's REST API lacks proper authorization checks, allowing standard parent accounts to bypass ownership verification. This enables unauthorized access to sensitive personal data (real names, photos, IDs) of over 610,000 teachers nationwide.",
                "ko": "앱 REST API의 권한 검증 미흡으로 부모 계정이 소유권 확인을 우회하여 전국 교사 61만 명의 개인정보를 무단 열람할 수 있는 취약점입니다. API 요청 변조를 통해 타 기관 교사의 실명, 사진, 계정 ID 등 민감 정보가 대규모로 노출될 수 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "critical"
        },
        {
            "id": "KVE-2025-0243",
            "title": {
                "en": "Exposure of Hardcoded Database Credentials and Encryption Keys in Android Application",
                "ko": "Android 애플리케이션 내 하드코딩된 데이터베이스 인증 정보 및 암호화 키 노출 취약점"
            },
            "impact": "7.5",
            "target": "-",
            "summary": {
                "en": "The Android application contains hardcoded database credentials (ID, Password, URL) and encryption keys within its source code. An attacker can easily retrieve this sensitive information by decompiling the APK file. This vulnerability violates security best practices for credential protection and secure data storage, potentially leading to unauthorized database access.",
                "ko": "Android 애플리케이션 소스 코드 내에 데이터베이스 접속 정보(ID, 비밀번호, 접속 URL) 및 암호화 키가 하드코딩되어 있습니다. 공격자는 APK 디컴파일을 통해 이러한 민감 정보를 쉽게 탈취할 수 있으며, 이는 인증 정보 보호 및 안전한 저장에 관한 보안 권고를 위반합니다. 이를 통해 외부인이 데이터베이스에 무단으로 접근할 위험이 있습니다."
            },
            "advisory": "",
            "contributors": [
                "redyank"
            ],
            "severity": "high"
        }
    ]
};
