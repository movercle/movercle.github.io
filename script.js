/**
 * MoverOn - Time-based Mode Switching with i18n Support
 * Automatically switches between ON and OFF modes based on current time
 * Supports Korean (default) and English languages
 */

// Configuration
const CONFIG = {
    ON_START_HOUR: 8,    // 8 AM
    ON_END_HOUR: 20,     // 8 PM
    CHECK_INTERVAL: 60000, // Check every 60 seconds (1 minute)
    DEFAULT_LANG: 'ko'   // Default language: Korean
};

// Translation data
const TRANSLATIONS = {
    ko: {
        hero: {
            title: {
                on: "학습과 기술의 미래를 움직입니다",
                off: "재충전할 시간"
            },
            subtitle: {
                on: "지능형 솔루션과 혁신적인 플랫폼으로 비즈니스를 변화시킵니다",
                off: "우리 팀은 지금 휴식 중입니다. 오전 8시에 다시 돌아와 새롭게 시작하겠습니다."
            },
            cta: {
                on: "솔루션 살펴보기",
                off: "메시지 남기기"
            }
        },
        services: {
            title: "우리가 만드는 것",
            intro: "MoverOn은 실질적인 비즈니스 성과를 창출하는 강력한 디지털 솔루션을 전문으로 합니다. 우리의 전문성은 학습 플랫폼, 기업 통합, 최첨단 AI 기술에 걸쳐 있습니다.",
            lms: {
                title: "학습 관리 시스템",
                description: "조직과 함께 성장하는 맞춤형 LMS 플랫폼. 고급 분석, 모바일 지원 및 원활한 콘텐츠 전달을 통해 모든 규모의 팀을 위한 매력적이고 직관적인 학습 경험을 만듭니다."
            },
            si: {
                title: "시스템 통합",
                description: "기존 시스템을 통합 생태계로 연결합니다. 우리의 SI 솔루션은 레거시 인프라를 현대화하고, 플랫폼 간 데이터 일관성을 보장하며, 운영 효율성을 높이는 원활한 워크플로우를 만듭니다."
            },
            ai: {
                title: "AI 기반 솔루션",
                description: "인공지능의 힘을 활용하여 프로세스를 자동화하고, 통찰력을 얻으며, 개인화된 경험을 제공합니다. 지능형 챗봇부터 예측 분석까지, 실질적인 비즈니스 과제를 해결하는 AI를 구축합니다."
            },
            cta: {
                title: "함께 전진할 준비가 되셨나요?",
                subtitle: "귀사의 비즈니스를 어떻게 변화시킬 수 있을지 함께 논의해보세요",
                button: "문의하기"
            }
        },
        wellness: {
            title: "재충전할 시간",
            intro: "MoverOn에서는 최고의 일이 충분히 휴식한 마음에서 나온다고 믿습니다. 우리 팀은 지금 오프라인 상태이며, 내일의 도전을 위해 재충전하고 있습니다.",
            rest: {
                title: "휴식과 회복",
                description: "양질의 휴식은 사치가 아니라 창의성과 혁신을 위한 필수 요소입니다. 우리는 팀원들이 연결을 끊고, 잘 자고, 상쾌하게 돌아올 수 있도록 권장합니다."
            },
            exercise: {
                title: "운동과 활동",
                description: "신체 활동은 정신적 명료함을 촉진합니다. 달리기든, 요가든, 산책이든, 우리는 운동을 문화의 일부로 우선시합니다."
            },
            balance: {
                title: "일과 삶의 균형",
                description: "균형은 찾는 것이 아니라 만드는 것입니다. 우리는 사람들이 전문적으로나 개인적으로 모두 번영할 수 있는 문화를 구축하는 데 전념하고 있습니다."
            },
            quote: "\"휴식과 운동, 둘 다 지나치거나 부족하면 해롭다.\"",
            "quote.author": "— 벤자민 프랭클린",
            contact: {
                message: "ON 시간(오전 8시 - 오후 8시) 동안 메시지에 응답해드리겠습니다.",
                button: "메시지 남기기"
            }
        },
        footer: {
            tagline: "목적을 가지고 나아가고, 의도를 가지고 휴식합니다.",
            contact: {
                title: "연락처",
                email: "이메일",
                phone: "전화",
                location: "서울, 대한민국"
            },
            hours: {
                title: "운영 시간",
                on: "ON: 오전 8:00 - 오후 8:00",
                off: "OFF: 오후 8:00 - 오전 8:00"
            },
            copyright: "All rights reserved."
        },
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
        hero: {
            title: {
                on: "Move the Future of Learning & Technology",
                off: "Time to Recharge"
            },
            subtitle: {
                on: "Transforming businesses through intelligent solutions and innovative platforms",
                off: "Our team is resting now. We'll be back at 8 AM, refreshed and ready to move forward."
            },
            cta: {
                on: "Explore Our Solutions",
                off: "Leave a Message"
            }
        },
        services: {
            title: "What We Build",
            intro: "MoverOn specializes in creating powerful digital solutions that drive real business results. Our expertise spans learning platforms, enterprise integration, and cutting-edge AI technology.",
            lms: {
                title: "Learning Management Systems",
                description: "Custom-built LMS platforms that scale with your organization. We create engaging, intuitive learning experiences with advanced analytics, mobile support, and seamless content delivery for teams of any size."
            },
            si: {
                title: "System Integration",
                description: "Connect your existing systems into a unified ecosystem. Our SI solutions modernize legacy infrastructure, ensure data consistency across platforms, and create seamless workflows that boost operational efficiency."
            },
            ai: {
                title: "AI-Powered Solutions",
                description: "Harness the power of artificial intelligence to automate processes, gain insights, and deliver personalized experiences. From intelligent chatbots to predictive analytics, we build AI that solves real business challenges."
            },
            cta: {
                title: "Ready to move forward?",
                subtitle: "Let's discuss how we can help transform your business",
                button: "Contact Us"
            }
        },
        wellness: {
            title: "Time to Recharge",
            intro: "At MoverOn, we believe that the best work comes from well-rested minds. Our team is currently offline, recharging for tomorrow's challenges.",
            rest: {
                title: "Rest & Recovery",
                description: "Quality rest is not a luxury—it's essential for creativity and innovation. We encourage our team to disconnect, sleep well, and return refreshed."
            },
            exercise: {
                title: "Movement & Exercise",
                description: "Physical activity fuels mental clarity. Whether it's a run, yoga, or a walk, we prioritize movement as part of our culture."
            },
            balance: {
                title: "Work-Life Balance",
                description: "Balance isn't something you find—it's something you create. We're committed to building a culture where people thrive both professionally and personally."
            },
            quote: "\"Rest and motion, unrelieved and unchecked, are equally destructive.\"",
            "quote.author": "— Benjamin Franklin",
            contact: {
                message: "We'll respond to your message during our ON hours (8 AM - 8 PM).",
                button: "Leave a Message"
            }
        },
        footer: {
            tagline: "Moving forward with purpose. Resting with intention.",
            contact: {
                title: "Get in Touch",
                email: "Email",
                phone: "Phone",
                location: "Seoul, South Korea"
            },
            hours: {
                title: "Hours",
                on: "ON: 8:00 AM - 8:00 PM",
                off: "OFF: 8:00 PM - 8:00 AM"
            },
            copyright: "All rights reserved."
        },
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

// Add placeholder translations for contact form
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
 * @param {string} path - Dot notation path (e.g., 'hero.title.on')
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
    return localStorage.getItem('language') || CONFIG.DEFAULT_LANG;
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
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(translations, key);

        if (translation) {
            element.textContent = translation;
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
        ko: 'MoverOn - 혁신을 통한 균형',
        en: 'MoverOn - Balance Through Innovation'
    };

    const metaDescriptions = {
        ko: 'MoverOn - 혁신으로 나아가고, 의도적으로 휴식합니다. LMS, SI, AI 솔루션.',
        en: 'MoverOn - Moving forward with innovation, resting with intention. LMS, SI, and AI solutions.'
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
 * Gets the current mode based on the time of day
 * @returns {string} 'on' or 'off'
 */
function getCurrentMode() {
    const now = new Date();
    const currentHour = now.getHours();

    // Check if current time is within ON hours (8 AM to 8 PM)
    if (currentHour >= CONFIG.ON_START_HOUR && currentHour < CONFIG.ON_END_HOUR) {
        return 'on';
    } else {
        return 'off';
    }
}

/**
 * Updates the visual mode of the website
 * @param {string} mode - 'on' or 'off'
 */
function updateMode(mode) {
    const body = document.body;
    const modeIndicator = document.getElementById('modeIndicator');

    // Remove existing mode classes
    body.classList.remove('mode-on', 'mode-off');

    // Add new mode class
    body.classList.add(`mode-${mode}`);

    // Update mode indicator text
    if (modeIndicator) {
        modeIndicator.textContent = mode.toUpperCase();
    }

    // Update hero content based on mode and current language
    updateHeroContent(mode);

    // Log mode change for debugging
    console.log(`Mode switched to: ${mode.toUpperCase()}`);
}

/**
 * Updates hero content based on mode and language
 * @param {string} mode - 'on' or 'off'
 */
function updateHeroContent(mode) {
    const lang = getCurrentLanguage();
    const translations = TRANSLATIONS[lang];

    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const ctaButton = document.getElementById('ctaButton');

    if (heroTitle && heroSubtitle && ctaButton) {
        // Update data-i18n attributes to reflect current mode
        heroTitle.setAttribute('data-i18n', `hero.title.${mode}`);
        heroSubtitle.setAttribute('data-i18n', `hero.subtitle.${mode}`);
        ctaButton.setAttribute('data-i18n', `hero.cta.${mode}`);

        // Fade out, change content, fade in
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        ctaButton.style.opacity = '0';

        setTimeout(() => {
            heroTitle.textContent = translations.hero.title[mode];
            heroSubtitle.textContent = translations.hero.subtitle[mode];
            ctaButton.textContent = translations.hero.cta[mode];

            heroTitle.style.opacity = '1';
            heroSubtitle.style.opacity = '1';
            ctaButton.style.opacity = '1';
        }, 300);
    }
}

/**
 * Updates the current time display
 */
function updateTimeDisplay() {
    const currentTimeElement = document.getElementById('currentTime');

    if (currentTimeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

/**
 * Main function to check and apply the appropriate mode
 */
function checkAndApplyMode() {
    const currentMode = getCurrentMode();
    updateMode(currentMode);
    updateTimeDisplay();
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

            // Re-apply current mode with new language
            const currentMode = getCurrentMode();
            updateHeroContent(currentMode);
        });
    });
}

/**
 * Initializes the mode switching functionality
 */
function init() {
    // Set initial language
    const initialLang = getCurrentLanguage();
    setCurrentLanguage(initialLang);

    // Translate page with initial language
    translatePage();

    // Apply initial mode immediately
    checkAndApplyMode();

    // Initialize language switcher
    initLanguageSwitcher();

    // Update time display every second
    setInterval(updateTimeDisplay, 1000);

    // Check for mode changes every minute
    setInterval(checkAndApplyMode, CONFIG.CHECK_INTERVAL);

    // Add smooth transitions to hero content
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const ctaButton = document.getElementById('ctaButton');

    if (heroTitle) heroTitle.style.transition = 'opacity 0.3s ease';
    if (heroSubtitle) heroSubtitle.style.transition = 'opacity 0.3s ease';
    if (ctaButton) ctaButton.style.transition = 'opacity 0.3s ease';

    console.log('MoverOn mode switching initialized');
    console.log(`ON hours: ${CONFIG.ON_START_HOUR}:00 - ${CONFIG.ON_END_HOUR}:00`);
    console.log(`Default language: ${CONFIG.DEFAULT_LANG}`);
}

/**
 * Add click handlers for buttons
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    init();

    // Get all buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent;
            const lang = getCurrentLanguage();

            // Simulate different actions based on button text
            const contactKeywords = lang === 'ko' ? ['문의', '메시지'] : ['Contact', 'Message'];
            const exploreKeywords = lang === 'ko' ? ['살펴보기', '솔루션'] : ['Explore', 'Solutions'];

            const isContact = contactKeywords.some(keyword => buttonText.includes(keyword));
            const isExplore = exploreKeywords.some(keyword => buttonText.includes(keyword));

            if (isContact) {
                // In a real site, this would open a contact form
                const message = lang === 'ko'
                    ? '관심 가져주셔서 감사합니다! \n이 페이지 준비 중입니다.\n조만간 문의 양식을 통해 편리하게 연락하실 수 있도록 하겠습니다.'
                    : 'Thank you for your interest! \nThis page is currently under preparation.\nWe will soon provide a contact form for your convenience.';
             //   alert(message);
             window.location.href = 'contact.html';
            } else if (isExplore) {
                // Scroll to services section
                const servicesSection = document.getElementById('servicesSection');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

/**
 * Add scroll reveal animations
 */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and wellness cards
    const cards = document.querySelectorAll('.service-card, .wellness-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

/**
 * Particle animation enhancement
 */
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelectorAll('.particle');

    particles.forEach((particle, index) => {
        // Randomize particle sizes slightly
        const size = 6 + Math.random() * 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Add random animation duration
        const duration = 6 + Math.random() * 6;
        particle.style.animationDuration = `${duration}s`;
    });
});

/**
 * Smooth page load animation
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

/**
 * Debug information (console)
 */
console.log(`
╔════════════════════════════════════════╗
║         MoverOn Website v2.0           ║
║        (with i18n support)             ║
╠════════════════════════════════════════╣
║  ON Mode:  08:00 - 20:00 (8 AM - 8 PM) ║
║  OFF Mode: 20:00 - 08:00 (8 PM - 8 AM) ║
║  Languages: 한국어 (KO) / English (EN) ║
║  Default: 한국어 (Korean)               ║
╠════════════════════════════════════════╣
║  Current time: ${new Date().toLocaleTimeString()}        ║
║  Current mode: ${getCurrentMode().toUpperCase()}                  ║
║  Current lang: ${getCurrentLanguage().toUpperCase()}                  ║
╚════════════════════════════════════════╝
`);
