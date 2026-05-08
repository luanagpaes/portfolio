/* ═══════════════════════════════════════════════════════
   LUANA PAES PORTFOLIO — SCRIPT
═══════════════════════════════════════════════════════ */

// ── i18n Translations ──────────────────────────────────
const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.stacks": "Stacks",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.cv": "Currículo",
    "hero.eyebrow": "Frontend Developer · Designer",
    "hero.desc": "Criando experiências digitais <em>acessíveis</em>, <em>inclusivas</em> e visualmente marcantes — onde código encontra design com propósito.",
    "hero.cta1": "Ver Projetos",
    "hero.cta2": "Fale comigo",
    "hero.scroll": "scroll",
    "about.label": "// Sobre mim",
    "about.title1": "Design com",
    "about.title2": "propósito.",
    "about.p1": "Olá! Sou a Luana — desenvolvedora frontend e apaixonada pela interseção entre código e design. Acredito que a tecnologia deve ser para <strong>todos</strong>, e isso guia cada projeto que toco.",
    "about.p2": "Me dedico a estudar <strong>acessibilidade digital e design inclusivo</strong>, garantindo que sistemas sejam utilizáveis por pessoas com diferentes necessidades e realidades. A <strong>colorimetria</strong> também é uma das minhas paixões — entender como as cores comunicam emoções e constroem identidades visuais.",
    "about.p3": "Cada detalhe importa — tipografia, espaçamento, contraste, hierarquia visual.",
    "tag.access": "Acessibilidade",
    "tag.color": "Colorimetria",
    "tag.inclusive": "Design Inclusivo",
    "stat.tools": "Ferramentas",
    "stat.curiosity": "Curiosidade",
    "stat.dedication": "Dedicação",
    "stacks.label": "// Stacks & Ferramentas",
    "stacks.title": "Meu Arsenal",
    "stacks.frontend": "Frontend",
    "stacks.database": "Banco de Dados",
    "stacks.design": "Design",
    "projects.label": "// Projetos",
    "projects.title": "Em Breve",
    "projects.comingTitle": "Projetos chegando em breve",
    "projects.comingDesc": "Estou construindo e refinando meus projetos com muito cuidado. Em breve você poderá ver casos reais de design acessível, interfaces bonitas e código limpo.",
    "contact.label": "// Contato",
    "contact.title": "Vamos conversar?",
    "contact.whatsapp": "WhatsApp",
    "contact.qrHint": "Escaneie para conversar no WhatsApp",
    "form.name": "Nome",
    "form.namePH": "Seu nome completo",
    "form.emailPH": "seu@email.com",
    "form.message": "Mensagem",
    "form.messagePH": "Olá, Luana! Gostaria de...",
    "form.send": "Enviar mensagem",
    "form.success": "Mensagem enviada! Em breve estarei em contato.",
    "form.errorName": "Por favor, insira seu nome.",
    "form.errorEmail": "Por favor, insira um email válido.",
    "form.errorMessage": "Por favor, escreva uma mensagem.",
    "footer.made": "Feito com muito café",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    "nav.about": "About",
    "nav.stacks": "Stacks",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Resume",
    "hero.eyebrow": "Frontend Developer · Designer",
    "hero.desc": "Creating <em>accessible</em>, <em>inclusive</em> and visually striking digital experiences — where code meets design with purpose.",
    "hero.cta1": "See Projects",
    "hero.cta2": "Get in touch",
    "hero.scroll": "scroll",
    "about.label": "// About me",
    "about.title1": "Design with",
    "about.title2": "purpose.",
    "about.p1": "Hi! I'm Luana — a frontend developer passionate about the intersection of code and design. I believe technology should be for <strong>everyone</strong>, and that guides every project I touch.",
    "about.p2": "I'm dedicated to studying <strong>digital accessibility and inclusive design</strong>, ensuring systems are usable by people with different needs and realities. <strong>Color theory</strong> is also one of my passions — understanding how colors communicate emotions and build visual identities.",
    "about.p3": "Every detail matters — typography, spacing, contrast, visual hierarchy.",
    "tag.access": "Accessibility",
    "tag.color": "Color Theory",
    "tag.inclusive": "Inclusive Design",
    "stat.tools": "Tools",
    "stat.curiosity": "Curiosity",
    "stat.dedication": "Dedication",
    "stacks.label": "// Stacks & Tools",
    "stacks.title": "My Arsenal",
    "stacks.frontend": "Frontend",
    "stacks.database": "Database",
    "stacks.design": "Design",
    "projects.label": "// Projects",
    "projects.title": "Coming Soon",
    "projects.comingTitle": "Projects coming soon",
    "projects.comingDesc": "I'm carefully building and refining my projects. Soon you'll be able to see real cases of accessible design, beautiful interfaces and clean code.",
    "contact.label": "// Contact",
    "contact.title": "Let's talk?",
    "contact.whatsapp": "WhatsApp",
    "contact.qrHint": "Scan to chat on WhatsApp",
    "form.name": "Name",
    "form.namePH": "Your full name",
    "form.emailPH": "your@email.com",
    "form.message": "Message",
    "form.messagePH": "Hi Luana! I'd like to...",
    "form.send": "Send message",
    "form.success": "Message sent! I'll be in touch soon.",
    "form.errorName": "Please enter your name.",
    "form.errorEmail": "Please enter a valid email.",
    "form.errorMessage": "Please write a message.",
    "footer.made": "Made with lots of coffee",
    "footer.rights": "All rights reserved.",
  }
};

