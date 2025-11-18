/**
 * Contact Form Handler with i18n Support
 * Handles form submission, validation, user feedback, and multilingual support
 */

// Translation data for contact page
const TRANSLATIONS = {
    ko: {
        contact: {
            title: "📧 문의하기",
            subtitle: "프로젝트 상담 및 문의사항을 남겨주세요.<br>빠른 시일 내에 답변드리겠습니다.",
            success: "✅ 문의가 성공적으로 접수되었습니다!<br>곧 연락드리겠습니다.",
            back: "← 홈으로 돌아가기",
            form: {
                company: "업체명",
                email: "이메일",
                phone: "연락처",
                message: "문의 내용",
                submit: "문의 보내기"
            },
            validation: {
                required: "모든 필수 항목을 입력해주세요.",
                email: "올바른 이메일 형식을 입력해주세요.",
                phone: "올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)",
                message: "문의 내용을 10자 이상 입력해주세요."
            },
            status: {
                sending: "전송 중...",
                error: "❌ 전송 중 오류가 발생했습니다.<br>잠시 후 다시 시도해주세요."
            }
        }
    },
    en: {
        contact: {
            title: "📧 Contact Us",
            subtitle: "Leave your project inquiries and questions.<br>We'll get back to you soon.",
            success: "✅ Your inquiry has been submitted successfully!<br>We'll contact you soon.",
            back: "← Back to Home",
            form: {
                company: "Company Name",
                email: "Email",
                phone: "Phone",
                message: "Message",
                submit: "Send Inquiry"
            },
            validation: {
                required: "Please fill in all required fields.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number. (e.g., 010-1234-5678)",
                message: "Please enter at least 10 characters for your message."
            },
            status: {
                sending: "Sending...",
                error: "❌ An error occurred while sending.<br>Please try again later."
            }
        }
    }
};

// Add placeholder translations separately for easier access
TRANSLATIONS.ko.contact.form.company.placeholder = "회사명 또는 단체명을 입력해주세요";
TRANSLATIONS.ko.contact.form.email.placeholder = "example@company.com";
TRANSLATIONS.ko.contact.form.phone.placeholder = "010-1234-5678";
TRANSLATIONS.ko.contact.form.message.placeholder = "문의하실 내용을 자세히 작성해주세요.\n\n예시:\n- 프로젝트 유형 (LMS, SI, AI 등)\n- 예상 일정\n- 예산 범위\n- 기타 요구사항";

TRANSLATIONS.en.contact.form.company.placeholder = "Enter your company or organization name";
TRANSLATIONS.en.contact.form.email.placeholder = "example@company.com";
TRANSLATIONS.en.contact.form.phone.placeholder = "010-1234-5678";
TRANSLATIONS.en.contact.form.message.placeholder = "Please describe your inquiry in detail.\n\nExample:\n- Project type (LMS, SI, AI, etc.)\n- Expected timeline\n- Budget range\n- Other requirements";

/**
 * Gets a nested translation value using dot notation
 * @param {object} obj - Translation object
 * @param {string} path - Dot notation path (e.g., 'contact.title')
 * @returns {string} - Translated text
 */
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Gets the current language from localStorage or default
 * @returns {string} - Language code ('ko' or 'en')
 */
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ko';
}

/**
 * Sets the current language in localStorage
 * @param {string} lang - Language code ('ko' or 'en')
 */
function setCurrentLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);
}

/**
 * Translates all elements with data-i18n attribute
 */
function translatePage() {
    const lang = getCurrentLanguage();
    const translations = TRANSLATIONS[lang];

    // Translate text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(translations, key);

        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedValue(translations, key);

        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });

    // Update page metadata
    updateMetadata(lang);

    // Update language button states
    updateLanguageButtons(lang);

    console.log(`Language switched to: ${lang}`);
}

/**
 * Updates page metadata (title, description) based on language
 * @param {string} lang - Language code
 */
function updateMetadata(lang) {
    const metaTitles = {
        ko: '문의하기 - MoverOn',
        en: 'Contact Us - MoverOn'
    };

    const metaDescriptions = {
        ko: 'MoverOn 문의하기 - 프로젝트 상담 및 문의사항을 남겨주세요.',
        en: 'Contact MoverOn - Leave your project inquiries and questions.'
    };

    document.title = metaTitles[lang];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', metaDescriptions[lang]);
    }
}

/**
 * Updates language button active states
 * @param {string} lang - Current language code
 */
