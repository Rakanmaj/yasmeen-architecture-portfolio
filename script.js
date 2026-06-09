const imagePath = (name) => `assets/images/${name}`;

const projects = [
  {
    id: "terraced-grid-living",
    number: "01",
    title: "Terraced Grid Living",
    category: "Residential compound",
    subtitle: "A modular mixed-use residential compound",
    location: "Al-Thuhair",
    area: "11,624 m^2",
    type: "Residential compound",
    description: "This project is a residential compound with commercial and social green spaces.",
    cardDescription: "Mixed-use residential compound with green social spaces.",
    features: [
      "Green roofs, planters, and internal courtyards",
      "Deep balconies for shading and privacy",
      "Vertical wooden louvers for climate control and aesthetics",
      "Commercial ground floor for active street life",
      "Modular shifting and stacking concept"
    ],
    theme: "",
    images: ["cover_project 1.jpeg", "project 1.jpeg", "project1 second pic.jpeg", "project 1 third.jpeg"]
  },
  {
    id: "eco-wadi-project",
    number: "02",
    title: "Eco-Wadi Project",
    category: "Greenhouses",
    subtitle: "An Eco-Wadi Hub as a sustainable tourism destination",
    location: "Um Juzah, Balqa",
    description: "This project reimagines the traditional greenhouse by integrating plant life throughout spatial experiences, forming an ecological retreat rooted in environmental harmony.",
    cardDescription: "Ecological greenhouse retreat shaped by plant life and light.",
    features: [
      "Grid-based rhythmic spatial sequence",
      "Triangular geometric facade",
      "Solar-integrated roof for energy and daylight control",
      "Transparent structure with strategic shading panels",
      "Curated green pathway and interactive landscapes",
      "Two buildings with restaurant, greenhouses, exhibition, lobby, shop, and meeting rooms"
    ],
    extra: "Building one includes restaurant, greenhouse, lobby, and souvenir shop. Building two includes greenhouse, exhibition space, and meeting rooms. The original parametric workflow was developed independently, with approximately 80% of the logic created without relying on pre-made tutorials.",
    theme: "project--parametric",
    images: ["project 2 cover.jpeg", "project 2 interior.jpeg", "Floor plan for project 2.jpeg", "Scripts used for project 2.jpeg", "Scripts used for project 2 (1).jpeg"]
  },
  {
    id: "green-spine-landscape",
    number: "03",
    title: "Green Spine Landscape",
    category: "Street Islands",
    subtitle: "A Walk Through Serendipity",
    location: "Business Park",
    description: "A linear urban path shaped by moments of interaction, pause, and movement. The design follows natural human flow and spontaneity, creating an inviting, intuitive, and playful public space.",
    cardDescription: "Linear urban landscape for movement, pause, and gathering.",
    features: [
      "Random square distribution for organic spatial rhythm",
      "Mixed functions: seating, vending, biking, and planting",
      "Native and ornamental species for seasonal character",
      "Open yet structured layout encouraging movement and gathering"
    ],
    extra: "Randomly arranged squares create a non-linear experience that mirrors how people naturally move, rest, and explore, blurring the boundary between order and spontaneity.",
    theme: "project--green",
    images: ["project 3 cover .jpeg", "project 3 render.jpeg", "project 3 render .jpeg", "project 3 render 2.jpeg", "project 3 top view.jpeg", "Section for project 3.jpeg"]
  },
  {
    id: "special-topics",
    number: "04",
    title: "Special Topics",
    category: "Revit Course",
    subtitle: "Revit Course",
    location: "Technical documentation",
    description: "A technical Revit course package covering floor plans, sections, wet area planning, stairs details, roof detail callout, and foundation sections.",
    cardDescription: "Revit documentation package for plans, sections, and details.",
    features: ["Ground floor area plan", "Building sections with level markers", "Wet area plan and WC section", "Stairs details", "Roof detail callout", "Foundation section and foundation top view detail"],
    theme: "project--technical",
    images: ["pptx-project-media-37.png", "pptx-project-media-39.png", "pptx-project-media-41.png", "pptx-project-media-43.png", "pptx-project-media-45.png", "pptx-project-media-47.png", "pptx-project-media-49.png", "pptx-project-media-51.png", "pptx-project-media-53.png"]
  },
  {
    id: "vr-research-lab",
    number: "05",
    title: "VR Research Lab",
    category: "Unreal",
    subtitle: "Interactive space redesign at Al-Hussein Technical University",
    location: "HTU",
    description: "This project was developed using Unreal Engine as part of an interactive space redesign at Al-Hussein Technical University. The room was first modeled in SketchUp, then exported to Unreal Engine, where interactive stations were created through scripting to enhance user engagement and spatial experience.",
    cardDescription: "Interactive Unreal Engine lab experience modeled from SketchUp.",
    features: ["Unreal Engine environment", "SketchUp modeling workflow", "Interactive stations", "Talking character", "Scripting preview"],
    theme: "project--dark",
    images: ["pptx-project-media-55.png", "pptx-project-media-56.png", "pptx-project-media-57.png", "pptx-project-media-58.png", "pptx-project-media-59.png", "pptx-project-media-60.png", "pptx-project-media-61.png", "pptx-project-media-62.png", "pptx-project-media-63.png"]
  }
];

