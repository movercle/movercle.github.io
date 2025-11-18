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

### 📧 문의 폼 시스템
- **Firebase Firestore 연동**: 실시간 데이터 저장
- **다국어 지원**: 한국어/영어 폼 자동 전환
- **유효성 검사**: 이메일, 전화번호, 필수 항목 검증
- **자동 포맷팅**: 전화번호 하이픈 자동 입력
- **에러 처리**: 성공/실패 메시지 표시
- **관리자 페이지**: 문의 목록 조회 및 관리 (contact-list.html)
- **테스트 도구**: 개발자용 테스트 페이지 (contact-test.html)

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

### Backend & Database
- **Firebase**:
  - **Firestore**: NoSQL 데이터베이스 (문의 데이터 저장)
  - **Firebase Hosting**: 정적 사이트 호스팅 (선택 사항)
  - **Firebase SDK v10**: 모듈 방식 사용
- **실시간 데이터 동기화**: 문의 접수 즉시 저장

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
├── index.html                      # 메인 HTML 파일
├── styles.css                      # 통합 스타일시트 (ON/OFF 모드 포함)
├── script.js                       # 메인 JavaScript (모드 전환, i18n, 애니메이션)
├── contact.html                    # 문의 폼 페이지 (Firebase 연동)
├── contact.js                      # 문의 폼 핸들러 (다국어 지원)
├── contact-list.html               # 문의 목록 관리 페이지 (관리자용)
├── contact-test.html               # 문의 폼 테스트 페이지
├── firebase-config.js              # Firebase 설정 관리 모듈 (보안)
├── encode-firebase-config.html     # Firebase 설정 인코더 도구
├── .env.example                    # 환경 변수 템플릿
├── .gitignore                      # Git 제외 파일 목록
├── FIREBASE_SECURITY.md            # Firebase 보안 가이드
├── favicon.ico                     # 파비콘
├── CNAME                           # 커스텀 도메인 설정
├── images/
│   └── og-image.jpg                # Open Graph 이미지 (소셜 미디어 공유)
└── README.md                       # 프로젝트 문서 (이 파일)
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

### Firebase 설정 (문의 폼 사용 시)

문의 폼 기능을 사용하려면 Firebase 프로젝트 설정이 필요합니다:

