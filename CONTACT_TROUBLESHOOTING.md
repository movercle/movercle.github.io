# 📧 Contact Form 에러 해결 가이드

## 🔍 발견된 문제점

### 1. **Firebase SDK 버전 충돌**
```html
<!-- ❌ 잘못된 코드 (이전) -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
</script>
```

**문제**: compat 버전(10.12.0)과 모듈 버전(12.6.0)을 동시에 로드하여 충돌 발생

---

### 2. **getFirestore import 누락**
```javascript
// ❌ 잘못된 코드
const db = getFirestore(app);  // getFirestore를 import하지 않음
```

**문제**: `getFirestore`를 import하지 않았는데 사용

---

### 3. **함수 스코프 문제**
```javascript
// ❌ 잘못된 코드
<script type="module">
  async function saveContactToFirestore() { ... }
</script>

// contact.js에서
saveContactToFirestore(data);  // 접근 불가!
```

**문제**: 모듈 스코프 내부의 함수는 외부에서 접근 불가

---

### 4. **Firestore API 사용 오류**
```javascript
// ❌ 잘못된 코드 (compat 방식)
await db.collection('contacts').add({ ... });

// ✅ 올바른 코드 (모듈 방식)
await addDoc(collection(db, 'contacts'), { ... });
```

**문제**: 모듈 방식에서는 다른 API 사용 필요

---

### 5. **에러 처리 누락**
```javascript
// ❌ 잘못된 코드
saveContactToFirestore(data);  // 에러 발생 시 사용자에게 알림 없음
```

**문제**: Firebase 저장 실패 시 사용자 피드백 없음

---

## ✅ 해결 방안

### 수정된 `contact.html` (핵심 부분)

```html
<script type="module">
    // 1. 올바른 import (버전 통일)
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    // 2. Firebase 초기화
    const firebaseConfig = {
        apiKey: "AIzaSyDDSda46o3IymPBZ_xq9NOmr2rmad_ZCuI",
        authDomain: "moveron-sit.firebaseapp.com",
        projectId: "moveron-sit",
        storageBucket: "moveron-sit.firebasestorage.app",
        messagingSenderId: "138498280072",
        appId: "1:138498280072:web:755477f5d53831f42f2d3d"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // 3. 전역 함수로 노출 (스코프 문제 해결)
    window.saveContactToFirestore = async function({ companyName, email, phone, message }) {
        try {
            // 4. 올바른 Firestore API 사용
            const docRef = await addDoc(collection(db, 'contacts'), {
                companyName,
                email,
                phone,
                message,
                createdAt: serverTimestamp(),
                status: 'pending'
            });
            
            return { success: true, id: docRef.id };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };
</script>
```

### 수정된 `contact.js` (핵심 부분)

```javascript
async function submitForm(data) {
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.textContent = '전송 중...';
    submitBtn.disabled = true;

    try {
        // 5. 에러 처리 추가
        if (typeof window.saveContactToFirestore === 'function') {
            const result = await window.saveContactToFirestore(data);
            
            if (result.success) {
                // 성공 메시지
                successMessage.classList.add('show');
                successMessage.innerHTML = '✅ 문의가 성공적으로 접수되었습니다!';
                contactForm.reset();
            } else {
                throw new Error(result.error);
            }
        } else {
            throw new Error('Firebase 함수를 찾을 수 없습니다.');
        }
    } catch (error) {
        // 에러 메시지
        successMessage.classList.add('show');
        successMessage.style.background = '#f44336';
        successMessage.innerHTML = '❌ 전송 중 오류가 발생했습니다.<br>' + error.message;
    } finally {
        submitBtn.textContent = '문의 보내기';
        submitBtn.disabled = false;
    }
}
```

---

## 🧪 테스트 방법

### 1. 브라우저 콘솔에서 확인

```bash
# 로컬 서버 실행
python -m http.server 8000
```

브라우저에서 `http://localhost:8000/contact.html` 접속 후:

1. **F12** 키를 눌러 개발자 도구 열기
2. **Console** 탭 확인
3. 폼 작성 후 전송
4. 콘솔에서 다음 메시지 확인:
   - `🔥 Firebase 초기화 완료`
   - `✅ Firestore 저장 성공! 문서 ID: ...`

### 2. 테스트 페이지 사용

```
http://localhost:8000/contact-test.html
```

이 페이지에서:
- Firebase 연결 상태 자동 확인
- 샘플 데이터 자동 입력
- 실시간 콘솔 로그 확인

---

## 🔴 자주 발생하는 에러

### 에러 1: "Firebase: No Firebase App '[DEFAULT]' has been created"

**원인**: Firebase가 초기화되지 않음

**해결**:
```javascript
// contact.html의 <script type="module"> 부분이 제대로 로드되었는지 확인
console.log('🔥 Firebase 초기화 완료'); // 이 메시지가 콘솔에 나타나야 함
```

---

### 에러 2: "saveContactToFirestore is not a function"

**원인**: 함수가 전역으로 노출되지 않음

**해결**:
```javascript
// 브라우저 콘솔에서 확인
console.log(typeof window.saveContactToFirestore);  // "function"이어야 함
```

---

### 에러 3: "Missing or insufficient permissions"

**원인**: Firestore 보안 규칙 문제

**해결**: Firebase Console에서 Firestore 규칙 수정
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read, write: if true;  // 테스트용 (프로덕션에서는 변경 필요)
    }
  }
}
```

---

### 에러 4: "CORS policy" 에러

**원인**: 로컬 파일(file://)로 직접 열었을 때 발생

**해결**: 반드시 로컬 서버 사용
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# VS Code Live Server
# index.html 우클릭 > Open with Live Server
```

---

## 📊 Firebase Console에서 확인

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. `moveron-sit` 프로젝트 선택
3. **Firestore Database** 메뉴 클릭
4. `contacts` 컬렉션에서 저장된 문서 확인

---

## 🔒 보안 권장사항

### 1. Firestore 보안 규칙 강화

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      // 쓰기만 허용, 읽기는 관리자만
      allow create: if request.resource.data.keys().hasAll(['companyName', 'email', 'phone', 'message']);
      allow read: if false;  // 일반 사용자는 읽기 불가
    }
  }
}
```

### 2. API Key 보호

현재 코드에서는 API Key가 노출되어 있습니다. 이는 Firebase의 일반적인 방식이지만, 추가 보안을 위해:

- Firebase Console에서 **App Check** 활성화
- **도메인 제한** 설정 (www.moveron.co.kr만 허용)

---

## 📞 추가 지원

문제가 계속되면:
1. 브라우저 콘솔 스크린샷
2. 에러 메시지 전체 내용
3. `contact-test.html`의 콘솔 로그

위 정보를 제공해주세요!

