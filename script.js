function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const translations = {
    en: {
        headerTitle: "Tensai Hiyaw Amlak",
        navAbout: "About",
        navServices: "Services",
        navWorship: "Worship",
        navContact: "Contact",
        aboutTitle: "About Us",
        aboutContent: "Tensai Hiyaw Amlak is a vibrant and welcoming Eritrean church community located in the heart of Zürich, Switzerland. Rooted in the Holy Trinity and with Jesus Christ as our Lord and Savior, we are dedicated to nurturing spiritual growth, fostering a sense of togetherness among our members, and guiding everyone to focus on Him.",
        servicesTitle: "Our Services",
        contactTitle: "Contact Us",
    },
    de: {
        headerTitle: "Tensai Hiyaw Amlak",
        navAbout: "Über uns",
        navServices: "Dienstleistungen",
        navWorship: "Anbetung",
        navContact: "Kontakt",
        aboutTitle: "Über uns",
        aboutContent: "Tensai Hiyaw Amlak ist eine lebendige und einladende eritreische Kirchengemeinschaft im Herzen von Zürich, Schweiz. Wir sind der spirituellen Entwicklung und der Förderung des Gemeinschaftsgefühls unter unseren Mitgliedern verpflichtet.",
        servicesTitle: "Unsere Dienstleistungen",
        contactTitle: "Kontaktieren Sie uns",
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const lang = translations[selectedLanguage];

    document.getElementById('header-title').textContent = lang.headerTitle;
    document.getElementById('nav-about').textContent = lang.navAbout;
    document.getElementById('nav-services').textContent = lang.navServices;
    document.getElementById('nav-worship').textContent = lang.navWorship;
    document.getElementById('nav-contact').textContent = lang.navContact;
    document.getElementById('about-title').textContent = lang.aboutTitle;
    document.getElementById('about-content').textContent = lang.aboutContent;
    document.getElementById('services-title').textContent = lang.servicesTitle;
    document.getElementById('contact-title').textContent = lang.contactTitle;
}