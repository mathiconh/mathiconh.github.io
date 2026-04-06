/* ==========================================
   TRANSLATIONS
   ========================================== */
const i18n = {
  es: {
    "nav.skills":       "Habilidades",
    "nav.experience":   "Experiencia",
    "nav.projects":     "Proyectos",
    "nav.contact":      "Contacto",
    "hero.tag":         "Trabajando para Streambe",
    "hero.role_prefix": "Soy ",
    "hero.bio_lead":    "Transformo necesidades de negocio en soluciones digitales claras, ordenadas y enfocadas en resultados.",
    "hero.bio":         "Cuento con experiencia en proyectos de salud, banca y educación, participando en el análisis, definición y evolución de soluciones digitales. Me destaco por la responsabilidad, la capacidad de aprendizaje y el trabajo articulado entre negocio y tecnología.",
    "hero.cta_projects":"Ver proyectos",
    "hero.cta_contact": "Contactar",
    "hero.scroll":      "scroll",
    "skills.tag":       "Habilidades",
    "skills.title":     "Habilidades que generan valor en cada proyecto.",
    "skills.sub":       "Capacidades que integran análisis, gestión y colaboración para acompañar proyectos de forma clara, ordenada y efectiva.",
    "skills.a1.title":  "Análisis funcional",
    "skills.a1.desc":   "Relevamiento, pensamiento analítico, historias de usuario, testing funcional y documentación.",
    "skills.a2.title":  "Gestión de proyectos",
    "skills.a2.desc":   "Planificación, seguimiento, priorización, riesgos y coordinación de equipos.",
    "skills.a3.title":  "Trabajo con stakeholders",
    "skills.a3.desc":   "Comunicación, negociación, alineación de expectativas y facilitación.",
    "skills.a4.title":  "Ejecución y mejora continua",
    "skills.a4.desc":   "Resolución de problemas, adaptabilidad, organización y foco en resultados.",
    "exp.tag":          "Experiencia",
    "exp.title":        "Mi recorrido profesional",
    "exp.sub":          "Un camino que combina atención al cliente, gestión tecnológica y análisis funcional en proyectos de impacto real.",
    "exp.current":      "Actual",
    "exp.job4.date":    "Nov. 2023 – actualidad",
    "exp.job4.role":    "Analista Funcional | Project Manager",
    "exp.job4.company": "Streambe",
    "exp.job4.desc":    "Análisis en proyectos de gran tamaño para distintos rubros, junto al equipo de desarrollo: relevo, tomo requerimientos, los analizo y bajo a historias de usuario, mejoras y tareas para crear nuevas funcionalidades.",
    "exp.job4.note1":   "Experto en Project Management — Universidad Tecnológica Nacional, 2025",
    "exp.job4.note2":   "Herramientas de Gestión desde la agilidad — Instituto Tecnológico de Buenos Aires, 2026",
    "exp.job3.date":    "Feb. 2022 – Oct. 2023",
    "exp.job3.duration":"1 año 8 meses",
    "exp.job3.role":    "Analista Funcional",
    "exp.job3.company": "Sofre Digital SA",
    "exp.job3.desc":    "Sistema de gestión hospitalaria end-to-end. Equipo interdisciplinario de +35 personas como referente funcional de células: Admisión, Historia clínica, Enfermería, Farmacia y Cirugía. Discovery, desarrollo, implementación, soporte y demos a mesa directiva.",
    "exp.job3.note1":   "SFPC — Scrum Foundation, 2022",
    "exp.job3.note2":   "Líderes comunicativos para equipos estratégicos — Ministerio de Educación, 2023",
    "exp.job2.date":    "Nov. 2018 – Feb. 2022",
    "exp.job2.duration":"3 años 3 meses",
    "exp.job2.role":    "Analista Técnico Funcional",
    "exp.job2.company": "Hospital Italiano de Buenos Aires",
    "exp.job2.desc":    "Asesoramiento en nuevas tecnologías educativas. Administré y gestioné proyectos de formación, capacité sobre Moodle a docentes y personal administrativo, y lideré procesos tecnológicos del área.",
    "exp.job2.note1":   "Analista de Sistemas — Escuela de arte multimedia Da Vinci, 2018–2021",
    "exp.job2.note2":   "Congreso CAEM 2019: \"Cómo aplicar las herramientas de Google a una propuesta educativa\"",
    "exp.job1.date":    "Mar. 2017 – Nov. 2018",
    "exp.job1.duration":"1 año 8 meses",
    "exp.job1.role":    "Entrenador",
    "exp.job1.company": "Rona McDonald's, AtisReal",
    "exp.job1.desc":    "Manejo de caja, atención al cliente, carga y descarga de mercadería, entrenamiento a empleados nuevos. Sucursal Corrientes 980, Obelisco.",
    "nav.education":    "Educación",
    "edu.tag":          "Educación",
    "edu.title":        "Formación académica y continua",
    "edu.sub":          "Títulos y cursos que sostienen mi práctica profesional.",
    "edu.degrees_title":"Títulos",
    "edu.courses_title":"Cursos",
    "edu.status.done":  "Finalizado",
    "edu.status.dropped":"Abandonado",
    "edu.deg1.date":    "2018 – 2021",
    "edu.deg1.title":   "Analista de sistemas",
    "edu.deg1.school":  "Escuela de arte multimedia Da Vinci",
    "edu.deg2.date":    "2015 – 2017",
    "edu.deg2.title":   "Ingeniería en informática",
    "edu.deg2.school":  "Universidad de Buenos Aires",
    "edu.deg3.date":    "2015",
    "edu.deg3.title":   "Bachiller en Economía y Administración",
    "edu.deg3.school":  "Instituto Sagrado Corazón",
    "edu.c1.date":      "2026",
    "edu.c1.title":     "Herramientas de Gestión desde la agilidad",
    "edu.c1.school":    "Instituto Tecnológico de Buenos Aires",
    "edu.c2.date":      "2025",
    "edu.c2.title":     "Experto en Project Management",
    "edu.c2.school":    "Universidad Tecnológica Nacional",
    "edu.c3.date":      "2023",
    "edu.c3.title":     "Líderes comunicativos para equipos estratégicos",
    "edu.c3.school":    "Ministerio de Educación",
    "edu.c4.date":      "2022",
    "edu.c4.title":     "SFPC",
    "edu.c4.school":    "Scrum Foundation",
    "contact.tag":             "Contacto",
    "contact.title":           "¿Hablamos?",
    "contact.sub":             "Completá el formulario y te respondo a la brevedad.",
    "contact.email_label":     "Email",
    "contact.location_label":  "Ubicación",
    "contact.location":        "Buenos Aires, Argentina",
    "contact.form.subject":    "Nuevo mensaje desde tu CV",
    "contact.form.name":       "Nombre",
    "contact.form.email":      "Email",
    "contact.form.message":    "Mensaje",
    "contact.form.name_error": "Ingresá tu nombre",
    "contact.form.email_error":"Ingresá un email válido",
    "contact.form.message_error":"Escribí tu mensaje",
    "contact.form.send":       "Enviar mensaje",
    "contact.form.success":    "Mensaje enviado. ¡Te respondo pronto!",
    "contact.form.error":      "Algo salió mal. Intentá de nuevo.",
  },
  en: {
    "nav.skills":       "Skills",
    "nav.experience":   "Experience",
    "nav.projects":     "Projects",
    "nav.contact":      "Contact",
    "hero.tag":         "Working at Streambe",
    "hero.role_prefix": "I'm a ",
    "hero.bio_lead":    "I turn business needs into clear, structured digital solutions focused on results.",
    "hero.bio":         "I have experience in healthcare, banking, and education projects, contributing to the analysis, definition, and evolution of digital solutions. I stand out for my accountability, continuous learning, and ability to bridge business and technology.",
    "hero.cta_projects":"View projects",
    "hero.cta_contact": "Get in touch",
    "hero.scroll":      "scroll",
    "skills.tag":       "Skills",
    "skills.title":     "Skills that generate value in every project.",
    "skills.sub":       "Capabilities that integrate analysis, management, and collaboration to support projects clearly, orderly, and effectively.",
    "skills.a1.title":  "Functional analysis",
    "skills.a1.desc":   "Requirements gathering, analytical thinking, user stories, functional testing and documentation.",
    "skills.a2.title":  "Project management",
    "skills.a2.desc":   "Planning, tracking, prioritisation, risk management and team coordination.",
    "skills.a3.title":  "Stakeholder management",
    "skills.a3.desc":   "Communication, negotiation, expectation alignment and facilitation.",
    "skills.a4.title":  "Execution & continuous improvement",
    "skills.a4.desc":   "Problem solving, adaptability, organisation and focus on results.",
    "exp.tag":          "Experience",
    "exp.title":        "My professional journey",
    "exp.sub":          "A path combining customer service, technology management, and functional analysis in real-impact projects.",
    "exp.current":      "Current",
    "exp.job4.date":    "Nov. 2023 – present",
    "exp.job4.role":    "Functional Analyst | Project Manager",
    "exp.job4.company": "Streambe",
    "exp.job4.desc":    "Analysis on large-scale projects across different industries, working alongside the development team: gathering, taking and analyzing requirements, then breaking them down into user stories, improvements, and tasks to build new features.",
    "exp.job4.note1":   "Project Management Expert — National Technological University, 2025",
    "exp.job4.note2":   "Agile Management Tools — Buenos Aires Institute of Technology, 2026",
    "exp.job3.date":    "Feb. 2022 – Oct. 2023",
    "exp.job3.duration":"1 year 8 months",
    "exp.job3.role":    "Functional Analyst",
    "exp.job3.company": "Sofre Digital SA",
    "exp.job3.desc":    "End-to-end hospital management system. Interdisciplinary team of 35+ people, acting as functional lead for cells: Admission, Medical Records, Nursing, Pharmacy, and Surgery. Discovery, development, implementation, support, and demos to board of directors.",
    "exp.job3.note1":   "SFPC — Scrum Foundation, 2022",
    "exp.job3.note2":   "Communicative Leaders for Strategic Teams — Ministry of Education, 2023",
    "exp.job2.date":    "Nov. 2018 – Feb. 2022",
    "exp.job2.duration":"3 years 3 months",
    "exp.job2.role":    "Technical Functional Analyst",
    "exp.job2.company": "Hospital Italiano de Buenos Aires",
    "exp.job2.desc":    "Advisory on new educational technologies. Managed training projects, trained teachers and administrative staff on Moodle, and led the area's technological processes.",
    "exp.job2.note1":   "Systems Analyst — Da Vinci School of Multimedia Arts, 2018–2021",
    "exp.job2.note2":   "CAEM 2019 Congress: \"How to apply Google tools to an educational proposal\"",
    "exp.job1.date":    "Mar. 2017 – Nov. 2018",
    "exp.job1.duration":"1 year 8 months",
    "exp.job1.role":    "Trainer",
    "exp.job1.company": "Rona McDonald's, AtisReal",
    "exp.job1.desc":    "Cash handling, customer service, stock loading and unloading, onboarding and training of new employees. Branch at Corrientes 980, Obelisco.",
    "nav.education":    "Education",
    "edu.tag":          "Education",
    "edu.title":        "Academic & ongoing training",
    "edu.sub":          "Degrees and courses that underpin my professional practice.",
    "edu.degrees_title":"Degrees",
    "edu.courses_title":"Courses",
    "edu.status.done":  "Completed",
    "edu.status.dropped":"Incomplete",
    "edu.deg1.date":    "2018 – 2021",
    "edu.deg1.title":   "Systems Analyst",
    "edu.deg1.school":  "Da Vinci School of Multimedia Arts",
    "edu.deg2.date":    "2015 – 2017",
    "edu.deg2.title":   "Computer Engineering",
    "edu.deg2.school":  "University of Buenos Aires",
    "edu.deg3.date":    "2015",
    "edu.deg3.title":   "High School Diploma — Economics & Administration",
    "edu.deg3.school":  "Instituto Sagrado Corazón",
    "edu.c1.date":      "2026",
    "edu.c1.title":     "Agile Management Tools",
    "edu.c1.school":    "Buenos Aires Institute of Technology",
    "edu.c2.date":      "2025",
    "edu.c2.title":     "Project Management Expert",
    "edu.c2.school":    "National Technological University",
    "edu.c3.date":      "2023",
    "edu.c3.title":     "Communicative Leaders for Strategic Teams",
    "edu.c3.school":    "Ministry of Education",
    "edu.c4.date":      "2022",
    "edu.c4.title":     "SFPC",
    "edu.c4.school":    "Scrum Foundation",
    "contact.tag":             "Contact",
    "contact.title":           "Let's talk?",
    "contact.sub":             "Fill out the form and I'll get back to you shortly.",
    "contact.email_label":     "Email",
    "contact.location_label":  "Location",
    "contact.location":        "Buenos Aires, Argentina",
    "contact.form.subject":    "New message from your CV",
    "contact.form.name":       "Name",
    "contact.form.email":      "Email",
    "contact.form.message":    "Message",
    "contact.form.name_error": "Please enter your name",
    "contact.form.email_error":"Please enter a valid email",
    "contact.form.message_error":"Please write your message",
    "contact.form.send":       "Send message",
    "contact.form.success":    "Message sent. I'll reply soon!",
    "contact.form.error":      "Something went wrong. Please try again.",
  },
};