let currentLang = localStorage.getItem('lp-lang') || 'pt';
let currentTheme = localStorage.getItem('lp-theme') || 'dark';

// ── Apply Theme ──────────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  localStorage.setItem('lp-theme', theme);
  currentTheme = theme;
}

// ── Apply Language ──────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lp-lang', lang);
  const t = translations[lang];

  // Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update lang label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // Update html lang
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// ── QR Code ─────────────────────────────────────────────
function generateQR() {
  const canvas = document.getElementById('qrCanvas');
  if (!canvas) return;

  const whatsappUrl = 'https://wa.me/5512992388684';
  const size = 140;
  const ctx = canvas.getContext('2d');

  // Generate QR manually using a simple approach
  // We'll use a data URL approach via a temporary div
  const tempDiv = document.createElement('div');
  tempDiv.style.display = 'none';
  document.body.appendChild(tempDiv);

  try {
    const qr = new QRCode(tempDiv, {
      text: whatsappUrl,
      width: size,
      height: size,
      colorDark: '#1a0a08',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      const qrImg = tempDiv.querySelector('img') || tempDiv.querySelector('canvas');
      if (qrImg) {
        if (qrImg.tagName === 'CANVAS') {
          ctx.drawImage(qrImg, 0, 0, size, size);
        } else {
          const img = new Image();
          img.onload = () => ctx.drawImage(img, 0, 0, size, size);
          img.src = qrImg.src;
        }
      }
      document.body.removeChild(tempDiv);
    }, 100);
  } catch (e) {
    // Fallback: draw placeholder
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#d4907f';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('QR WhatsApp', size/2, size/2 - 6);
    ctx.fillStyle = '#333';
    ctx.font = '9px sans-serif';
    ctx.fillText('+55 12 99238 8684', size/2, size/2 + 10);
    document.body.removeChild(tempDiv);
  }
}

// ── Scroll Reveal ───────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.08}s`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Mobile menu ─────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ── Navbar scroll effect ────────────────────────────────
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.borderBottomColor = 'var(--border)';
    } else {
      navbar.style.borderBottomColor = 'transparent';
    }
  }, { passive: true });
}

// ── Form validation ─────────────────────────────────────
function initForm() {
  const form = document.getElementById('contactForm');
  const successEl = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const t = translations[currentLang];

    // Name
    const nome = form.querySelector('#nome');
    const nomeErr = nome.nextElementSibling;
    if (!nome.value.trim()) {
      nome.classList.add('error');
      nomeErr.textContent = t['form.errorName'];
      valid = false;
    } else {
      nome.classList.remove('error');
      nomeErr.textContent = '';
    }

    // Email
    const email = form.querySelector('#email');
    const emailErr = email.nextElementSibling;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.value.trim())) {
      email.classList.add('error');
      emailErr.textContent = t['form.errorEmail'];
      valid = false;
    } else {
      email.classList.remove('error');
      emailErr.textContent = '';
    }

    // Message
    const msg = form.querySelector('#mensagem');
    const msgErr = msg.nextElementSibling;
    if (!msg.value.trim() || msg.value.trim().length < 5) {
      msg.classList.add('error');
      msgErr.textContent = t['form.errorMessage'];
      valid = false;
    } else {
      msg.classList.remove('error');
      msgErr.textContent = '';
    }

    if (valid && successEl) {
      const btn = form.querySelector('.form-submit');
      btn.disabled = true;
      btn.style.opacity = '0.7';

      setTimeout(() => {
        form.reset();
        successEl.removeAttribute('hidden');
        btn.disabled = false;
        btn.style.opacity = '1';
        setTimeout(() => successEl.setAttribute('hidden', ''), 5000);
      }, 600);
    }
  });

  // Live validation clear
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const err = field.nextElementSibling;
      if (err && err.classList.contains('field-error')) err.textContent = '';
    });
  });
}

// ── Active nav link on scroll ────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = '';
            link.style.background = '';
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.style.color = 'var(--accent)';
              link.style.background = 'var(--accent-glow)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
}

// ── Init ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  applyTheme(currentTheme);
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Language
  applyLang(currentLang);
  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'pt' ? 'en' : 'pt');
  });

  // Modules
  initReveal();
  initMobileMenu();
  initNavScroll();
  initForm();
  initActiveNav();

  // QR Code
  if (typeof QRCode !== 'undefined') {
    generateQR();
  } else {
    window.addEventListener('load', generateQR);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});