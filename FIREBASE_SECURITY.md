# 🔐 Firebase 보안 설정 가이드

## 📋 목차
1. [설정 파일 구조](#설정-파일-구조)
2. [환경 변수 설정](#환경-변수-설정)
3. [Base64 인코딩 방법](#base64-인코딩-방법)
4. [Firebase 보안 규칙](#firebase-보안-규칙)
5. [도메인 제한 설정](#도메인-제한-설정)
6. [보안 체크리스트](#보안-체크리스트)

---

## 🗂️ 설정 파일 구조

### 파일 목록
```
movercle.github.io/
├── firebase-config.js      # Firebase 설정 관리 모듈
├── .env.example            # 환경 변수 템플릿
├── .env                    # 실제 환경 변수 (Git 제외)
└── .gitignore              # Git 제외 파일 목록
```

### firebase-config.js
- Base64로 인코딩된 Firebase 설정 저장
- 환경별 설정 분리 (production/development)
- 자동 환경 감지 및 설정 로드
- 설정 유효성 검사 기능

---

## 🔧 환경 변수 설정

### 1. .env 파일 생성

```bash
# .env.example을 복사하여 .env 파일 생성
cp .env.example .env
```

### 2. 실제 값 입력

`.env` 파일을 열고 Firebase Console에서 가져온 실제 값을 입력:

```env
FIREBASE_API_KEY=AIzaSyDDSda46o3IymPBZ_xq9NOmr2rmad_ZCuI
FIREBASE_AUTH_DOMAIN=moveron-sit.firebaseapp.com
FIREBASE_PROJECT_ID=moveron-sit
FIREBASE_STORAGE_BUCKET=moveron-sit.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=138498280072
FIREBASE_APP_ID=1:138498280072:web:755477f5d53831f42f2d3d
```

### 3. .gitignore 확인

`.env` 파일이 Git에 커밋되지 않도록 확인:

```bash
# .gitignore에 다음 내용이 있는지 확인
.env
.env.local
.env.production
```

---

## 🔒 Base64 인코딩 방법

### 온라인 도구 사용
1. [Base64 Encode](https://www.base64encode.org/) 접속
2. Firebase 설정 값 입력
3. Encode 버튼 클릭
4. 결과를 `firebase-config.js`에 복사

### JavaScript로 인코딩

```javascript
// 브라우저 콘솔에서 실행
const apiKey = "AIzaSyDDSda46o3IymPBZ_xq9NOmr2rmad_ZCuI";
const encoded = btoa(apiKey);
console.log(encoded);
// 출력: QUl6YVN5RERTZGE0Nm8zSXltUEJaX3hxOU5PbXIycm1hZF9aQ3VJ
```

### Node.js로 인코딩

```javascript
// encode-config.js
const config = {
    apiKey: "AIzaSyDDSda46o3IymPBZ_xq9NOmr2rmad_ZCuI",
    authDomain: "moveron-sit.firebaseapp.com",
    projectId: "moveron-sit",
    storageBucket: "moveron-sit.firebasestorage.app",
    messagingSenderId: "138498280072",
    appId: "1:138498280072:web:755477f5d53831f42f2d3d"
};

Object.entries(config).forEach(([key, value]) => {
    const encoded = Buffer.from(value).toString('base64');
    console.log(`${key}: "${encoded}",`);
});
```

실행:
```bash
node encode-config.js
```

---

## 🛡️ Firebase 보안 규칙

### Firestore 보안 규칙 설정

Firebase Console → Firestore Database → 규칙 탭:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // contacts 컬렉션 규칙
    match /contacts/{document} {
      // 쓰기: 필수 필드가 모두 있을 때만 허용
      allow create: if request.auth == null 
        && request.resource.data.keys().hasAll([
          'companyName', 'email', 'phone', 'message'
        ])
        && request.resource.data.companyName is string
        && request.resource.data.email is string
        && request.resource.data.phone is string
        && request.resource.data.message is string
        && request.resource.data.message.size() >= 10;
      
      // 읽기: 인증된 사용자만 (관리자)
      allow read: if request.auth != null 
        && request.auth.token.admin == true;
      
      // 업데이트: 인증된 관리자만
      allow update: if request.auth != null 
        && request.auth.token.admin == true;
      
      // 삭제: 금지
      allow delete: if false;
    }
  }
}
```

### 규칙 설명
- ✅ **create**: 누구나 문의 작성 가능 (필수 필드 검증)
- ✅ **read**: 관리자만 조회 가능
- ✅ **update**: 관리자만 수정 가능
- ❌ **delete**: 삭제 금지

---

## 🌐 도메인 제한 설정

### Firebase Console 설정

1. **Firebase Console** 접속
2. **프로젝트 설정** → **일반** 탭
3. **승인된 도메인** 섹션에서 다음 도메인 추가:

```
www.moveron.co.kr
moveron.co.kr
localhost (개발용)
127.0.0.1 (개발용)
```

### API 키 제한 (Google Cloud Console)

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. **API 및 서비스** → **사용자 인증 정보**
3. Firebase API 키 선택
4. **애플리케이션 제한사항** → **HTTP 리퍼러** 선택
5. 허용할 도메인 추가:

```
https://www.moveron.co.kr/*
https://moveron.co.kr/*
http://localhost:*
```

---

## ✅ 보안 체크리스트

### 배포 전 필수 확인사항

- [ ] `.env` 파일이 `.gitignore`에 포함되어 있는지 확인
- [ ] Firebase 설정이 `firebase-config.js`에서 관리되는지 확인
- [ ] Firestore 보안 규칙이 설정되어 있는지 확인
- [ ] 승인된 도메인이 Firebase Console에 등록되어 있는지 확인
- [ ] API 키에 HTTP 리퍼러 제한이 설정되어 있는지 확인
- [ ] 프로덕션 환경에서 개발자 콘솔 로그가 비활성화되어 있는지 확인

### 정기 점검사항

- [ ] Firebase 사용량 모니터링 (월 1회)
- [ ] 보안 규칙 검토 (분기 1회)
- [ ] API 키 로테이션 (연 1회)
- [ ] 접근 로그 확인 (주 1회)

---

## 🚨 보안 사고 대응

### API 키 노출 시

1. **즉시 조치**
   - Firebase Console에서 해당 API 키 비활성화
   - 새 API 키 생성
   - `firebase-config.js` 업데이트

2. **영향 범위 확인**
   - Firebase 사용량 확인
   - 비정상적인 접근 로그 확인
   - Firestore 데이터 무결성 확인

3. **재발 방지**
   - 보안 규칙 강화
   - 도메인 제한 재확인
   - 모니터링 알림 설정

---

## 📞 문의

보안 관련 문의사항:
- **이메일**: movercle@gmail.com
- **긴급**: Firebase Console → 지원 → 보안 문제 신고

