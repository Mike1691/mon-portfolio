/* ==========================================================================
   PORTFOLIO SCRIPT
   Ce fichier n'a normalement rien à modifier : le contenu des projets se
   trouve dans js/projects-data.js. Ici, uniquement du comportement.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initMobileNav();
  initScrollReveal();
  initSkillsTabs();
  renderProjects(PROJECTS);
  initProjectFilters();
  initLightbox();
  initContactForm();
});

/* -------------------------------------------------------------------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------- */
function initMobileNav() {
  const burger = document.getElementById("navBurger");
  const mobile = document.getElementById("navMobile");
  if (!burger || !mobile) return;

  burger.addEventListener("click", () => {
    const isOpen = mobile.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.classList.toggle("is-open", isOpen);
  });

  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
}

/* -------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

/* -------------------------------------------------------------------- */
function initSkillsTabs() {
  const tabs = document.querySelectorAll("[data-skill-cat]");
  const panels = document.querySelectorAll("[data-skill-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.skillCat;

      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.skillPanel === cat);
      });
    });
  });
}

/* -------------------------------------------------------------------- */
const CATEGORY_LABELS = {
  vision: "Vision 3D & Imagerie",
  signal: "Signal & Biomécanique",
  ml: "Deep Learning / IA",
  robotics: "Robotique",
};

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((p, index) => {
      const firstImg = p.images && p.images[0];
      return `
      <article class="project-card" data-category="${p.category}" data-index="${index}">
        <div class="project-card__thumb" data-open-lightbox="${index}">
          ${
            firstImg
              ? `<img src="${firstImg}" alt="${escapeHtml(p.title)}" loading="lazy"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                   onload="this.classList.add('is-loaded'); this.nextElementSibling.style.display='none';" />`
              : ""
          }
          <div class="project-card__placeholder" ${firstImg ? "" : "style=\"display:flex\""}>
            Visuel à venir<br />${escapeHtml(firstImg || "assets/img/projects/")}
          </div>
          <span class="project-card__zoom">⤢</span>
        </div>
        <div class="project-card__body">
          <span class="project-card__cat">${CATEGORY_LABELS[p.category] || p.category}</span>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__org">${escapeHtml(p.org)} — ${escapeHtml(p.period)}</p>
          <p class="project-card__excerpt">${escapeHtml(p.problem).slice(0, 128)}${
        p.problem.length > 128 ? "…" : ""
      }</p>
          <div class="project-card__tags">
            ${(p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>
      </article>`;
    })
    .join("");

  grid.querySelectorAll("[data-open-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = Number(el.dataset.openLightbox);
      openLightbox(idx);
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* -------------------------------------------------------------------- */
function initProjectFilters() {
  const chips = document.querySelectorAll("[data-filter]");
  const cards = () => document.querySelectorAll(".project-card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;

      chips.forEach((c) => c.classList.toggle("is-active", c === chip));

      cards().forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* -------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  document.querySelectorAll("[data-lightbox-close]").forEach((el) =>
    el.addEventListener("click", closeLightbox)
  );

  document.getElementById("lightboxPrev").addEventListener("click", () => {
    openLightbox((currentLightboxIndex - 1 + PROJECTS.length) % PROJECTS.length);
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    openLightbox((currentLightboxIndex + 1) % PROJECTS.length);
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
  });
}

function openLightbox(index) {
  const p = PROJECTS[index];
  if (!p) return;
  currentLightboxIndex = index;

  const media = document.getElementById("lightboxMedia");
  const firstImg = p.images && p.images[0];
  media.innerHTML = firstImg
    ? `<img src="${firstImg}" alt="${escapeHtml(p.title)}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'project-card__placeholder',textContent:'Visuel à ajouter : ${escapeHtml(
        firstImg
      )}'}))" />`
    : `<div class="project-card__placeholder">Ajoute une photo dans assets/img/projects/</div>`;

  document.getElementById("lightboxTitle").textContent = p.title;
  document.getElementById("lightboxMeta").textContent = `${p.org} — ${p.period}`;
  document.getElementById("lightboxProblem").textContent = p.problem;
  document.getElementById("lightboxSolution").textContent = p.solution;
  document.getElementById("lightboxResult").textContent = p.result;

  const linksEl = document.getElementById("lightboxLinks");
  const links = [];
  if (p.links && p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener">Code ↗</a>`);
  if (p.links && p.links.video) links.push(`<a href="${p.links.video}" target="_blank" rel="noopener">Vidéo ↗</a>`);
  linksEl.innerHTML = links.join("");

  document.getElementById("lightbox").classList.add("is-open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("is-open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* -------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "Contact via portfolio";
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Merci de compléter les champs obligatoires.";
      status.style.color = "var(--danger)";
      return;
    }

    // Pas de backend : on ouvre le client mail avec le message pré-rempli.
    const body = `De : ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:tchekamwatchueng@yahoo.fr?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailto;

    status.textContent = "Ton client mail s'ouvre avec le message pré-rempli.";
    status.style.color = "var(--accent)";
  });
}
