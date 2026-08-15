document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();

  const page = document.body.dataset.page;

  if (page === "home") initHome();
  if (page === "category") initCategory();
  if (page === "product") initProduct();

  initMobileMenu();
});

function renderHeader() {
  const productItems = AMORA.categories.map(c =>
    `<a href="category.html?category=${encodeURIComponent(c.slug)}">${c.name}</a>`
  ).join("");

  const occasionItems = AMORA.occasionCategories.map(c =>
    `<a href="category.html?category=${encodeURIComponent(c)}">${c}</a>`
  ).join("");

  document.getElementById("siteHeader").innerHTML = `
    <div class="announcement">
      <div class="announcement-track">
        <span>✨ For placing your order, WhatsApp us at +91 80046 66834</span>
        <b>•</b>
        <span>Customise your favourite gifts with Amora Studios</span>
        <b>•</b>
        <span>✨ For placing your order, WhatsApp us at +91 80046 66834</span>
        <b>•</b>
        <span>Customise your favourite gifts with Amora Studios</span>
      </div>
    </div>

    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Amora Studios home">
          <span class="brand-name">AMORA</span>
          <span class="brand-studios">STUDIOS ♡</span>
        </a>

        <button class="mobile-toggle" id="mobileToggle" aria-label="Open menu">☰</button>

        <nav class="main-nav" id="mainNav">
          <a class="${document.body.dataset.page === "home" ? "active" : ""}" href="index.html">Home</a>

          <div class="nav-dropdown">
            <a href="category.html?category=Mugs">Products <span>⌄</span></a>
            <div class="dropdown-menu">${productItems}</div>
          </div>

          <a href="coming-soon.html">Combo</a>

          <div class="nav-dropdown">
            <a href="category.html?category=Misc">Category <span>⌄</span></a>
            <div class="dropdown-menu category-menu">${occasionItems}</div>
          </div>

          <a href="about.html">About Us</a>
        </nav>

        <div class="header-icons">
          <a href="category.html?category=Mugs" aria-label="Search">⌕</a>
          <a href="#" aria-label="Wishlist">♡</a>
          <a href="#" aria-label="Cart">🛒</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  document.getElementById("siteFooter").innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand-block">
          <a class="brand footer-brand" href="index.html">
            <span class="brand-name">AMORA</span>
            <span class="brand-studios">STUDIOS ♡</span>
          </a>
          <p>Personalized with love.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="category.html?category=Mugs">Shop</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact Us</a>
        </div>

        <div>
          <h3>Customer Care</h3>
          <a href="shipping-policy.html">Shipping Policy</a>
          <a href="refund-policy.html">Refund Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="privacy-policy.html">Privacy Policy</a>
        </div>

        <div>
          <h3>Connect</h3>
          <a href="mailto:support@amorastudios.in">support@amorastudios.in</a>
          <a href="https://www.instagram.com/amorastudios.in/" target="_blank" rel="noopener noreferrer">@amorastudios.in</a>
          <a href="https://wa.me/918004666834" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
        </div>
      </div>

      <div class="footer-bottom">© 2026 Amora Studios. All rights reserved.</div>
    </footer>
  `;
}
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => nav.classList.toggle("open"));

  nav.querySelectorAll(".nav-dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 850) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
}

function initHome() {
  initHeroSlider();

  const wrapper = document.getElementById("homeCategories");
  const categories = AMORA.categories;

  wrapper.innerHTML = categories.map(category => {
    const items = AMORA.products
      .filter(p => p.category === category.name)
      .slice(0, 4);

    return `
      <section class="home-category-section" id="${category.slug}">
        <div class="section-title-row">
          <div>
            <span class="eyebrow">${category.name.toUpperCase()}</span>
            <h2>${category.name}</h2>
          </div>
          <a class="view-more" href="category.html?category=${encodeURIComponent(category.slug)}">More ${category.name} →</a>
        </div>

        <div class="home-product-grid">
          ${items.map(productCard).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function initHeroSlider() {
  const slides = [
    {
      eyebrow: "PERSONALIZED GIFTS FOR EVERY MOMENT",
      title: "Make every moment truly personal.",
      text: "Unique. Custom. Made with love.",
      image: "assets/images/hero/hero-01.png"
    },
    {
      eyebrow: "GIFTS MADE FOR MEMORIES",
      title: "Turn your favourite memories into gifts.",
      text: "Mugs, bottles, frames and more — made just for you.",
      image: "assets/images/hero/hero-02.png"
    },
    {
      eyebrow: "MADE WITH LOVE",
      title: "Small gifts. Big emotions.",
      text: "Personalize something meaningful for someone special.",
      image: "assets/images/hero/hero-03.png"
    },
    {
      eyebrow: "AMORA STUDIOS",
      title: "Your story, your gift, your way.",
      text: "Create personalized keepsakes for every celebration.",
      image: "assets/images/hero/hero-04.png"
    }
  ];

  const slider = document.getElementById("heroSlider");
  const dots = document.getElementById("heroDots");
  let index = 0;
  let timer;

  slider.innerHTML = slides.map((slide, i) => `
    <div class="hero-slide ${i === 0 ? "active" : ""}">
      <div class="container hero-content">
        <div class="hero-copy">
          <span class="eyebrow">${slide.eyebrow}</span>
          <h1>${slide.title}</h1>
          <p>${slide.text}</p>
          <a class="btn btn-dark" href="category.html?category=Mugs">Shop Now →</a>
        </div>
        <div class="hero-art">
          <img src="${slide.image}" alt="Amora Studios personalized gifts">
        </div>
      </div>
    </div>
  `).join("");

  dots.innerHTML = slides.map((_, i) =>
    `<button class="${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join("");

  const show = next => {
    index = (next + slides.length) % slides.length;
    slider.querySelectorAll(".hero-slide").forEach((s, i) => s.classList.toggle("active", i === index));
    dots.querySelectorAll("button").forEach((d, i) => d.classList.toggle("active", i === index));
  };

  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5000);
  };

  document.querySelector(".hero-prev").addEventListener("click", () => { show(index - 1); restart(); });
  document.querySelector(".hero-next").addEventListener("click", () => { show(index + 1); restart(); });
  dots.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => { show(Number(btn.dataset.index)); restart(); }));

  restart();
}