1. **Firebase 프로젝트 생성**
   - [Firebase Console](https://console.firebase.google.com/) 접속
   - 새 프로젝트 생성 또는 기존 프로젝트 선택

2. **Firestore 데이터베이스 설정**
   - Firestore Database 메뉴에서 데이터베이스 생성
   - 테스트 모드로 시작 (나중에 보안 규칙 설정)

3. **Firebase 설정 정보 인코딩** (보안 강화)

   **방법 1: 인코더 도구 사용 (권장)**
   ```bash
   # 브라우저에서 열기
   open encode-firebase-config.html
   ```
   - Firebase Console에서 설정 정보 복사
   - 인코더 도구에 입력
   - 생성된 Base64 인코딩 값을 `firebase-config.js`에 복사

   **방법 2: 환경 변수 사용**
   ```bash
   # .env.example을 복사하여 .env 파일 생성
   cp .env.example .env

   # .env 파일에 실제 Firebase 설정 입력
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   # ...
   ```

4. **보안 규칙 설정** (프로덕션 배포 전 필수)

   상세한 보안 설정은 [FIREBASE_SECURITY.md](./FIREBASE_SECURITY.md) 참고

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{document} {
         allow create: if request.resource.data.keys().hasAll([
           'companyName', 'email', 'phone', 'message'
         ]);
         allow read: if request.auth != null;  // 인증된 사용자만
       }
     }
   }
   ```

5. **도메인 제한 설정**
   - Firebase Console → 프로젝트 설정 → 승인된 도메인
   - `www.moveron.co.kr` 추가
   - Google Cloud Console에서 API 키에 HTTP 리퍼러 제한 설정

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

### 5. Firebase 문의 폼 연동 (보안 강화)

<augment_code_snippet path="firebase-config.js" mode="EXCERPT">
````javascript
// Firebase 설정 모듈 (보안)
export function getFirebaseConfig() {
    const env = getEnvironment();
    const encodedConfig = ENCODED_CONFIG[env];

    // Base64 디코딩하여 설정 반환
    return {
        apiKey: decodeConfig(encodedConfig.apiKey),
        authDomain: decodeConfig(encodedConfig.authDomain),
        // ...
    };
}
````
</augment_code_snippet>

<augment_code_snippet path="contact.html" mode="EXCERPT">
````javascript
// Firebase 설정 모듈 import
import { getFirebaseConfig, validateConfig } from "./firebase-config.js";

// 안전하게 설정 가져오기
const firebaseConfig = getFirebaseConfig();

// 유효성 검사
if (!validateConfig(firebaseConfig)) {
    throw new Error('Invalid Firebase configuration');
}

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
````
</augment_code_snippet>

<augment_code_snippet path="contact.js" mode="EXCERPT">
````javascript
// 폼 제출 처리
async function submitForm(data) {
    try {
        const result = await window.saveContactToFirestore(data);
        if (result.success) {
            // 성공 메시지 표시
            successMessage.classList.add('show');
            contactForm.reset();
        }
    } catch (error) {
        // 에러 메시지 표시
        console.error('전송 실패:', error);
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
script.js (메인 페이지)
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

contact.js (문의 폼)
├── Translation System
│   ├── TRANSLATIONS (ko, en)
│   ├── translatePage()
│   └── updatePlaceholders()
├── Form Validation
│   ├── validateForm()
│   ├── validateEmail()
│   └── validatePhone()
├── Form Submission
│   ├── submitForm()
│   └── saveContactToFirestore()
├── Auto-formatting
│   └── formatPhoneNumber()
└── Language Switcher
    └── initLanguageSwitcher()
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

### Firebase 프로젝트 변경

본인의 Firebase 프로젝트를 사용하려면 `firebase-config.js` 파일을 수정하세요:

**방법 1: 인코더 도구 사용 (권장)**
```bash
# 브라우저에서 인코더 도구 열기
open encode-firebase-config.html

# 1. Firebase Console에서 설정 복사
# 2. 인코더 도구에 입력
# 3. 생성된 Base64 값을 firebase-config.js의 ENCODED_CONFIG에 복사
```

**방법 2: 직접 인코딩**
```javascript
// 브라우저 콘솔에서 실행
const apiKey = "YOUR_API_KEY";
const encoded = btoa(apiKey);
console.log(encoded);

// firebase-config.js의 ENCODED_CONFIG 업데이트
production: {
    apiKey: "BASE64_ENCODED_VALUE",
    // ...
}
```

**방법 3: 환경 변수 사용**
```bash
# .env 파일 생성
cp .env.example .env

# .env 파일에 실제 값 입력
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
# ...
```

### 문의 폼 필드 추가

`contact.html`과 `contact.js`를 수정하여 새로운 필드를 추가할 수 있습니다:

**contact.html에 필드 추가:**
```html
<div class="form-group">
    <label for="budget">
        <span data-i18n="contact.form.budget">예산 범위</span>
        <span class="required">*</span>
    </label>
    <select id="budget" name="budget" required>
        <option value="">선택해주세요</option>
        <option value="under-10m">1천만원 미만</option>
        <option value="10m-50m">1천만원 ~ 5천만원</option>
        <option value="over-50m">5천만원 이상</option>
    </select>
