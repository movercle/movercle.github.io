# MoverOn 홈페이지

시간대별로 변화하는 역동적인 홈페이지 - 일과 삶의 균형을 표현하는 웹사이트

## 프로젝트 개요

MoverOn 홈페이지는 시간대에 따라 다른 테마와 콘텐츠를 보여주는 독특한 컨셉의 웹사이트입니다.

### 핵심 컨셉

- **On 시간** (오전 8시 ~ 오후 8시): 전문적이고 활발한 업무 모드
- **Off 시간** (오후 8시 ~ 다음날 오전 8시): 휴식과 워라밸을 강조하는 모드

## 주요 기능

### On 타임 (💼 Work Mode)
- 업무 및 기술 소개
- 진행 중인 프로젝트 현황
- 팀 활동 및 성과
- 전문성을 강조하는 디자인 (블루/그레이 톤)

### Off 타임 (🌙 Life Mode)
- 운동 및 휴식 관련 콘텐츠
- 팀의 워라밸 문화 소개
- 건강한 라이프스타일 공유
- 편안한 디자인 (따뜻한 톤)

## 기술 스택

- HTML5
- CSS3 (반응형 디자인)
- Vanilla JavaScript (시간대별 테마 전환)
- LocalStorage (사용자 설정 저장)

## 파일 구조

```
moveron_home/
├── index.html              # 메인 HTML 파일
├── css/
│   ├── common.css         # 공통 스타일
│   ├── on-theme.css       # On 타임 테마
│   └── off-theme.css      # Off 타임 테마
├── js/
│   ├── main.js            # 메인 JavaScript
│   └── theme-switcher.js  # 테마 전환 로직
├── images/
│   ├── on/                # On 타임 이미지
│   └── off/               # Off 타임 이미지
├── content.md             # 콘텐츠 기획 문서
└── README.md              # 이 파일
```

## 구현 가이드

### 1. HTML 구조 (index.html)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MoverOn - 움직이는 삶, 균형있는 일</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/on-theme.css" id="theme-style">
</head>
<body>
    <!-- 헤더 -->
    <header>
        <nav>
            <div class="logo">MoverOn</div>
            <div class="time-indicator">
                <span id="current-mode">On</span>
                <span id="current-time"></span>
            </div>
        </nav>
    </header>

    <!-- 메인 섹션 -->
    <main id="main-content">
        <!-- On/Off 시간대별로 다른 콘텐츠 표시 -->
    </main>

    <!-- 푸터 -->
    <footer>
        <p>&copy; 2024 MoverOn. All rights reserved.</p>
    </footer>

    <script src="js/theme-switcher.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

### 2. 테마 전환 로직 (js/theme-switcher.js)

```javascript
// 현재 시간 확인 및 테마 적용
function getCurrentMode() {
    const now = new Date();
    const hour = now.getHours();

    // 8시(08:00) ~ 20시(20:00)는 On, 그 외는 Off
    return (hour >= 8 && hour < 20) ? 'on' : 'off';
}

function applyTheme() {
    const mode = getCurrentMode();
    const themeStyle = document.getElementById('theme-style');
    const body = document.body;

    if (mode === 'on') {
        themeStyle.href = 'css/on-theme.css';
        body.classList.remove('off-mode');
        body.classList.add('on-mode');
        updateContent('on');
    } else {
        themeStyle.href = 'css/off-theme.css';
        body.classList.remove('on-mode');
        body.classList.add('off-mode');
        updateContent('off');
    }

    updateTimeDisplay();
}

function updateTimeDisplay() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    const modeElement = document.getElementById('current-mode');

    timeElement.textContent = now.toLocaleTimeString('ko-KR');
    modeElement.textContent = getCurrentMode() === 'on' ? 'On' : 'Off';
}

// 페이지 로드 시 및 매분마다 체크
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    setInterval(applyTheme, 60000); // 1분마다 체크
});
```

### 3. CSS 테마 예시

**On 테마 (css/on-theme.css)**
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --bg-color: #f3f4f6;
}

.on-mode {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Off 테마 (css/off-theme.css)**
```css
:root {
    --primary-color: #f59e0b;
    --secondary-color: #d97706;
    --text-color: #374151;
    --bg-color: #fef3c7;
}

.off-mode {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### 4. 콘텐츠 동적 변경 (js/main.js)

```javascript
function updateContent(mode) {
    const mainContent = document.getElementById('main-content');

    if (mode === 'on') {
        mainContent.innerHTML = `
            <section class="hero">
                <h1>💼 MoverOn이 움직입니다</h1>
                <p>전문성과 혁신으로 가치를 창출하는 시간</p>
            </section>
            <section class="features">
                <h2>우리의 프로젝트</h2>
                <!-- 프로젝트 목록 -->
            </section>
            <section class="team">
                <h2>팀 소개</h2>
                <!-- 팀 정보 -->
            </section>
        `;
    } else {
        mainContent.innerHTML = `
            <section class="hero">
                <h1>🌙 MoverOn이 충전합니다</h1>
                <p>건강한 삶과 균형을 추구하는 시간</p>
            </section>
            <section class="wellness">
                <h2>워라밸 문화</h2>
                <!-- 워라밸 관련 콘텐츠 -->
            </section>
            <section class="activities">
                <h2>우리의 활동</h2>
                <!-- 운동/취미 활동 -->
            </section>
        `;
    }
}
```

## 실행 방법

1. 프로젝트 클론 또는 다운로드
2. 파일 구조에 맞게 폴더 및 파일 생성
3. 웹 브라우저로 `index.html` 파일 열기
4. 시간대에 따라 자동으로 테마가 변경됩니다

### 로컬 서버 실행 (권장)

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 패키지)
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

## 추가 기능 아이디어

- [ ] 수동 테마 토글 버튼
- [ ] 부드러운 테마 전환 애니메이션
- [ ] 시간대별 배경 이미지 슬라이드쇼
- [ ] 반응형 디자인 강화 (모바일 최적화)
- [ ] 다크모드 옵션
- [ ] 방문자 통계 (On/Off 시간 방문 비율)

## 참고사항

- 시간대 기준은 사용자의 로컬 시간을 따릅니다
- 모든 리소스는 상대 경로를 사용하여 호환성을 높였습니다
- 브라우저 호환성: Chrome, Firefox, Safari, Edge (최신 버전)

## 라이선스

MIT License

## 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.