const software = ["AutoCAD", "SketchUp", "Revit", "Rhinoceros", "Grasshopper", "Lumion", "Adobe Photoshop", "Unreal Engine"];
const allImages = projects.flatMap((project) => project.images.map((file, index) => ({
  file,
  project: project.title,
  id: project.id,
  description: project.cardDescription,
  index
})));
let currentImages = [...allImages];
let lightboxIndex = 0;

window.addEventListener("load", () => document.querySelector(".loader")?.classList.add("is-hidden"));

const header = document.querySelector("[data-header]");
const setHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
setHeader();
window.addEventListener("scroll", setHeader, { passive: true });

const typeTarget = document.querySelector("[data-type]");
if (typeTarget) {
  const text = typeTarget.dataset.type;
  let index = 0;
  const type = () => {
    typeTarget.textContent = text.slice(0, index);
    index = index < text.length ? index + 1 : 0;
    setTimeout(type, index === 0 ? 1200 : 45);
  };
  type();
}

document.querySelector("[data-parallax]")?.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 34;
  const y = (event.clientY / window.innerHeight - 0.5) * 34;
  event.currentTarget.style.setProperty("--mx", `${x}px`);
  event.currentTarget.style.setProperty("--my", `${y}px`);
});

document.getElementById("softwareGrid").innerHTML = software.map((item, index) => `
  <article class="software-card reveal tilt-card">
    <span>0${index + 1}</span>
    <b>${item}</b>
  </article>
`).join("");

document.getElementById("tocList").innerHTML = projects.map((project) => `
  <a class="toc-item reveal" href="#${project.id}" style="--hover-img:url('${imagePath(project.images[0])}')">
    <span class="toc-item__number">${project.number}</span>
    <span class="toc-item__title">${project.title}</span>
    <span class="toc-item__category">${project.category}</span>
    <span class="toc-item__arrow">+</span>
  </a>
`).join("");

document.getElementById("projectSections").innerHTML = projects.map((project) => projectSection(project)).join("");