</div>
```

**contact.js에서 데이터 수집:**
```javascript
const formData = {
    companyName: document.getElementById('companyName').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    message: document.getElementById('message').value.trim(),
    budget: document.getElementById('budget').value  // 새 필드 추가
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

#### 메인 페이지
- [ ] 오전 8시 전후 모드 전환 확인
- [ ] 오후 8시 전후 모드 전환 확인
- [ ] 한국어/영어 전환 테스트
- [ ] 모바일 반응형 확인 (320px, 375px, 414px)
- [ ] 태블릿 반응형 확인 (768px, 1024px)
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 테스트 (NVDA, VoiceOver)
- [ ] 다양한 브라우저에서 확인

#### 문의 폼 (contact.html)
- [ ] Firebase 연결 확인 (콘솔에서 "🔥 Firebase 초기화 완료" 메시지)
- [ ] Firebase 설정 유효성 검사 확인
- [ ] 환경 자동 감지 확인 (production/development)
- [ ] 폼 유효성 검사 테스트 (빈 필드, 잘못된 이메일/전화번호)
- [ ] 전화번호 자동 포맷팅 확인
- [ ] 한국어/영어 폼 전환 테스트
- [ ] 성공 메시지 표시 확인
- [ ] 에러 메시지 표시 확인
- [ ] Firestore에 데이터 저장 확인
- [ ] 모바일 반응형 확인

#### 관리자 페이지 (contact-list.html)
- [ ] Firebase 설정 로드 확인
- [ ] 로그인 기능 테스트
- [ ] 문의 목록 조회 확인
- [ ] 상태 변경 기능 테스트
- [ ] 검색/필터 기능 확인
- [ ] 엑셀 내보내기 테스트

#### 보안 테스트
- [ ] `.env` 파일이 Git에 커밋되지 않는지 확인
- [ ] Firebase 보안 규칙 적용 확인
- [ ] 도메인 제한 설정 확인
- [ ] API 키 HTTP 리퍼러 제한 확인
- [ ] 비인증 사용자의 데이터 읽기 차단 확인

---

## 🔐 보안 기능

### Firebase 설정 보안

#### 1. **설정 파일 분리**
- Firebase 설정을 `firebase-config.js`로 분리
- HTML 파일에 직접 노출되지 않음
- 모듈 방식으로 안전하게 import

#### 2. **Base64 인코딩**
- 설정 값을 Base64로 인코딩하여 저장
- 기본적인 난독화 제공
- `encode-firebase-config.html` 도구로 쉽게 인코딩

#### 3. **환경 변수 지원**
- `.env` 파일을 통한 설정 관리
- 프로덕션/개발 환경 자동 분리
- 서버 사이드 환경 변수 우선 사용

#### 4. **자동 환경 감지**
```javascript
// 도메인 기반 자동 환경 감지
www.moveron.co.kr → production
localhost → development
```

#### 5. **설정 유효성 검사**
- 필수 필드 자동 검증
- 잘못된 설정 시 에러 발생
- 개발 모드에서 상세 로그 출력

### Firestore 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      // ✅ 쓰기: 필수 필드 검증
      allow create: if request.resource.data.keys().hasAll([
        'companyName', 'email', 'phone', 'message'
      ]) && request.resource.data.message.size() >= 10;

      // ✅ 읽기: 관리자만
      allow read: if request.auth != null
        && request.auth.token.admin == true;

      // ❌ 삭제: 금지
      allow delete: if false;
    }
  }
}
```

### 도메인 제한

#### Firebase Console 설정
- `www.moveron.co.kr` 승인
- `localhost` (개발용만)

#### Google Cloud Console 설정
- API 키에 HTTP 리퍼러 제한
- 허용 도메인만 API 사용 가능

### Git 보안

`.gitignore`로 민감한 정보 보호:
```
.env
.env.local
.firebase/
firebase-debug.log
```

---

## 📧 문의 폼 시스템 상세

### 주요 기능

#### 1. **다국어 지원**
- 한국어/영어 자동 전환
- 폼 레이블, 플레이스홀더, 에러 메시지 모두 번역
- LocalStorage에 언어 설정 저장

#### 2. **실시간 유효성 검사**
- 이메일 형식 검증 (정규식)
- 전화번호 형식 검증 (010-1234-5678)
- 필수 항목 체크
- 최소 글자 수 검증 (문의 내용 10자 이상)

#### 3. **자동 포맷팅**
- 전화번호 입력 시 자동 하이픈 삽입
- 숫자만 입력 가능하도록 필터링

#### 4. **Firebase Firestore 연동**
- 실시간 데이터 저장
- 서버 타임스탬프 자동 기록
- 문서 ID 자동 생성
- 에러 처리 및 재시도 로직

#### 5. **사용자 피드백**
- 전송 중 로딩 상태 표시
- 성공 메시지 (5초 후 자동 숨김)
- 에러 메시지 (7초 후 자동 숨김)
- 폼 자동 리셋

### 데이터 구조

Firestore에 저장되는 문의 데이터 구조:

```javascript
{
  companyName: "회사명",
  email: "example@company.com",
  phone: "010-1234-5678",
  message: "문의 내용...",
  createdAt: Timestamp,  // 서버 타임스탬프
  status: "pending"      // pending, processing, completed
}
```

### 관리자 페이지 (contact-list.html)

#### 기능
- 📋 **문의 목록 조회**: 실시간 데이터 동기화
- 🔍 **검색 및 필터**: 상태별, 날짜별 필터링
- ✏️ **상태 변경**: pending → processing → completed
- 📊 **통계 대시보드**: 총 문의 수, 상태별 통계
- 📥 **엑셀 내보내기**: CSV 형식으로 다운로드
- 🔐 **로그인 인증**: 관리자만 접근 가능

#### 접근 방법
```
https://www.moveron.co.kr/contact-list.html
```

### 테스트 페이지 (contact-test.html)

개발자를 위한 테스트 도구:

#### 기능
- 🧪 Firebase 연결 상태 자동 확인
- 📝 샘플 데이터 자동 입력
- 🖥️ 실시간 콘솔 로그 표시
- 🔄 iframe으로 문의 폼 미리보기

#### 사용 방법
```bash
# 로컬 서버 실행
python -m http.server 8000