const typewriterStrings = {
  es: ["Analista Funcional.", "Gerente de Proyectos.", "Analista de Negocios."],
  en: ["Functional Analyst.", "Project Manager.", "Business Analyst."],
};

let currentLang = "es";

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.documentElement.lang = lang;
}

function updateLangButton(lang) {
  const label = document.getElementById("langLabel");
  const toggle = document.getElementById("langToggle");
  // Show the ACTIVE lang highlighted; the inactive one is the other
  const [active, inactive] = lang === "es" ? ["ES", "EN"] : ["EN", "ES"];
  toggle.querySelector(".lang-active").textContent  = active;
  toggle.querySelector(".lang-inactive").textContent = inactive;
}


/* ==========================================
   TYPEWRITER
   ========================================== */
let twIndex = 0;
let twChar  = 0;
let twDeleting = false;
let twTimeout  = null;

function typewrite() {
  const strings = typewriterStrings[currentLang];
  const el = document.getElementById("typewriter");
  if (!el) return;

  const current = strings[twIndex];

  if (!twDeleting) {
    el.textContent = current.slice(0, ++twChar);
    if (twChar === current.length) {
      twDeleting = true;
      twTimeout = setTimeout(typewrite, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --twChar);
    if (twChar === 0) {
      twDeleting = false;
      twIndex = (twIndex + 1) % strings.length;
    }
  }

  twTimeout = setTimeout(typewrite, twDeleting ? 45 : 80);
}


/* ==========================================
   NAVBAR — scroll effect & active link
   ========================================== */
const navbar   = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  // Scrolled style
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  // Active section highlight
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === current);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });


