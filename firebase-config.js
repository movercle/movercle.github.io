/**
 * Firebase Configuration Module
 * 
 * 보안 강화를 위한 Firebase 설정 관리
 * - 환경 변수를 통한 설정 관리
 * - Base64 인코딩을 통한 기본 보호
 * - 프로덕션/개발 환경 분리
 */

// 환경 변수 또는 인코딩된 설정 사용
const ENCODED_CONFIG = {
    // Base64로 인코딩된 Firebase 설정
    // 실제 배포 시에는 환경 변수나 서버 사이드에서 관리하는 것이 더 안전합니다
    production: {
        apiKey: "QUl6YVN5RERTZGE0Nm8zSXltUEJaX3hxOU5PbXIycm1hZF9aQ3VJ",
        authDomain: "bW92ZXJvbi1zaXQuZmlyZWJhc2VhcHAuY29t",
        projectId: "bW92ZXJvbi1zaXQ=",
        storageBucket: "bW92ZXJvbi1zaXQuZmlyZWJhc2VzdG9yYWdlLmFwcA==",
        messagingSenderId: "MTM4NDk4MjgwMDcy",
        appId: "MToxMzg0OTgyODAwNzI6d2ViOjc1NTQ3N2Y1ZDUzODMxZjQyZjJkM2Q="
    },
    development: {
        // 개발 환경용 설정 (필요시)
        apiKey: "QUl6YVN5RERTZGE0Nm8zSXltUEJaX3hxOU5PbXIycm1hZF9aQ3VJ",
        authDomain: "bW92ZXJvbi1zaXQuZmlyZWJhc2VhcHAuY29t",
        projectId: "bW92ZXJvbi1zaXQ=",
        storageBucket: "bW92ZXJvbi1zaXQuZmlyZWJhc2VzdG9yYWdlLmFwcA==",
        messagingSenderId: "MTM4NDk4MjgwMDcy",
        appId: "MToxMzg0OTgyODAwNzI6d2ViOjc1NTQ3N2Y1ZDUzODMxZjQyZjJkM2Q="
    }
};

/**
 * Base64 디코딩 함수
 * @param {string} encoded - Base64로 인코딩된 문자열
 * @returns {string} - 디코딩된 문자열
 */
function decodeConfig(encoded) {
    try {
        return atob(encoded);
    } catch (error) {
        console.error('설정 디코딩 실패:', error);
        return '';
    }
}

/**
 * 환경 감지 함수
 * @returns {string} - 'production' 또는 'development'
 */
function getEnvironment() {
    const hostname = window.location.hostname;
    
    // 프로덕션 도메인 체크
    if (hostname === 'www.moveron.co.kr' || hostname === 'moveron.co.kr') {
        return 'production';
    }
    
    // 로컬 개발 환경
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'development';
    }
    
    // GitHub Pages
    if (hostname.includes('github.io')) {
        return 'production';
    }
    
    return 'development';
}

/**
 * Firebase 설정 가져오기
 * @returns {object} - Firebase 설정 객체
 */
export function getFirebaseConfig() {
    const env = getEnvironment();
    const encodedConfig = ENCODED_CONFIG[env];
    
    // 환경 변수가 있으면 우선 사용 (서버 사이드 렌더링 시)
    if (typeof process !== 'undefined' && process.env) {
        return {
            apiKey: process.env.FIREBASE_API_KEY || decodeConfig(encodedConfig.apiKey),
            authDomain: process.env.FIREBASE_AUTH_DOMAIN || decodeConfig(encodedConfig.authDomain),
            projectId: process.env.FIREBASE_PROJECT_ID || decodeConfig(encodedConfig.projectId),
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET || decodeConfig(encodedConfig.storageBucket),
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || decodeConfig(encodedConfig.messagingSenderId),
            appId: process.env.FIREBASE_APP_ID || decodeConfig(encodedConfig.appId)
        };
    }
    
    // 클라이언트 사이드에서는 디코딩된 설정 사용
    return {
        apiKey: decodeConfig(encodedConfig.apiKey),
        authDomain: decodeConfig(encodedConfig.authDomain),
        projectId: decodeConfig(encodedConfig.projectId),
        storageBucket: decodeConfig(encodedConfig.storageBucket),
        messagingSenderId: decodeConfig(encodedConfig.messagingSenderId),
        appId: decodeConfig(encodedConfig.appId)
    };
}

/**
 * 현재 환경 정보 가져오기
 * @returns {object} - 환경 정보
 */
export function getEnvironmentInfo() {
    return {
        environment: getEnvironment(),
        hostname: window.location.hostname,
        protocol: window.location.protocol
    };
}

/**
 * 설정 유효성 검사
 * @param {object} config - Firebase 설정 객체
 * @returns {boolean} - 유효성 여부
 */
export function validateConfig(config) {
    const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
    
    for (const field of requiredFields) {
        if (!config[field] || config[field].trim() === '') {
            console.error(`Firebase 설정 오류: ${field}가 누락되었습니다.`);
            return false;
        }
    }
    
    return true;
}

// 개발 모드에서 환경 정보 출력
if (getEnvironment() === 'development') {
    console.log('🔧 Firebase 환경:', getEnvironmentInfo());
}

