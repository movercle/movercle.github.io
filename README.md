# MoverOn 홈페이지

> **"목적을 가지고 나아가고, 의도를 가지고 휴식합니다."**

시간대별로 변화하는 역동적인 홈페이지 - 일과 삶의 균형을 표현하는 웹사이트

🌐 **Live Site:** [www.moveron.co.kr](https://www.moveron.co.kr)

---

## 📋 프로젝트 개요

MoverOn 홈페이지는 시간대에 따라 자동으로 테마와 콘텐츠가 전환되는 독특한 컨셉의 웹사이트입니다.
회사의 철학인 **"일과 삶의 균형"**을 웹사이트 자체가 구현하여, 방문자에게 차별화된 경험을 제공합니다.

### 🎯 핵심 컨셉

- **ON 모드** (오전 8시 ~ 오후 8시): 전문적이고 활발한 업무 모드
  - 비즈니스 솔루션 및 기술 소개
  - LMS, SI, AI 서비스 상세 정보
  - 전문성을 강조하는 디자인 (블루/퍼플 그라데이션)

- **OFF 모드** (오후 8시 ~ 다음날 오전 8시): 휴식과 워라밸을 강조하는 모드
  - 팀의 웰니스 문화 소개
  - 일과 삶의 균형에 대한 메시지
  - 편안한 디자인 (다크 테마, 퍼플 톤)

---

## ✨ 주요 기능

### 🌅 ON 모드 (Work Mode)
- **서비스 소개**: LMS, 시스템 통합(SI), AI 솔루션
- **전문적인 디자인**: 밝은 배경, 선명한 색상, 역동적인 애니메이션
- **비즈니스 중심 콘텐츠**: 솔루션 탐색, 프로젝트 문의
- **인터랙티브 요소**: 호버 효과, 카드 애니메이션, 파티클 효과

### 🌙 OFF 모드 (Life Mode)
- **웰니스 메시지**: 휴식, 운동, 일과 삶의 균형
- **편안한 디자인**: 다크 모드, 부드러운 색상, 차분한 애니메이션
- **인간 중심 콘텐츠**: 팀 문화, 워라밸 철학
- **감성적 요소**: 명언, 웰니스 카드, 부드러운 전환 효과

### 🌐 다국어 지원
- **한국어 (기본)**: 국내 사용자를 위한 기본 언어
- **영어**: 글로벌 사용자를 위한 영문 지원
- **실시간 전환**: 언어 변경 시 즉시 반영
- **LocalStorage 저장**: 사용자 언어 설정 기억

### 📱 반응형 디자인
- **모바일 최적화**: 320px ~ 480px
- **태블릿 지원**: 481px ~ 768px
- **데스크톱**: 769px ~ 1024px+
- **유연한 레이아웃**: 모든 화면 크기에서 최적의 경험

---

## 🛠 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업, SEO 최적화
- **CSS3**:
  - CSS Variables (테마 관리)
  - Flexbox & Grid (레이아웃)
  - Animations & Transitions (부드러운 효과)
  - Media Queries (반응형 디자인)
- **Vanilla JavaScript (ES6+)**:
  - 시간 기반 모드 전환
  - 다국어 지원 (i18n)
  - 인터랙티브 애니메이션
  - LocalStorage 활용

### 성능 최적화
- **CSS Transform**: GPU 가속 애니메이션
- **Intersection Observer**: 스크롤 애니메이션 최적화
- **Lazy Loading**: 이미지 및 콘텐츠 지연 로딩
- **Debouncing**: 스크롤 이벤트 최적화

### 접근성
- **ARIA Labels**: 스크린 리더 지원
- **Keyboard Navigation**: 키보드 접근성
- **Focus States**: 명확한 포커스 표시
- **Reduced Motion**: 애니메이션 감소 옵션 지원

---

## 📁 파일 구조

```
movercle.github.io/
├── index.html              # 메인 HTML 파일
├── styles.css              # 통합 스타일시트 (ON/OFF 모드 포함)
├── script.js               # 메인 JavaScript (모드 전환, i18n, 애니메이션)
├── favicon.ico             # 파비콘
├── CNAME                   # 커스텀 도메인 설정
├── images/
│   └── og-image.jpg        # Open Graph 이미지 (소셜 미디어 공유)
├── content.md              # 콘텐츠 기획 문서
├── DESIGN_CONCEPT.md       # 상세 디자인 컨셉 문서
└── README.md               # 프로젝트 문서 (이 파일)
```

---

## 🚀 시작하기

### 로컬 개발 환경 설정

1. **저장소 클론**
   ```bash
   git clone https://github.com/movercle/movercle.github.io.git
   cd movercle.github.io
   ```

2. **로컬 서버 실행**

   **Python 사용:**
   ```bash
   # Python 3
   python -m http.server 8000
   ```

   **Node.js 사용:**
   ```bash
   # http-server 설치 (최초 1회)
   npm install -g http-server

   # 서버 실행
   http-server -p 8000
   ```

   **VS Code Live Server 사용:**
   - VS Code에서 `index.html` 우클릭
   - "Open with Live Server" 선택

3. **브라우저에서 확인**
   ```
   http://localhost:8000
   ```

### 배포

이 프로젝트는 **GitHub Pages**를 통해 자동 배포됩니다.

- **배포 URL**: https://www.moveron.co.kr
- **자동 배포**: `main` 브랜치에 푸시 시 자동 배포
- **커스텀 도메인**: `CNAME` 파일을 통해 설정

---

## 💡 핵심 구현 로직

### 1. 시간 기반 모드 전환

<augment_code_snippet path="script.js" mode="EXCERPT">
````javascript
function getCurrentMode() {
    const now = new Date();
    const currentHour = now.getHours();

    // 8 AM ~ 8 PM: ON 모드, 그 외: OFF 모드
    if (currentHour >= 8 && currentHour < 20) {
        return 'on';
    } else {
        return 'off';
    }
}
````
</augment_code_snippet>

### 2. 다국어 지원 시스템

<augment_code_snippet path="script.js" mode="EXCERPT">
````javascript
const TRANSLATIONS = {
    ko: {
        hero: {
            title: { on: "학습과 기술의 미래를 움직입니다", ... },
            ...
        }
    },
    en: { ... }
};

function translatePage() {
    const lang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getNestedValue(TRANSLATIONS[lang], key);
    });
}
````
</augment_code_snippet>

### 3. CSS 변수를 활용한 테마 관리

<augment_code_snippet path="styles.css" mode="EXCERPT">
````css
:root {
    /* ON Mode Colors */
    --on-bg-primary: #ffffff;
    --on-accent: #0066ff;

    /* OFF Mode Colors */
    --off-bg-primary: #0f0f23;
    --off-accent: #9b59b6;
}

body.mode-on {
    background-color: var(--on-bg-primary);
}

body.mode-off {
    background-color: var(--off-bg-primary);
}
````
</augment_code_snippet>

### 4. 반응형 디자인

<augment_code_snippet path="styles.css" mode="EXCERPT">
````css
/* Mobile Portrait (320px - 480px) */
@media (max-width: 480px) {
    .hero-title {
        font-size: 1.5rem;
    }
    .btn {
        width: 100%;
        max-width: 280px;
    }
}

/* Tablet (481px - 768px) */
@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
````
</augment_code_snippet>

---

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