function projectSection(project) {
  const isBoard = project.number === "04" || project.number === "05";
  const galleryClass = isBoard ? "board-grid" : "gallery-strip";
  const facts = [
    project.subtitle,
    `Location: ${project.location}`,
    project.area ? `Area: ${project.area}` : "",
    project.type ? `Type: ${project.type}` : "",
    `${project.images.length} Visuals`
  ].filter(Boolean);

  return `
    <section class="project ${project.theme}" id="${project.id}" style="--project-cover:url('${imagePath(project.images[0])}')">
      <div class="project__shell">
        <div class="project__mast reveal">
          <div class="project__title-block">
            <p class="eyebrow">Project - ${project.number}</p>
            <h3>${project.title}</h3>
            <div class="project__meta">
              ${facts.map((fact) => `<span>${fact}</span>`).join("")}
            </div>
          </div>
          <figure class="project__cover tilt-card" data-project="${project.id}" data-file="${project.images[0]}">
            <img src="${imagePath(project.images[0])}" alt="${project.title}" loading="lazy" />
            <figcaption>
              <span>${project.category}</span>
              <b>${project.cardDescription}</b>
            </figcaption>
            <button class="image-card__next project__cover-open" type="button" aria-label="Open ${project.title} featured image">Open</button>
          </figure>
        </div>
        <div class="project__body reveal">
          <div class="project__copy">
            <p>${project.description}</p>
            ${project.extra ? `<p>${project.extra}</p>` : ""}
          </div>
          <ol class="feature-list">
            ${project.features.map((feature, index) => `<li style="--i:'${String(index + 1).padStart(2, "0")}'">${feature}</li>`).join("")}
          </ol>
        </div>
        <div class="project__gallery-head reveal">
          <div>
            <span>Selected visuals</span>
            <b>${project.images.length} portfolio plates</b>
          </div>
        </div>
        <div class="${galleryClass} reveal" data-project-gallery="${project.id}">
          ${project.images.map((file, index) => imageCard(file, project.title, project.id, isBoard, index, project.cardDescription)).join("")}
        </div>
      </div>
    </section>
  `;
}

function imageCard(file, project, id, board = false, index = 0, description = "Project visual from the portfolio presentation.") {
  const tag = board ? "article" : "figure";
  return `
    <${tag} class="${board ? "board-card tilt-card" : "image-card tilt-card"}" data-project="${id}" data-file="${file}">
      <img src="${imagePath(file)}" alt="${project}" loading="lazy" />
      ${board ? `<p><span>Plate ${String(index + 1).padStart(2, "0")}</span>${description}</p>` : `<figcaption><span>Plate ${String(index + 1).padStart(2, "0")} / ${project}</span></figcaption>`}
      <button class="image-card__next" type="button" aria-label="Open ${project} image">Open</button>
    </${tag}>
  `;
}

const filters = document.getElementById("filters");
const galleryGrid = document.getElementById("galleryGrid");
if (filters && galleryGrid) {
  filters.innerHTML = [`<button class="is-active" data-filter="all">All</button>`].concat(projects.map((project) => `<button data-filter="${project.id}">${project.number}</button>`)).join("");

  function renderGallery(filter = "all") {
    currentImages = filter === "all" ? [...allImages] : allImages.filter((item) => item.id === filter);
    galleryGrid.innerHTML = currentImages.map((item) => imageCard(item.file, item.project, item.id, false, item.index || 0, item.description)).join("");
    bindImageCards();
  }
  renderGallery();

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    filters.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderGallery(button.dataset.filter);
  });
}

function bindImageCards() {
  document.querySelectorAll(".image-card, .board-card, .project__cover").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      const file = card.dataset.file;
      const projectData = projects.find((item) => item.id === card.dataset.project);
      const project = projectData?.title || "";
      currentImages = projectData ? projectData.images.map((imageFile, index) => ({ file: imageFile, project, id: projectData.id, description: projectData.cardDescription, index })) : allImages;
      lightboxIndex = currentImages.findIndex((item) => item.file === file && item.project === project);
      openLightbox(lightboxIndex);
    });
  });
}
bindImageCards();

document.addEventListener("mousemove", (event) => {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isInside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!isInside) {
      card.style.transform = "";
      return;
    }
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-8px) translateZ(0)`;
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");

function openLightbox(index) {
  if (index < 0) index = 0;
  lightboxIndex = index;
  const item = currentImages[lightboxIndex];
  lightboxImg.src = imagePath(item.file);
  lightboxImg.alt = item.project;
  lightboxCaption.textContent = item.project;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function moveLightbox(direction) {
  lightboxIndex = (lightboxIndex + direction + currentImages.length) % currentImages.length;
  openLightbox(lightboxIndex);
}

lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => moveLightbox(-1));
lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const navLinks = [...document.querySelectorAll("nav a")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
