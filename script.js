// nav area collapse and active start
document.querySelector(".togglebar").addEventListener("click", () => {
  const navItems = document.querySelector(".navitems");
  navItems.classList.toggle("active");

  if (navItems.classList.contains("active")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
});

// nav area collapse and active end

// footer area dropdown start
function toggleSection(element) {
  element.classList.toggle('dropdown-active');
}
// footer area dropdown end




document.addEventListener("DOMContentLoaded", function () {
  // Define treatment data for each category
  const treatmentGroups = {
    "skin-texture": [
      { key: "collagen", name: "Advanced Collagen Induction Therapy" },
      { key: "prp", name: "Regenerative PRP Cellular Therapy" },
      { key: "peels", name: "Gentle Skin Resurfacing Peels" },
      { key: "bioremodelers", name: "Hydrating Bioremodelers" },
    ],
    "facial-balance": [
      { key: "profile", name: "Profile Perfection" },
      { key: "cheek", name: "Cheek & Temple Contour" },
      { key: "lips", name: "Lips & Smile Harmony" },
      { key: "eyes", name: "Eye & Brow Symmetry" },
    ],
    "aging-prevention": [
      { key: "expression", name: "Expression Softening" },
      { key: "refined", name: "Refined Lip & Nose Detail" },
      { key: "neck", name: "Neckline & Jaw Maintenance" },
      { key: "under-eye", name: "Under-Eye Brightening & Hydration Boost" },
    ],
    "refine-sculpt": [
      { key: "expression-refinement", name: "Expression Refinement" },
      { key: "volume-revival", name: "Volume Revival & Facial Harmony" },
      { key: "contour-elevation", name: "Contour Elevation" },
      { key: "dermal-revitalisation", name: "Dermal Revitalisation" },
      { key: "advanced-aesthetics", name: "Advanced Functional Aesthetics" }
    ],
    "revive-glow": [
      { key: "acne-scars", name: "Acne Scarring & Enlarged Pores" },
      { key: "tone-pigmentation", name: "Uneven Tone & Pigmentation" },
      { key: "dull-complexion", name: "Dull, Lacklustre Complexion" },
      { key: "fine-lines", name: "Fine Lines & Textural Concerns" },
      { key: "dehydration", name: "Dehydration & Loss of Glow" },
      { key: "under-eye-fatigue", name: "Under-Eye Fatigue / Dark Circles" },
      { key: "post-acne", name: "Post-Acne Marks" },
      { key: "skin-rejuvenation", name: "Overall Skin Rejuvenation" }
    ],
    "renew-elevate": [
      { key: "advanced-aging", name: "Advanced Signs of Ageing" },
      { key: "complex-concerns", name: "Complex Skin Concerns" },
      { key: "deep-scars", name: "Deep Scars or Skin Trauma" },
      { key: "subtle-enhancements", name: "Subtle Structural Enhancements" },
      { key: "poor-healing", name: "Poor Skin Healing or Collagen Depletion" },
      { key: "overfilled-correction", name: "Unwanted or Overfilled Areas Needing Correction" }
    ]
  };

  const treatmentHoverMap = {
    collagen: { image: "images/collagen.jpg", desc: "Stimulate collagen and improve texture." },
    prp: { image: "images/prp.jpg", desc: "Rejuvenate with natural PRP healing." },
    peels: { image: "images/peels.jpg", desc: "Gently resurface skin tone." },
    bioremodelers: { image: "images/bioremodelers.jpg", desc: "Hydrate and boost skin." },
    profile: { image: "images/profile.jpg", desc: "Balance your facial profile." },
    cheek: { image: "images/cheek.jpg", desc: "Enhance cheek and temple volume." },
    lips: { image: "images/lips.jpg", desc: "Naturally plump lips and smile." },
    eyes: { image: "images/eyes.jpg", desc: "Lift and brighten eyes." },
    expression: { image: "images/expression.jpg", desc: "Smooth expressive lines." },
    refined: { image: "images/refined.jpg", desc: "Enhance nose and lips." },
    neck: { image: "images/neck.jpg", desc: "Define jaw and neckline." },
    "under-eye": { image: "images/under-eye.jpg", desc: "Brighten tired eyes." },
    "expression-refinement": { image: "images/expression-refinement.jpg", desc: "Refine expression lines naturally." },
    "volume-revival": { image: "images/volume-revival.jpg", desc: "Restore facial volume balance." },
    "contour-elevation": { image: "images/contour-elevation.jpg", desc: "Lift and define contours." },
    "dermal-revitalisation": { image: "images/dermal-revitalisation.jpg", desc: "Refresh and renew the dermis." },
    "advanced-aesthetics": { image: "images/advanced-aesthetics.jpg", desc: "Functional and refined enhancement." },
    "acne-scars": { image: "images/acne-scars.jpg", desc: "Minimize acne scarring." },
    "tone-pigmentation": { image: "images/tone-pigmentation.jpg", desc: "Even out pigmentation." },
    "dull-complexion": { image: "images/dull-complexion.jpg", desc: "Bring back skin radiance." },
    "fine-lines": { image: "images/fine-lines.jpg", desc: "Smooth fine lines." },
    "dehydration": { image: "images/dehydration.jpg", desc: "Rehydrate and glow." },
    "under-eye-fatigue": { image: "images/under-eye-fatigue.jpg", desc: "Revitalize tired eyes." },
    "post-acne": { image: "images/post-acne.jpg", desc: "Fade acne marks." },
    "skin-rejuvenation": { image: "images/skin-rejuvenation.jpg", desc: "Full-skin refresh." },
    "advanced-aging": { image: "images/advanced-aging.jpg", desc: "Target advanced signs of aging." },
    "complex-concerns": { image: "images/complex-concerns.jpg", desc: "Address multi-layered concerns." },
    "deep-scars": { image: "images/deep-scars.jpg", desc: "Correct deep scarring." },
    "subtle-enhancements": { image: "images/subtle-enhancements.jpg", desc: "Subtle aesthetic enhancements." },
    "poor-healing": { image: "images/poor-healing.jpg", desc: "Support skin regeneration." },
    "overfilled-correction": { image: "images/overfilled-correction.jpg", desc: "Refine overfilled features." }
  };

  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const categoryId = card.getAttribute("data-category");
      const group = treatmentGroups[categoryId];
      if (!group) return;

      // Detect if we're in mobile or desktop mode
      const isMobile = card.closest(".mobile-only") !== null;
      const previewId = isMobile
        ? `${categoryId}-preview-mobile`
        : `${categoryId}-preview`;

      // Determine the proper container
      const container = isMobile
        ? card.closest(".services") // mobile: card + preview wrapped together
        : card.closest(".service-preview-container"); // desktop: preview is outside .services

      if (!container) return;

      const previewSection = container.querySelector(`#${previewId}`);
      if (!previewSection) return;

      // Hide all previews within the same container
      container.querySelectorAll(".service-preview").forEach((p) => {
        p.style.display = "none";
      });

      // Show the relevant preview
      previewSection.style.display = "flex";

      const ul = previewSection.querySelector("ul");
      const img = previewSection.querySelector("img.preview-image");
      const desc = previewSection.querySelector(".preview-text");
      const msg = previewSection.querySelector(".preview-message");

      ul.innerHTML = "";
      msg.style.display = "block";
      img.style.display = "none";
      desc.style.display = "none";

      group.forEach(({ key, name }) => {
        const li = document.createElement("li");
        li.textContent = name;
        li.addEventListener("mouseenter", () => {
          const data = treatmentHoverMap[key];
          if (data) {
            msg.style.display = "none";
            img.style.display = "block";
            img.src = data.image;
            desc.style.display = "block";
            desc.innerHTML = data.desc;
          }
        });
        ul.appendChild(li);
      });
    });
  });


  // Restore Mega Menu Preview Logic
  document.querySelectorAll('.mega-menu li').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imgSrc = item.getAttribute('data-img');
      const description = item.getAttribute('data-desc');
      const price = item.getAttribute('data-price');

      const imgEl = document.getElementById('hoverImg');
      const descEl = document.getElementById('preview-desc');
      const prEl = document.getElementById('preview-price');

      if (imgEl || descEl || price) {
        imgEl.src = `images/${imgSrc}`;
        descEl.textContent = description;
        prEl.textContent = `Price: ${price}`;
      }
    });
  });
});


// Mega Menu Hover Logic for CONDITIONS menu
document.querySelectorAll("li.has-mega:nth-child(2) .mega-menu li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const imgSrc = item.getAttribute("data-img");
    const description = item.getAttribute("data-desc");
    const price = item.getAttribute('data-price');

    const imgEl = document.getElementById("hoverImgConditions");
    const descEl = document.getElementById("preview-desc-conditions");
    const prEl = document.getElementById("preview-price-conditions");

    if (imgEl || descEl || price) {
      imgEl.src = `images/${imgSrc}`;
      descEl.textContent = description;
      prEl.textContent = `Price: ${price}`;

      imgEl.classList.remove("show");
      descEl.classList.remove("show");

      setTimeout(() => {
        imgEl.classList.add("show");
        descEl.classList.add("show");
      }, 10);
    }
  });
});