function updateLanguageButtons(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Initializes language switcher event listeners
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setCurrentLanguage(lang);
            translatePage();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const initialLang = getCurrentLanguage();
    setCurrentLanguage(initialLang);
    translatePage();
    initLanguageSwitcher();
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            companyName: document.getElementById('companyName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validate form data
        if (!validateForm(formData)) {
            return;
        }

        // Submit form (현재는 콘솔에 출력, 실제로는 서버로 전송)
        submitForm(formData);
    });

    /**
     * Validate form data
     * @param {Object} data - Form data object
     * @returns {boolean} - Validation result
     */
    function validateForm(data) {
        const lang = getCurrentLanguage();
        const messages = TRANSLATIONS[lang].contact.validation;

        // Check if all required fields are filled
        if (!data.companyName || !data.email || !data.phone || !data.message) {
            alert(messages.required);
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert(messages.email);
            return false;
        }

        // Validate phone format
        const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
        if (!phoneRegex.test(data.phone)) {
            alert(messages.phone);
            return false;
        }

        // Check message length
        if (data.message.length < 10) {
            alert(messages.message);
            return false;
        }

        return true;
    }

    /**
     * Submit form data
     * @param {Object} data - Form data object
     */
    async function submitForm(data) {
        const lang = getCurrentLanguage();
        const messages = TRANSLATIONS[lang].contact;

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = messages.status.sending;
        submitBtn.disabled = true;

        console.log('=== 문의 접수 시작 ===');
        console.log('업체명:', data.companyName);
        console.log('이메일:', data.email);
        console.log('연락처:', data.phone);
        console.log('문의 내용:', data.message);
        console.log('접수 시간:', new Date().toLocaleString('ko-KR'));

        try {
            // Firebase에 저장
            if (typeof window.saveContactToFirestore === 'function') {
                const result = await window.saveContactToFirestore(data);

                if (result.success) {
                    console.log('✅ 저장 성공! 문서 ID:', result.id);

                    // Show success message
                    successMessage.classList.add('show');
                    successMessage.innerHTML = messages.success;

                    // Reset form
                    contactForm.reset();

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                } else {
                    throw new Error(result.error || '저장 실패');
                }
            } else {
                throw new Error('Firebase 함수를 찾을 수 없습니다.');
            }
        } catch (error) {
            console.error('❌ 전송 실패:', error);

            // Show error message
            successMessage.classList.add('show');
            successMessage.style.background = '#f44336';
            successMessage.innerHTML = messages.status.error + '<br><small>' + error.message + '</small>';

            // Hide error message after 7 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
                successMessage.style.background = '#4caf50';
            }, 7000);
        } finally {
            // Reset button
            const currentLang = getCurrentLanguage();
            const currentMessages = TRANSLATIONS[currentLang].contact;
            submitBtn.textContent = currentMessages.form.submit;
            submitBtn.disabled = false;
            console.log('==================');
        }
    }

    /**
     * Example: Send email notification (실제 구현 시 사용)
     * 백엔드 API 또는 이메일 서비스 (SendGrid, AWS SES 등) 필요
     */
    function sendEmailNotification(data) {
        // Example using fetch API
        /*
        fetch('https://your-api-endpoint.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'movercle@gmail.com',
                subject: `[MoverOn] 새로운 문의: ${data.companyName}`,
                html: `
                    <h2>새로운 문의가 접수되었습니다</h2>
                    <p><strong>업체명:</strong> ${data.companyName}</p>
                    <p><strong>이메일:</strong> ${data.email}</p>
                    <p><strong>연락처:</strong> ${data.phone}</p>
                    <p><strong>문의 내용:</strong></p>
                    <p>${data.message.replace(/\n/g, '<br>')}</p>
                `
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Email sent:', result);
        })
        .catch(error => {
            console.error('Email error:', error);
        });
        */
    }

    /**
     * Example: Save to database (실제 구현 시 사용)
     * 백엔드 API 필요 (Node.js, Python, PHP 등)
     */
    function saveToDatabase(data) {
        // Example using fetch API
        /*
        fetch('https://your-api-endpoint.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                status: 'pending'
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Saved to database:', result);
        })
        .catch(error => {
            console.error('Database error:', error);
        });
        */
    }

    // Auto-format phone number as user types
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        if (value.length <= 3) {
            e.target.value = value;
        } else if (value.length <= 7) {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length <= 11) {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
        } else {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
        }
    });
});