function productCard(p) {
  return `
    <article class="product-card">
      <a class="product-image" href="product.html?id=${p.id}">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </a>
      <div class="product-card-info">
        <span class="product-category">${p.category}</span>
        <h3><a href="product.html?id=${p.id}">${p.title}</a></h3>
        <div class="price">₹${p.price.toLocaleString("en-IN")}</div>
        <a class="small-link" href="product.html?id=${p.id}">View Product →</a>
      </div>
    </article>
  `;
}

function initCategory() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "Mugs";
  const isOccasion = AMORA.occasionCategories.some(c => c.toLowerCase() === category.toLowerCase());
  const products = AMORA.products.filter(p =>
    isOccasion
      ? p.occasion && p.occasion.toLowerCase() === category.toLowerCase()
      : p.category.toLowerCase() === category.toLowerCase()
  );

  const displayName = category;

  document.title = `Amora Studios | ${displayName}`;
  document.getElementById("crumbCategory").textContent = displayName;
  document.getElementById("categoryHeading").textContent = displayName;
  document.getElementById("categoryDescription").textContent =
    `Explore our ${displayName.toLowerCase()} collection, personalized with love.`;

  const pills = document.getElementById("categoryPills");
  const pillItems = isOccasion
    ? AMORA.occasionCategories.map(c => ({name:c, slug:c}))
    : AMORA.categories;

  pills.innerHTML = pillItems.map(c =>
    `<a class="${c.name.toLowerCase() === displayName.toLowerCase() ? "active" : ""}" href="category.html?category=${encodeURIComponent(c.slug)}">${c.name}</a>`
  ).join("");

  const grid = document.getElementById("categoryGrid");
  const sort = document.getElementById("sortProducts");

  function render(list) {
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty-state"><h2>No products added yet</h2><p>Add products for this category in assets/js/data.js.</p></div>`;
  }

  function sortAndRender() {
    const list = [...products];
    if (sort.value === "low") list.sort((a,b) => a.price - b.price);
    if (sort.value === "high") list.sort((a,b) => b.price - a.price);
    render(list);
  }

  sort.addEventListener("change", sortAndRender);
  sortAndRender();
}

function initProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const product = AMORA.products.find(p => p.id === id) || AMORA.products[0];

  document.title = `Amora Studios | ${product.title}`;
  document.getElementById("productCrumb").textContent = product.title;
  document.getElementById("productCategory").textContent = product.category.toUpperCase();
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productPrice").textContent = `₹${product.price.toLocaleString("en-IN")}`;
  document.getElementById("productDetails").textContent = product.details;

  const categoryLink = document.getElementById("productCategoryLink");
  categoryLink.textContent = product.category;
  categoryLink.href = `category.html?category=${encodeURIComponent(product.category)}`;

  const mainImage = document.getElementById("productMainImage");
  mainImage.src = product.image;
  mainImage.alt = product.title;

  const galleryImages = product.gallery || [product.image, product.image, product.image];

  const thumbs = document.getElementById("productThumbs");
  thumbs.innerHTML = galleryImages.map((src, i) =>
    `<button class="${i === 0 ? "active" : ""}" data-src="${src}">
      <img src="${src}" alt="${product.title} view ${i + 1}">
    </button>`
  ).join("");

  thumbs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      mainImage.src = btn.dataset.src;
      thumbs.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  document.getElementById("productFeatures").innerHTML =
    product.features.map(f => `<li>${f}</li>`).join("");

  const message = encodeURIComponent(`Hi Amora Studios, I want to order: ${product.title} - ₹${product.price}`);
  document.getElementById("whatsappOrder").href = `https://wa.me/${AMORA.whatsapp}?text=${message}`;

  const similar = AMORA.products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  document.getElementById("similarGrid").innerHTML =
    similar.map(similarCard).join("");
}

function similarCard(p) {
  return `
    <a class="similar-card" href="product.html?id=${p.id}">
      <img src="${p.image}" alt="${p.title}">
      <span>
        <small>${p.category}</small>
        <strong>${p.title}</strong>
        <b>₹${p.price.toLocaleString("en-IN")}</b>
      </span>
    </a>
  `;
}
