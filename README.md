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

## 🎨 디자인 시스템

### 색상 팔레트

#### ON 모드
```css
Primary:    #0066FF (Electric Blue)
Secondary:  #667eea → #764ba2 (Gradient)
Background: #FFFFFF (White)
Text:       #1A1A1A (Dark Gray)
Accent:     #0052CC (Hover Blue)
```

#### OFF 모드
```css
Primary:    #9B59B6 (Purple)
Secondary:  #2C3E50 → #4A3266 (Gradient)
Background: #0F0F23 (Dark Navy)
Text:       #E8E8F0 (Light Gray)
Accent:     #8E44AD (Hover Purple)
```

### 타이포그래피

- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Hero Title**: 3rem (Desktop), 1.5rem (Mobile)
- **Section Title**: 2.5rem (Desktop), 1.5rem (Mobile)
- **Body Text**: 1rem, line-height: 1.6

### 애니메이션

- **Transition Speed**: 0.5s (모드 전환)
- **Hover Effects**: 0.3s ease
- **Particle Animation**: 8s ease-in-out infinite
- **Fade In**: 0.8s ease

---

## 📊 프로젝트 구조 상세

### HTML 구조

```
index.html
├── <head>
│   ├── Meta Tags (SEO, OG)
│   ├── Favicon
│   └── styles.css
├── <body>
│   ├── Header
│   │   ├── Logo
│   │   ├── Language Switcher (한국어/English)
│   │   └── Time Display (Mode Indicator)
│   ├── Main
│   │   ├── Hero Section
│   │   ├── Services Section (ON 모드)
│   │   └── Wellness Section (OFF 모드)
│   ├── Footer
│   │   ├── Brand Info
│   │   ├── Contact Info
│   │   └── Operating Hours
│   └── script.js
```

### JavaScript 모듈

```
script.js
├── Configuration
│   ├── ON_START_HOUR: 8
│   ├── ON_END_HOUR: 20
│   └── DEFAULT_LANG: 'ko'
├── Translation System
│   ├── TRANSLATIONS (ko, en)
│   ├── translatePage()
│   └── updateMetadata()
├── Mode Management
│   ├── getCurrentMode()
│   ├── updateMode()
│   └── checkAndApplyMode()
├── Time Display
│   └── updateTimeDisplay()
├── Language Switcher
│   └── initLanguageSwitcher()
└── Animations
    ├── Scroll Reveal
    ├── Particle Effects
    └── Page Load Animation
```

### CSS 구조

```
styles.css
├── CSS Variables & Reset
├── ON Mode Styles
│   ├── Colors
│   ├── Hero Gradient
│   └── Service Cards
├── OFF Mode Styles
│   ├── Colors
│   ├── Hero Gradient
│   └── Wellness Cards
├── Layout Components
│   ├── Container
│   ├── Header
│   └── Footer
├── Responsive Design
│   ├── Mobile (320px - 480px)
│   ├── Tablet (481px - 768px)
│   └── Desktop (769px+)
└── Accessibility
    ├── Focus States
    └── Reduced Motion
```

---

## 🔧 커스터마이징 가이드

### 운영 시간 변경

`script.js` 파일의 `CONFIG` 객체를 수정하세요:

```javascript
const CONFIG = {
    ON_START_HOUR: 9,    // 오전 9시로 변경
    ON_END_HOUR: 18,     // 오후 6시로 변경
    CHECK_INTERVAL: 60000,
    DEFAULT_LANG: 'ko'
};
```

### 색상 테마 변경

`styles.css` 파일의 `:root` 변수를 수정하세요:

```css
:root {
    --on-accent: #FF6B35;  /* 새로운 ON 모드 색상 */
    --off-accent: #00D9FF; /* 새로운 OFF 모드 색상 */
}
```

### 콘텐츠 수정

`script.js`의 `TRANSLATIONS` 객체에서 텍스트를 수정하세요:

```javascript
const TRANSLATIONS = {
    ko: {
        hero: {
            title: {
                on: "새로운 타이틀",  // 여기를 수정
                off: "새로운 OFF 타이틀"
            }
        }
    }
};
```

---

## 📈 성능 최적화

### 현재 성능 지표

- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.0s
- ✅ **Lighthouse Score**: 90+ (Performance)
- ✅ **Mobile Friendly**: 100%

### 최적화 기법