/* ==========================================
   HAMBURGER MENU
   ========================================== */
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const open = hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});

// Close on link click
navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinksEl.classList.remove("open");
  });
});


/* ==========================================
   REVEAL ON SCROLL (Intersection Observer)
   ========================================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal-up").forEach((el) => revealObserver.observe(el));


/* ==========================================
   LANGUAGE TOGGLE
   ========================================== */
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  applyTranslations(currentLang);
  updateLangButton(currentLang);

  // Restart typewriter with new strings
  clearTimeout(twTimeout);
  twIndex = 0;
  twChar  = 0;
  twDeleting = false;
  typewrite();
});


/* ==========================================
   CONTACT FORM
   ========================================== */
const contactForm   = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const formSuccess   = document.getElementById("formSuccess");
const formError     = document.getElementById("formError");

function validateForm() {
  let valid = true;
  const fields = [
    { el: document.getElementById("contactName"),  check: (v) => v.trim().length > 0 },
    { el: document.getElementById("contactEmail"), check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { el: document.getElementById("contactMsg"),   check: (v) => v.trim().length > 0 },
  ];
  fields.forEach(({ el, check }) => {
    const group = el.closest(".form-group");
    if (!check(el.value)) {
      group.classList.add("show-error");
      valid = false;
    } else {
      group.classList.remove("show-error");
    }
  });
  return valid;
}

contactForm.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("input", () => {
    input.closest(".form-group").classList.remove("show-error");
  });
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const submitText    = contactSubmit.querySelector(".contact-submit-text");
  const submitIcon    = contactSubmit.querySelector(".contact-submit-icon");
  const submitSpinner = contactSubmit.querySelector(".contact-spinner");

  // Loading state
  contactSubmit.disabled = true;
  submitIcon.classList.add("hidden");
  submitSpinner.classList.remove("hidden");
  formSuccess.classList.add("hidden");
  formError.classList.add("hidden");

  try {
    const data = new FormData(contactForm);
    const res  = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    const json = await res.json();

    if (json.success) {
      formSuccess.classList.remove("hidden");
      contactForm.reset();
    } else {
      formError.classList.remove("hidden");
    }
  } catch {
    formError.classList.remove("hidden");
  } finally {
    contactSubmit.disabled = false;
    submitIcon.classList.remove("hidden");
    submitSpinner.classList.add("hidden");
  }
});


/* ==========================================
   CERTIFICATE LIGHTBOX
   ========================================== */
const lightbox      = document.getElementById("lightbox");
const lightboxImg   = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "Certificado";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".cert-thumb-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openLightbox(btn.dataset.cert, btn.querySelector("img").alt);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});


/* ==========================================
   INIT
   ========================================== */
applyTranslations(currentLang);
updateLangButton(currentLang);
typewrite();
onScroll();