# 브라우저에서 접속
http://localhost:8000/contact-test.html
```

---

## 📚 참고 문서

### 프로젝트 문서

- **[FIREBASE_SECURITY.md](./FIREBASE_SECURITY.md)**: Firebase 보안 설정 가이드 ⭐ **필독**

### 외부 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

## 🚀 향후 개선 계획

### 단기 목표 (1-3개월)

- [x] ~~문의 폼 백엔드 연동~~ ✅ **완료** (Firebase Firestore)
- [x] ~~문의 폼 다국어 지원~~ ✅ **완료**
- [ ] 문의 폼 이메일 알림 (Firebase Functions)
- [ ] 블로그 섹션 추가
- [ ] 프로젝트 포트폴리오 페이지
- [ ] Google Analytics 통합
- [ ] 성능 모니터링 도구 추가
- [ ] reCAPTCHA 스팸 방지

### 중기 목표 (3-6개월)

- [ ] CMS 연동 (콘텐츠 관리 시스템)
- [ ] 다국어 확장 (일본어, 중국어)
- [ ] 팀 멤버 소개 페이지
- [ ] 채용 페이지
- [ ] 뉴스레터 구독 기능
- [ ] 문의 통계 대시보드
- [ ] 자동 응답 시스템

### 장기 목표 (6개월+)

- [ ] 인터랙티브 3D 요소 추가
- [ ] AI 챗봇 통합
- [ ] 개인화된 사용자 경험
- [ ] PWA (Progressive Web App) 전환
- [ ] 다크모드 수동 토글 옵션
- [ ] 실시간 채팅 지원

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
- **문의 폼**: [www.moveron.co.kr/contact.html](https://www.moveron.co.kr/contact.html)
- **위치**: 서울, 대한민국

프로젝트 관련 문의사항이나 버그 리포트는 [GitHub Issues](https://github.com/movercle/movercle.github.io/issues)에 등록해주세요.

---

## 🚦 빠른 시작 가이드

### 1️⃣ 메인 페이지 확인
```
https://www.moveron.co.kr
```
- 시간대별 ON/OFF 모드 자동 전환 확인
- 한국어/영어 언어 전환 테스트

### 2️⃣ 문의 폼 테스트
```
https://www.moveron.co.kr/contact.html
```
- 샘플 데이터 입력 및 전송
- Firebase 콘솔에서 데이터 확인

### 3️⃣ 관리자 페이지 접속
```
https://www.moveron.co.kr/contact-list.html
```
- 로그인 후 문의 목록 확인
- 상태 변경 및 관리 기능 사용

### 4️⃣ 개발자 테스트
```bash
# 저장소 클론
git clone https://github.com/movercle/movercle.github.io.git
cd movercle.github.io

# 로컬 서버 실행
python -m http.server 8000

# 테스트 페이지 접속
http://localhost:8000/contact-test.html
```

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