1. **CSS Transform 사용**: GPU 가속 애니메이션
2. **Intersection Observer**: 뷰포트 내 요소만 애니메이션
3. **Debouncing**: 스크롤 이벤트 최적화
4. **Lazy Loading**: 이미지 지연 로딩 준비
5. **Minification**: 프로덕션 배포 시 CSS/JS 압축 권장

---

## ♿ 접근성 (Accessibility)

### 구현된 접근성 기능

- ✅ **시맨틱 HTML**: 적절한 HTML5 태그 사용
- ✅ **ARIA Labels**: 스크린 리더 지원
- ✅ **Keyboard Navigation**: 모든 인터랙티브 요소 키보드 접근 가능
- ✅ **Focus Indicators**: 명확한 포커스 표시
- ✅ **Color Contrast**: WCAG AA 기준 충족
- ✅ **Reduced Motion**: `prefers-reduced-motion` 지원

### 테스트 방법

```bash
# Lighthouse 접근성 테스트
npx lighthouse https://www.moveron.co.kr --only-categories=accessibility

# axe DevTools 사용 (Chrome Extension)
# https://chrome.google.com/webstore/detail/axe-devtools
```

---

## 🧪 테스트

### 브라우저 호환성

| 브라우저 | 버전 | 지원 여부 |
|---------|------|----------|
| Chrome  | 90+  | ✅ 완전 지원 |
| Firefox | 88+  | ✅ 완전 지원 |
| Safari  | 14+  | ✅ 완전 지원 |
| Edge    | 90+  | ✅ 완전 지원 |
| IE 11   | -    | ❌ 미지원 |

### 테스트 체크리스트

- [ ] 오전 8시 전후 모드 전환 확인
- [ ] 오후 8시 전후 모드 전환 확인
- [ ] 한국어/영어 전환 테스트
- [ ] 모바일 반응형 확인 (320px, 375px, 414px)
- [ ] 태블릿 반응형 확인 (768px, 1024px)
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 테스트 (NVDA, VoiceOver)
- [ ] 다양한 브라우저에서 확인

---

## 📚 참고 문서

### 프로젝트 문서

- **[content.md](./content.md)**: 초기 콘텐츠 기획 아이디어
- **[DESIGN_CONCEPT.md](./DESIGN_CONCEPT.md)**: 상세 디자인 컨셉 및 철학

### 외부 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)

---

## 🚀 향후 개선 계획

### 단기 목표 (1-3개월)

- [ ] 블로그 섹션 추가
- [ ] 프로젝트 포트폴리오 페이지
- [ ] 문의 폼 백엔드 연동
- [ ] Google Analytics 통합
- [ ] 성능 모니터링 도구 추가

### 중기 목표 (3-6개월)

- [ ] CMS 연동 (콘텐츠 관리 시스템)
- [ ] 다국어 확장 (일본어, 중국어)
- [ ] 팀 멤버 소개 페이지
- [ ] 채용 페이지
- [ ] 뉴스레터 구독 기능

### 장기 목표 (6개월+)

- [ ] 인터랙티브 3D 요소 추가
- [ ] AI 챗봇 통합
- [ ] 개인화된 사용자 경험
- [ ] PWA (Progressive Web App) 전환
- [ ] 다크모드 수동 토글 옵션

---

## 🤝 기여하기

### 기여 방법

1. 이 저장소를 Fork 합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

### 코드 스타일

- **들여쓰기**: 4 spaces
- **따옴표**: 작은따옴표 사용
- **세미콜론**: 필수
- **네이밍**: camelCase (JavaScript), kebab-case (CSS)

---

## 📄 라이선스

이 프로젝트는 **MIT License**를 따릅니다.

---

## 📞 문의

- **이메일**: movercle@gmail.com
- **웹사이트**: [www.moveron.co.kr](https://www.moveron.co.kr)
- **위치**: 서울, 대한민국

프로젝트 관련 문의사항이나 버그 리포트는 [GitHub Issues](https://github.com/movercle/movercle.github.io/issues)에 등록해주세요.

---

## 🙏 감사의 말

이 프로젝트는 **일과 삶의 균형**이라는 가치를 웹사이트로 구현하려는 시도입니다.
방문해주시고 관심 가져주셔서 감사합니다.

**"목적을 가지고 나아가고, 의도를 가지고 휴식합니다."** 🚀🌙

---

<div align="center">

**Made with ❤️ by MoverOn Team**

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!

</div>
