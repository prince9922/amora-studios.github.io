document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initTheme();

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

  const eventItems = (AMORA.eventCategories || []).map(c =>
    `<a href="category.html?event=${encodeURIComponent(c.slug)}">${c.name}</a>`
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
            <a href="category.html?event=Birthday">Events <span>⌄</span></a>
            <div class="dropdown-menu category-menu">${eventItems}</div>
          </div>

          <a href="about.html">About Us</a>
        </nav>

        <div class="header-icons">
          <a href="category.html?category=Mugs" aria-label="Search">⌕</a>
          <a href="#" aria-label="Wishlist">♡</a>
          <a href="#" aria-label="Cart">🛒</a>
          <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode">☾</button>
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
          <a href="category.html?event=Birthday">Events</a>
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

  renderHomeEvents();
  renderRecentlyViewed("home");
}

function renderHomeEvents() {
  const wrapper = document.getElementById("homeCategories");
  if (!wrapper || document.getElementById("homeEvents")) return;
  const section = document.createElement("section");
  section.id = "homeEvents";
  section.className = "home-events container";
  section.innerHTML = `
    <div class="section-title-row">
      <div><span class="eyebrow">SHOP BY MOMENT</span><h2>Events &amp; Celebrations</h2></div>
      <a class="view-more" href="category.html?event=Birthday">Explore Events →</a>
    </div>
    <div class="event-chip-grid">
      ${(AMORA.eventCategories || []).map(e => `<a class="event-chip" href="category.html?event=${encodeURIComponent(e.slug)}"><span>${eventIcon(e.name)}</span><strong>${e.name}</strong><small>${getEventProducts(e.name).length} gifts</small></a>`).join("")}
    </div>`;
  wrapper.parentElement?.insertBefore(section, wrapper);
}
function eventIcon(name) {
  const icons = {"Birthday":"🎂","Anniversary":"💞","Friendship":"🤝","Special Day":"✨","Gratitude Day":"🙏","Mother's Day":"🌷","Father's Day":"💙","Valentine's Day":"❤️","Wedding":"💍","Farewell":"👋"};
  return icons[name] || "🎁";
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
  const mrp = p.mrp && p.mrp > p.price ? `<del>₹${p.mrp.toLocaleString("en-IN")}</del>` : "";
  const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : "";
  return `
    <article class="product-card" data-product-id="${p.id}">
      <div class="product-image-wrap">${badge}<button class="wishlist-float js-wishlist" data-id="${p.id}" aria-label="Add ${p.title} to wishlist">♡</button>
      <a class="product-image" href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.title}" loading="lazy"></a></div>
      <div class="product-card-info">
        <span class="product-category">${p.category}</span>
        <h3><a href="product.html?id=${p.id}">${p.title}</a></h3>
        <div class="price">₹${p.price.toLocaleString("en-IN")} ${mrp}</div>
        <div class="product-card-rating">${ratingSummary(p)} <a href="product.html?id=${p.id}#reviews">(${getProductReviews(p).length})</a></div>
        <div class="card-actions"><button class="small-link js-add-cart" data-id="${p.id}">Add to Cart</button><a class="small-link" href="product.html?id=${p.id}">View →</a></div>
      </div>
    </article>
  `;
}

function getEventProducts(eventName) {
  const ids = (AMORA.eventProductIds || {})[eventName] || [];
  return ids.map(id => findProduct(id)).filter(Boolean);
}

function initCategory() {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category") || "Mugs";
  const requestedEvent = params.get("event");
  const eventNames = (AMORA.eventCategories || []).map(e => e.name.toLowerCase());
  const legacyEvent = eventNames.includes(requestedCategory.toLowerCase()) ? requestedCategory : "";
  const eventName = requestedEvent || legacyEvent;
  const isEvent = !!eventName && eventNames.includes(eventName.toLowerCase());

  const products = isEvent
    ? getEventProducts(eventName)
    : AMORA.products.filter(p => p.category.toLowerCase() === requestedCategory.toLowerCase());

  const displayName = isEvent ? eventName : requestedCategory;

  document.title = `Amora Studios | ${displayName}`;
  document.getElementById("crumbCategory").textContent = displayName;
  document.getElementById("categoryHeading").textContent = displayName;
  document.getElementById("categoryDescription").textContent = isEvent
    ? `Personalized gifts selected for ${displayName.toLowerCase()} — with mugs, frames, bottles, cushions and more.`
    : `Explore our ${displayName.toLowerCase()} collection, personalized with love.`;

  const pills = document.getElementById("categoryPills");
  const pillItems = isEvent
    ? (AMORA.eventCategories || [])
    : AMORA.categories;

  pills.innerHTML = pillItems.map(c => {
    const active = c.name.toLowerCase() === displayName.toLowerCase();
    const href = isEvent ? `category.html?event=${encodeURIComponent(c.slug)}` : `category.html?category=${encodeURIComponent(c.slug)}`;
    return `<a class="${active ? "active" : ""}" href="${href}">${c.name}</a>`;
  }).join("");

  const grid = document.getElementById("categoryGrid");
  const sort = document.getElementById("sortProducts");

  function render(list) {
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty-state"><h2>No products found</h2><p>Try another event or browse our product categories.</p></div>`;
    syncWishlistButtons();
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

  renderProductReviews(product);
  renderRecentlyViewed("product", product.id);
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


/* ==========================================================
   AMORA STATIC STORE ENHANCEMENTS — PHASE 1 + PHASE 2
   Cart/Wishlist/Search/Filters/WhatsApp + Personalization
   All data is client-side until the future backend is connected.
   ========================================================== */
const AMORA_STORE = {
  cartKey: "amora_cart_v1",
  wishlistKey: "amora_wishlist_v1",
  recentKey: "amora_recent_v1",
  searchKey: "amora_search_v1",
  maxPhotoBytes: 900000
};

function storeRead(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (_) { return fallback; }
}
function storeWrite(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function getCart() { return storeRead(AMORA_STORE.cartKey, []); }
function setCart(v) { storeWrite(AMORA_STORE.cartKey, v); updateStoreBadges(); }
function getWishlist() { return storeRead(AMORA_STORE.wishlistKey, []); }
function setWishlist(v) { storeWrite(AMORA_STORE.wishlistKey, v); updateStoreBadges(); }
function getRecent() { return storeRead(AMORA_STORE.recentKey, []); }
function money(n) { return `₹${Number(n || 0).toLocaleString("en-IN")}`; }
function findProduct(id) { return AMORA.products.find(p => Number(p.id) === Number(id)); }

function cartCount() { return getCart().reduce((sum, item) => sum + Number(item.qty || 0), 0); }
function wishlistCount() { return getWishlist().length; }
function updateStoreBadges() {
  const cartLink = document.querySelector('[aria-label="Cart"]');
  const wishLink = document.querySelector('[aria-label="Wishlist"]');
  if (cartLink) cartLink.innerHTML = `🛒<b class="icon-badge">${cartCount()}</b>`;
  if (wishLink) wishLink.innerHTML = `♡<b class="icon-badge">${wishlistCount()}</b>`;
}
function addToCart(id, customization = {}) {
  const product = findProduct(id); if (!product) return;
  const cart = getCart();
  const key = `${id}|${customization.name || ""}|${customization.text || ""}|${customization.instructions || ""}`;
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += Number(customization.qty || 1);
  else cart.push({ key, id: product.id, qty: Number(customization.qty || 1), customization });
  setCart(cart);
  showToast(`${product.title} added to cart`);
}
function toggleWishlist(id) {
  const list = getWishlist(); const n = Number(id); const i = list.indexOf(n);
  if (i >= 0) { list.splice(i, 1); showToast("Removed from wishlist"); }
  else { list.push(n); showToast("Added to wishlist"); }
  setWishlist(list); syncWishlistButtons();
}
function syncWishlistButtons() {
  const list = getWishlist();
  document.querySelectorAll(".js-wishlist").forEach(b => {
    const active = list.includes(Number(b.dataset.id));
    b.classList.toggle("active", active); b.textContent = active ? "♥" : "♡";
  });
}
function rememberRecent(id) {
  const list = getRecent().filter(x => Number(x) !== Number(id));
  list.unshift(Number(id)); storeWrite(AMORA_STORE.recentKey, list.slice(0, 8));
}
function showToast(message) {
  let el = document.getElementById("amoraToast");
  if (!el) { el = document.createElement("div"); el.id = "amoraToast"; document.body.appendChild(el); }
  el.textContent = message; el.classList.add("show"); clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove("show"), 2200);
}


function initTheme() {
  const saved = localStorage.getItem("amora_theme_v1");
  const theme = saved === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  updateThemeToggle();
}
function updateThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const dark = document.documentElement.dataset.theme === "dark";
  btn.textContent = dark ? "☀" : "☾";
  btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  btn.title = dark ? "Switch to light mode" : "Switch to dark mode";
}
function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("amora_theme_v1", next);
  updateThemeToggle();
}

const AMORA_REVIEW_PROFILES = [
  {name:"Aarav Sharma", location:"Noida, Uttar Pradesh", gender:"m"},
  {name:"Meera Kapoor", location:"Delhi, Delhi", gender:"f"},
  {name:"Rohan Verma", location:"Ghaziabad, Uttar Pradesh", gender:"m"},
  {name:"Nisha Patel", location:"Ahmedabad, Gujarat", gender:"f"},
  {name:"Aditya Singh", location:"Lucknow, Uttar Pradesh", gender:"m"},
  {name:"Priya Nair", location:"Bengaluru, Karnataka", gender:"f"},
  {name:"Kunal Mehta", location:"Jaipur, Rajasthan", gender:"m"},
  {name:"Sneha Das", location:"Kolkata, West Bengal", gender:"f"},
  {name:"Vikram Joshi", location:"Pune, Maharashtra", gender:"m"},
  {name:"Ananya Gupta", location:"Gurugram, Haryana", gender:"f"},
  {name:"Rahul Malhotra", location:"Mumbai, Maharashtra", gender:"m"},
  {name:"Ishita Roy", location:"Patna, Bihar", gender:"f"}
];

function reviewTopic(product) {
  const t = `${product.title} ${product.category} ${product.occasion || ""}`.toLowerCase();
  if (t.includes("mug")) return [
    "The print came out really clear and the mug looks exactly like the preview. It was packed well too.",
    "Ordered this as a gift and the photo quality was lovely. Delivery was smooth and on time.",
    "Nice product for the price. The personalization looked good and it arrived safely.",
    "Good mug and quick delivery."
  ];
  if (t.includes("frame")) return [
    "The frame looks beautiful in person. The photo was sharp and the finish was neat. Delivery was smooth.",
    "Loved the way my memory photo came out. Packaging was secure and the order reached me without any issue.",
    "The frame is good and feels gift-worthy. Received it on time.",
    "Nice print. Delivery was fine."
  ];
  if (t.includes("bottle")) return [
    "The personalized bottle turned out better than expected. The photo print is clear and delivery was hassle-free.",
    "Bought it for my husband and he loved it. Good finish, secure packing and smooth delivery.",
    "Useful gift and the customization looks neat. Reached me on time.",
    "Good quality and fast delivery."
  ];
  if (t.includes("cushion")) return [
    "The cushion is soft and the photo print looks really nice. It was packed properly and delivery was smooth.",
    "Very cute personalized gift. The colours came out nicely and it arrived safely.",
    "Good quality for gifting. Delivery was on time.",
    "Soft cushion, nice print."
  ];
  if (t.includes("key") || t.includes("magnet")) return [
    "Small but really nice keepsake. The photo was clear and the parcel arrived safely with smooth delivery.",
    "Perfect little personalized gift. Print quality was good and it reached me on time.",
    "Good finishing and decent print. Delivery was quick.",
    "Cute product and smooth delivery."
  ];
  return [
    "The personalization came out really well and the product looked just like I expected. Delivery was smooth too.",
    "A lovely gift and the photo quality was good. Packaging was secure and the order arrived on time.",
    "Good product for gifting. The customization looked neat and delivery was hassle-free.",
    "Nice personalized gift. Arrived safely."
  ];
}
function getProductReviews(product) {
  const profiles = AMORA_REVIEW_PROFILES;
  const texts = reviewTopic(product);
  const seed = Number(product.id) || 1;
  const count = 4;
  return Array.from({length: count}, (_, i) => {
    const profile = profiles[(seed + i * 3) % profiles.length];
    const ratingPatterns = [[5,4,5,3],[5,5,4,3],[4,5,3,5],[5,4,3,5]];
    const ratings = ratingPatterns[seed % ratingPatterns.length];
    return { ...profile, rating: ratings[i], text: texts[i] };
  });
}
function averageRating(product) {
  const reviews = getProductReviews(product);
  return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
}
function stars(rating) {
  return `<span class="stars" aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5-rating)}</span>`;
}
function ratingSummary(product) {
  return `<span class="rating-inline">${stars(Math.round(Number(averageRating(product))))} <b>${averageRating(product)}</b></span>`;
}

function renderProductMediaInfo(product) {
  const root = document.getElementById("productMediaInfo");
  if (!root) return;
  const rating = averageRating(product);
  root.innerHTML = `
    <div class="product-media-trust">
      <div class="product-media-rating">
        <div>
          <span class="eyebrow">CUSTOMER RATING</span>
          <div class="media-rating-line"><strong>${rating}</strong>${stars(Math.round(Number(rating)))}<span>${getProductReviews(product).length} feedback entries</span></div>
        </div>
        <a href="#reviews" class="media-rating-link">Read feedback ↓</a>
      </div>
      <div class="media-trust-grid">
        <div><strong>24 hrs</strong><span>Preparation</span></div>
        <div><strong>5–6 days</strong><span>Normal delivery</span></div>
        <div><strong>All India</strong><span>Delivery available</span></div>
      </div>
    </div>`;
}

function renderProductMediaShelf(product) {
  const media = document.getElementById("productMediaInfo");
  if (!media) return;
  const recentIds = getRecent().filter(id => Number(id) !== Number(product.id));
  let list = recentIds.map(id => findProduct(id)).filter(Boolean).slice(0, 4);
  let title = "Recently Viewed";
  let eyebrow = "YOUR BROWSING HISTORY";
  if (!list.length) {
    list = AMORA.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    title = "More From This Collection";
    eyebrow = "YOU MAY ALSO LIKE";
  }
  if (!list.length) return;
  const section = document.createElement("section");
  section.className = "product-media-shelf";
  section.innerHTML = `<div class="section-title-row"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div></div><div class="media-shelf-grid">${list.map(p => `
    <a class="media-shelf-card" href="product.html?id=${p.id}">
      <img src="${p.image}" alt="${escapeAttr(p.title)}" loading="lazy">
      <span><strong>${escapeHtml(p.title)}</strong><b>${money(p.price)}</b></span>
    </a>`).join("")}</div>`;
  media.appendChild(section);
}

function renderProductReviews(product) {
  const info = document.querySelector(".product-information");
  if (!info || document.getElementById("reviews")) return;
  const reviews = getProductReviews(product);
  const section = document.createElement("section");
  section.id = "reviews";
  section.className = "reviews-section";
  section.innerHTML = `
    <div class="reviews-header">
      <div><span class="eyebrow">CUSTOMER FEEDBACK</span><h2>What customers say</h2></div>
      <div class="reviews-summary"><strong>${averageRating(product)}</strong>${stars(Math.round(Number(averageRating(product))))}<span>${reviews.length} customer feedback entries</span></div>
    </div>
    <p class="review-demo-note">Customer feedback preview. Replace these entries with verified customer reviews when the review backend is enabled.</p>
    <div class="reviews-grid">${reviews.map(r => `
      <article class="review-card">
        <div class="review-top"><div>${stars(r.rating)}</div><span>${r.rating}/5</span></div>
        <p>${escapeHtml(r.text)}</p>
        <strong>${escapeHtml(r.name)}</strong>
        <small>${escapeHtml(r.location)}</small>
      </article>`).join("")}</div>`;
  info.appendChild(section);
}
function renderRecentlyViewed(context, currentId) {
  const ids = getRecent();
  if (context === "product" && currentId) {
    const product = findProduct(currentId);
    if (!product) return;
    renderProductMediaInfo(product);
    renderProductMediaShelf(product);
    return;
  }
  if (context === "home") {
    const wrap = document.getElementById("homeCategories");
    if (!wrap || !ids.length) return;
    const section = document.createElement("section");
    section.className = "recent-section container";
    section.innerHTML = `<div class="section-title-row"><div><span class="eyebrow">YOUR BROWSING HISTORY</span><h2>Recently Viewed</h2></div></div><div class="recent-grid">${ids.slice(0,4).map(id=>{const p=findProduct(id);return p?productCard(p):""}).join("")}</div>`;
    wrap.parentElement?.insertBefore(section, wrap);
  }
}

function enhanceHeader() {
  const icons = document.querySelector(".header-icons"); if (!icons) return;
  const search = icons.querySelector('[aria-label="Search"]');
  const wish = icons.querySelector('[aria-label="Wishlist"]');
  const cart = icons.querySelector('[aria-label="Cart"]');
  if (search) { search.href = "search.html"; search.title = "Search"; }
  if (wish) { wish.href = "wishlist.html"; }
  if (cart) { cart.href = "cart.html"; }
  if (!document.querySelector(".header-gift-link")) {
    const a = document.createElement("a"); a.className = "header-gift-link"; a.href = "gift-finder.html"; a.textContent = "Gift Finder";
    document.querySelector(".main-nav")?.appendChild(a);
  }
  updateStoreBadges(); syncWishlistButtons();
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle && !themeToggle.dataset.bound) {
    themeToggle.dataset.bound = "1";
    themeToggle.addEventListener("click", toggleTheme);
  }
  updateThemeToggle();
}

function enhanceCards() { syncWishlistButtons(); }

function initCategoryFilters() {
  if (document.body.dataset.page !== "category") return;
  const toolbar = document.querySelector(".category-toolbar"); if (!toolbar || toolbar.querySelector(".filter-panel")) return;
  const filter = document.createElement("button"); filter.className = "filter-toggle"; filter.textContent = "Filter";
  const panel = document.createElement("div"); panel.className = "filter-panel";
  panel.innerHTML = `<div><strong>Price</strong><label><input type="radio" name="priceFilter" value="all" checked> All</label><label><input type="radio" name="priceFilter" value="300"> Under ₹300</label><label><input type="radio" name="priceFilter" value="500"> Under ₹500</label><label><input type="radio" name="priceFilter" value="501"> ₹500+</label></div><div><strong>Availability</strong><label><input type="checkbox" id="availableOnly"> Available</label></div>`;
  toolbar.insertBefore(filter, toolbar.querySelector("select")); toolbar.appendChild(panel);
  filter.addEventListener("click", () => panel.classList.toggle("open"));
  panel.addEventListener("change", () => applyCategoryClientFilter());
}
function applyCategoryClientFilter() {
  const grid = document.getElementById("categoryGrid"); if (!grid) return;
  const selected = document.querySelector('input[name="priceFilter"]:checked')?.value || "all";
  const available = document.getElementById("availableOnly")?.checked;
  const cards = [...grid.querySelectorAll(".product-card")];
  cards.forEach(card => {
    const p = findProduct(card.dataset.productId); let show = true;
    if (selected === "300") show = p.price < 300;
    if (selected === "500") show = p.price <= 500;
    if (selected === "501") show = p.price > 500;
    if (available && p.stock === 0) show = false;
    card.style.display = show ? "" : "none";
  });
}

function initCartPage() {
  const root = document.getElementById("cartContent"); if (!root) return;
  const cart = getCart();
  if (!cart.length) { root.innerHTML = `<div class="empty-state commerce-empty"><h2>Your cart is empty</h2><p>Find something personal for someone special.</p><a class="btn btn-dark" href="category.html?category=Mugs">Start Shopping →</a></div>`; return; }
  const subtotal = cart.reduce((s,i) => { const p=findProduct(i.id); return s + (p ? p.price*i.qty : 0); }, 0);
  const shipping = subtotal >= 499 ? 0 : 99; const total = subtotal + shipping;
  root.innerHTML = `<div class="cart-layout"><div class="cart-items"><h2>Your Items</h2>${cart.map(cartRow).join("")}</div><aside class="summary-card"><h2>Order Summary</h2><div class="summary-line"><span>Subtotal</span><b>${money(subtotal)}</b></div><div class="summary-line"><span>Shipping</span><b>${shipping ? money(shipping) : "FREE"}</b></div><div class="summary-total"><span>Total</span><b>${money(total)}</b></div><div class="checkout-form"><label>Name<input id="orderName" placeholder="Your name"></label><label>Mobile<input id="orderMobile" inputmode="tel" placeholder="10-digit mobile"></label><label>Pincode<input id="orderPincode" inputmode="numeric" placeholder="Pincode"></label><label>Address<textarea id="orderAddress" rows="3" placeholder="Delivery address"></textarea></label></div><button id="whatsappCheckout" class="btn btn-dark full-btn">Place Order on WhatsApp →</button><p class="summary-note">Free shipping on orders above ₹499. Orders below ₹499 have ₹99 shipping. Prepaid orders only. Personalization photos can be attached in WhatsApp after opening the chat.</p></aside></div>`;
  root.querySelectorAll(".qty-minus,.qty-plus,.remove-cart").forEach(b => b.addEventListener("click", () => changeCartItem(b.dataset.key, b.dataset.action)));
  document.getElementById("whatsappCheckout").addEventListener("click", () => checkoutWhatsApp(subtotal, shipping, total));
}
function cartRow(item) {
  const p=findProduct(item.id); if(!p) return ""; const c=item.customization||{};
  const firstPhoto=Array.isArray(c.photoData) ? c.photoData[0] : c.photoData;
  const photoCount=Array.isArray(c.photoData) ? c.photoData.length : (c.photoData ? 1 : 0);
  return `<div class="cart-row"><img src="${firstPhoto || p.image}" alt="${p.title}"><div class="cart-row-main"><span class="product-category">${p.category}</span><h3>${p.title}</h3><p>${c.name ? `Name: ${escapeHtml(c.name)} · ` : ""}${c.text ? `Text: ${escapeHtml(c.text)} · ` : ""}${photoCount ? `${photoCount} photo${photoCount>1?"s":""} selected` : "No photo selected"}</p><strong>${money(p.price)} × ${item.qty}</strong></div><div class="cart-row-actions"><button class="qty-minus" data-key="${escapeAttr(item.key)}" data-action="minus">−</button><span>${item.qty}</span><button class="qty-plus" data-key="${escapeAttr(item.key)}" data-action="plus">+</button><button class="remove-cart" data-key="${escapeAttr(item.key)}" data-action="remove">Remove</button></div></div>`;
}
function changeCartItem(key, action) { const cart=getCart(); const item=cart.find(i=>i.key===key); if(!item)return; if(action==="plus")item.qty++; if(action==="minus")item.qty--; if(action==="remove"||item.qty<1)cart.splice(cart.indexOf(item),1); setCart(cart); initCartPage(); }
function checkoutWhatsApp(subtotal, shipping, total) {
  const name=document.getElementById("orderName")?.value.trim(), mobile=document.getElementById("orderMobile")?.value.trim(), pin=document.getElementById("orderPincode")?.value.trim(), address=document.getElementById("orderAddress")?.value.trim();
  if(!name || !mobile || !pin || !address) { showToast("Please complete your delivery details"); return; }
  const lines=getCart().map(i=>{const p=findProduct(i.id),c=i.customization||{};return `${p.title} × ${i.qty} — ${money(p.price*i.qty)}${c.name?` | Name: ${c.name}`:""}${c.text?` | Text: ${c.text}`:""}${c.instructions?` | Notes: ${c.instructions}`:""}${c.photoData?(Array.isArray(c.photoData)?` | Photos: ${c.photoData.length} selected (attach in WhatsApp)`:" | Photo: selected (attach in WhatsApp)"):""}`;});
  const msg=`Hi Amora Studios, I want to place an order.\n\n${lines.join("\n")}\n\nSubtotal: ${money(subtotal)}\nShipping: ${shipping?money(shipping):"FREE"}\nTotal: ${money(total)}\n\nCustomer: ${name}\nMobile: ${mobile}\nPincode: ${pin}\nAddress: ${address}`;
  window.open(`https://wa.me/${AMORA.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
}

function initWishlistPage() {
  const root=document.getElementById("wishlistContent"); if(!root)return; const ids=getWishlist(); const products=ids.map(findProduct).filter(Boolean);
  root.innerHTML=products.length ? `<div class="category-grid">${products.map(productCard).join("")}</div>` : `<div class="empty-state commerce-empty"><h2>Your wishlist is empty</h2><p>Tap the ♡ on any product to save it here.</p><a class="btn btn-dark" href="category.html?category=Mugs">Explore Gifts →</a></div>`;
  syncWishlistButtons();
}

function initSearchPage() {
  const input=document.getElementById("siteSearchInput"), btn=document.getElementById("siteSearchBtn"); if(!input)return;
  const params=new URLSearchParams(location.search); input.value=params.get("q")||"";
  const render=()=>{const q=input.value.trim().toLowerCase(); if(q) { const old=getRecent().slice(); const searches=storeRead(AMORA_STORE.searchKey,[]).filter(x=>x!==q); searches.unshift(q); storeWrite(AMORA_STORE.searchKey,searches.slice(0,8)); }
    const words=q.split(/\s+/).filter(Boolean); const list=AMORA.products.filter(p=>{const hay=[p.title,p.category,p.details,p.occasion||"",...(p.tags||[])].join(" ").toLowerCase(); return !q || words.every(w=>hay.includes(w));});
    document.getElementById("searchMeta").textContent=q?`${list.length} product${list.length===1?"":"s"} found for “${q}”`:`Search our personalized gift collection`;
    document.getElementById("searchGrid").innerHTML=list.length?list.map(productCard).join(""):`<div class="empty-state"><h2>No matching gifts</h2><p>Try “mug”, “birthday”, “couple” or “frame”.</p></div>`; syncWishlistButtons();
  };
  btn.addEventListener("click",render); input.addEventListener("keydown",e=>{if(e.key==="Enter")render();}); render();
}

function initFinder() {
  const root=document.getElementById("findGifts"); if(!root)return;
  const selected={recipient:"",occasion:"",budget:""};
  document.querySelectorAll(".choice-row button").forEach(b=>b.addEventListener("click",()=>{b.parentElement.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected"); const group=b.parentElement.id; selected[group.includes("recipient")?"recipient":group.includes("occasion")?"occasion":"budget"]=b.dataset.value;}));
  root.addEventListener("click",()=>{let list=AMORA.products.filter(p=>{const text=[p.title,p.category,p.details,p.occasion||"",...(p.tags||[])].join(" ").toLowerCase(); let ok=true; if(selected.recipient) ok=ok && text.includes(selected.recipient.toLowerCase()); if(selected.occasion) ok=ok && (text.includes(selected.occasion.toLowerCase()) || (p.occasion||"").toLowerCase()===selected.occasion.toLowerCase()); if(selected.budget) ok=ok && (selected.budget==="501"?p.price>500:p.price<=Number(selected.budget)); return ok;}); if(!list.length) list=AMORA.products.filter(p=>selected.budget==="501"?p.price>500:p.price<=Number(selected.budget||99999)).slice(0,8); document.getElementById("finderResults").innerHTML=list.slice(0,8).map(productCard).join(""); syncWishlistButtons();});
}

function initProductEnhancements() {
  if(document.body.dataset.page!=="product") return;
  const params=new URLSearchParams(location.search), product=findProduct(Number(params.get("id"))||1);
  if(!product) return;
  rememberRecent(product.id);
  const info=document.querySelector(".product-information");
  if(!info || document.getElementById("customizationBox")) return;

  const box=document.createElement("div");
  box.id="customizationBox";
  box.className="customization-box";
  box.innerHTML=`<h3>Personalize Your Gift</h3>
    <p class="customization-note">All Amora products are photo-based and personalized. Upload 1–6 photos. Images are resized in your browser for a lightweight preview.</p>
    <label>Name / Names<input id="customName" maxlength="80" placeholder="e.g. Rahul & Priya"></label>
    <label>Text / Quote<textarea id="customText" rows="2" maxlength="180" placeholder="Your message or quote"></textarea></label>
    <label>Special Instructions<textarea id="customInstructions" rows="2" maxlength="250" placeholder="Any design or printing instruction"></textarea></label>
    <label>Upload Photo(s)<input id="customPhoto" type="file" accept="image/*" multiple></label>
    <div id="photoPreviewWrap" class="photo-preview-wrap" hidden>
      <div id="photoPreviewGrid" class="photo-preview-grid"></div>
      <button type="button" id="removePhoto">Remove all photos</button>
    </div>
    <label>Quantity<div class="quantity-control"><button type="button" id="qtyDown">−</button><input id="customQty" value="1" readonly><button type="button" id="qtyUp">+</button></div></label>
    <button id="addCustomized" class="btn btn-dark full-btn">Add Personalized Gift to Cart →</button>`;
  info.insertBefore(box, info.querySelector(".detail-box"));

  let photoData=[];
  const photo=document.getElementById("customPhoto");
  const previewWrap=document.getElementById("photoPreviewWrap");
  const previewGrid=document.getElementById("photoPreviewGrid");

  function renderPhotoPreviews() {
    previewGrid.innerHTML=photoData.map((src,i)=>`<div class="photo-preview-item"><img src="${src}" alt="Uploaded photo ${i+1}"><span>${i+1}</span></div>`).join("");
    previewWrap.hidden=photoData.length===0;
  }

  photo.addEventListener("change",()=>{
    const files=Array.from(photo.files || []).slice(0,6);
    if(!files.length) return;
    photoData=[];
    let processed=0;
    files.forEach(file=>{
      if(!file.type.startsWith("image/")) { processed++; return; }
      const reader=new FileReader();
      reader.onload=e=>{
        const img=new Image();
        img.onload=()=>{
          const max=700;
          const scale=Math.min(1,max/Math.max(img.width,img.height));
          const c=document.createElement("canvas");
          c.width=Math.max(1,Math.round(img.width*scale));
          c.height=Math.max(1,Math.round(img.height*scale));
          c.getContext("2d").drawImage(img,0,0,c.width,c.height);
          photoData.push(c.toDataURL("image/jpeg",.62));
          processed++;
          if(processed===files.length){
            renderPhotoPreviews();
            if(files.length>6) showToast("Only the first 6 photos were selected");
          }
        };
        img.src=e.target.result;
      };
      reader.readAsDataURL(file);
    });
  });

  document.getElementById("removePhoto").addEventListener("click",()=>{
    photoData=[]; photo.value=""; renderPhotoPreviews();
  });
  document.getElementById("qtyDown").addEventListener("click",()=>{const q=document.getElementById("customQty");q.value=Math.max(1,Number(q.value)-1)});
  document.getElementById("qtyUp").addEventListener("click",()=>{const q=document.getElementById("customQty");q.value=Math.min(20,Number(q.value)+1)});
  document.getElementById("addCustomized").addEventListener("click",()=>{
    if(!photoData.length){ showToast("Please upload at least 1 photo"); return; }
    addToCart(product.id,{name:document.getElementById("customName").value.trim(),text:document.getElementById("customText").value.trim(),instructions:document.getElementById("customInstructions").value.trim(),qty:Number(document.getElementById("customQty").value),photoData});
  });
}

function escapeHtml(s){return String(s||"").replace(/[&<>\"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));}
function escapeAttr(s){return escapeHtml(s).replace(/'/g,"&#39;");}


/* ==========================================================
   AMORA ASSISTANT — STATIC, PRODUCT-AWARE SHOPPING CHATBOT
   No API key or backend required. Uses the real product catalogue,
   cart and wishlist already available in this static build.
   ========================================================== */
function initAmoraChatbot() {
  if(document.getElementById("amoraChatbot")) return;
  const root=document.createElement("div");
  root.id="amoraChatbot";
  root.innerHTML=`
    <button class="amora-chat-launcher" id="amoraChatLauncher" aria-label="Open Amora Assistant"><span>💬</span><b>Amora Assistant</b></button>
    <section class="amora-chat-panel" id="amoraChatPanel" aria-label="Amora Assistant" hidden>
      <header class="amora-chat-header"><div><strong>Amora Assistant</strong><small>Gift & shopping help</small></div><button id="amoraChatClose" aria-label="Close chat">×</button></header>
      <div class="amora-chat-messages" id="amoraChatMessages"></div>
      <div class="amora-chat-quick" id="amoraChatQuick">
        <button data-q="Show birthday gifts">🎂 Birthday gifts</button>
        <button data-q="Gifts under 500">₹500 gifts</button>
        <button data-q="How does delivery work?">🚚 Delivery</button>
        <button data-q="How can I customize a product?">🎨 Customize</button>
      </div>
      <form class="amora-chat-form" id="amoraChatForm"><input id="amoraChatInput" autocomplete="off" placeholder="Ask about gifts, delivery, pricing..." aria-label="Message"><button type="submit" aria-label="Send">➤</button></form>
      <a class="amora-chat-whatsapp" href="https://wa.me/${AMORA.whatsapp}" target="_blank" rel="noopener">Continue with WhatsApp →</a>
    </section>`;
  document.body.appendChild(root);

  const panel=document.getElementById("amoraChatPanel"), messages=document.getElementById("amoraChatMessages"), input=document.getElementById("amoraChatInput");
  const addMessage=(text,who="bot",html=false)=>{const el=document.createElement("div");el.className=`amora-chat-msg ${who}`;el.innerHTML=html?text:escapeHtml(text).replace(/\n/g,"<br>");messages.appendChild(el);messages.scrollTop=messages.scrollHeight;};
  const productLink=p=>`<a href="product.html?id=${p.id}">${escapeHtml(p.title)} · ${money(p.price)}</a>`;
  const productResults=(products,title="Here are some options:")=>{
    const list=products.slice(0,4);
    if(!list.length) return `<p>I couldn't find an exact match in the current Amora catalogue. Try another occasion or budget.</p>`;
    return `<p>${title}</p><div class="amora-chat-products">${list.map(p=>`<div class="amora-chat-product"><img src="${p.image}" alt=""><div><strong>${escapeHtml(p.title)}</strong><span>${money(p.price)} · ${averageRating(p)}★</span><div><a href="product.html?id=${p.id}">View</a><button class="chat-add-product" data-id="${p.id}">Add to cart</button></div></div></div>`).join("")}</div>`;
  };

  function detectBudget(q){
    const m=q.match(/(?:under|below|less than|within|upto|up to|under\s*₹?|below\s*₹?|₹)\s*(\d{2,5})/i) || q.match(/(?:₹?\s*)(\d{2,5})\s*(?:ke andar|ke under|tak)\b/i);
    return m?Number(m[1]):null;
  }
  function detectEvent(q){
    const map=[
      ["birthday", "Birthday"],["anniversary", "Anniversary"],["anniversory", "Anniversary"],["friendship", "Friendship"],["best friend", "Friendship"],
      ["special day", "Special Day"],["gratitude", "Gratitude Day"],["thank you", "Gratitude Day"],["mother's day", "Mother's Day"],["mothers day", "Mother's Day"],
      ["father's day", "Father's Day"],["fathers day", "Father's Day"],["valentine", "Valentine's Day"],["wedding", "Wedding"],["farewell", "Farewell"]
    ];
    return map.find(([k])=>q.includes(k))?.[1] || null;
  }
  function detectCategory(q){
    return (AMORA.categories||[]).find(c=>q.includes(c.name.toLowerCase().replace(/s$/,"")) || q.includes(c.name.toLowerCase()))?.name || null;
  }
  function recommend(q){
    const budget=detectBudget(q), event=detectEvent(q), category=detectCategory(q);
    let list=event?getEventProducts(event):[...AMORA.products];
    if(category) list=list.filter(p=>p.category===category);
    if(budget) list=list.filter(p=>p.price<=budget);
    const words=q.split(/\s+/).filter(w=>w.length>2);
    const recipientTerms={wife:["couple","love","photo"],husband:["couple","name","photo"],girlfriend:["couple","love","photo"],boyfriend:["couple","love","photo"],mom:["mom"],mother:["mom"],dad:["dad"],father:["dad"],friend:["friend"]};
    const terms=Object.entries(recipientTerms).find(([k])=>q.includes(k))?.[1]||[];
    if(terms.length) list.sort((a,b)=>scoreProduct(b,terms)-scoreProduct(a,terms));
    if(!event && !category && !budget && !terms.length){
      const relevant=words.length?AMORA.products.filter(p=>words.some(w=>`${p.title} ${p.details} ${p.category}`.toLowerCase().includes(w))):AMORA.products;
      list=relevant.length?relevant:list;
    }
    return list.sort((a,b)=>{
      const scoreDiff=scoreProduct(b,terms)-scoreProduct(a,terms);
      return scoreDiff || (a.price-b.price);
    });
  }
  function scoreProduct(p,terms){const hay=`${p.title} ${p.details} ${p.category}`.toLowerCase();return terms.reduce((n,t)=>n+(hay.includes(t)?1:0),0);}

  function respond(raw){
    const q=raw.toLowerCase().trim();
    if(!q) return;
    addMessage(raw,"user");
    let html="";
    if(/^(hi|hello|hey|namaste|hii|helo)\b/.test(q) || q.length<4){
      html=`<p>Hi! 😊 I’m Amora Assistant. I can help you find personalized photo gifts, check delivery/shipping, explain customization, or add products to your cart.</p>`;
    } else if(/shipping|delivery charge|shipping charge|delivery fee|ship.*cost|delivery.*cost/.test(q)){
      html=`<p>Shipping is <strong>FREE for orders ₹499 and above</strong>. For orders below ₹499, shipping is <strong>₹99</strong>.</p><p>Normal delivery is usually <strong>5–6 days across India</strong>. Same-day delivery is available in Delhi NCR with the applicable Porter charge paid by the customer.</p>`;
    } else if(/how long|delivery time|kab.*deliver|kitne din|days.*delivery|same day/.test(q)){
      html=`<p>Normal delivery: <strong>5–6 days across India</strong>. Personalized orders need <strong>24 hours preparation</strong>.</p><p>Delhi NCR customers can request same-day delivery; the applicable Porter charge is payable by the customer.</p>`;
    } else if(/cod|cash on delivery|cash.*delivery/.test(q)){
      html=`<p>COD is not available. Amora currently accepts <strong>prepaid orders only</strong> via UPI, online payment and credit/debit card.</p>`;
    } else if(/frame.*(size|colour|color)|size.*frame|color.*frame|colour.*frame/.test(q)){
      html=`<p>Our photo frames are available in <strong>A4, A5, A6 and 4×4 inch</strong> sizes. Frame colour options are <strong>Black and White</strong>.</p><p>Equivalent metric sizes: A4 21×29.7 cm, A5 14.8×21 cm, A6 10.5×14.8 cm and 4×4 inch 10.16×10.16 cm.</p>`;
    } else if(/photo|photos|upload|picture|pic/.test(q) && !detectEvent(q) && !/gift|suggest|recommend/.test(q)){
      html=`<p>All Amora products are photo-based and personalized. You can upload <strong>1–6 photos</strong> on the product page, along with names, text and special instructions.</p>`;
    } else if(/custom|personaliz|customiz|name|quote|text/.test(q) && !detectEvent(q) && !/gift|suggest|recommend/.test(q)){
      html=`<p>Every Amora product is personalized. On the product page you can provide names, a quote/message, special printing instructions and <strong>1–6 photos</strong>.</p><p>Preparation time is <strong>24 hours</strong>.</p>`;
    } else if(/return|refund|exchange|replace/.test(q)){
      html=`<p>Please see our <a href="refund-policy.html">Return & Refund Policy</a>. Personalized products generally cannot be returned just because of a change of mind or incorrect customer-provided customization. Damaged, defective or materially incorrect orders are reviewed for suitable resolution.</p>`;
    } else if(/payment|upi|card|online/.test(q)){
      html=`<p>Orders are <strong>prepaid only</strong>. Available payment methods are UPI, online payment and credit/debit card. COD is not available.</p>`;
    } else if(/cart|add.*basket|bag/.test(q) && /show|open|my/.test(q)){
      html=`<p>You currently have <strong>${cartCount()} item${cartCount()===1?"":"s"}</strong> in your cart.</p><p><a href="cart.html">Open Cart →</a></p>`;
    } else if(/wishlist|saved/.test(q)){
      html=`<p>You have <strong>${wishlistCount()}</strong> saved item${wishlistCount()===1?"":"s"}.</p><p><a href="wishlist.html">Open Wishlist →</a></p>`;
    } else if((/add|cart/.test(q)) && /(to|in|this|it|my)/.test(q)){
      const stripped=q.replace(/(add|to|my|cart|basket|bag|this|it)/g," ").replace(/\s+/g," ").trim();
      const exact=AMORA.products.find(p=>stripped.includes(p.title.toLowerCase()) || p.title.toLowerCase().split(/\s+/).filter(w=>w.length>3).every(w=>stripped.includes(w)));
      const list=exact?[exact]:recommend(stripped);
      if(list[0]){addToCart(list[0].id);html=`<p>Done — I added <strong>${escapeHtml(list[0].title)}</strong> to your cart.</p><p><a href="cart.html">View Cart →</a></p>`;}
      else html=`<p>Tell me the gift you want, for example: “Add the personalized couple mug to cart”.</p>`;
    } else if(/whatsapp|human|agent|talk.*person|support/.test(q)){
      html=`<p>Sure. You can continue with Amora on WhatsApp for personal assistance.</p><p><a class="chat-wa-link" target="_blank" rel="noopener" href="https://wa.me/${AMORA.whatsapp}">Open WhatsApp →</a></p>`;
    } else if(/gift|suggest|recommend|looking for|chahiye|batao|dikhao|show/.test(q)){
      const list=recommend(q);
      const event=detectEvent(q), budget=detectBudget(q);
      const title=event?`${event} gifts${budget?` under ${money(budget)}`:""}:` : budget?`Gifts under ${money(budget)}:` : "Based on your request:";
      html=productResults(list,title);
    } else if(/price|cost|kitne|how much/.test(q)){
      const list=recommend(q); html=productResults(list,"Here are matching products with current prices:");
    } else {
      const list=recommend(q);
      if(list.length && list.length<8) html=productResults(list,"I found these products that may match:");
      else html=`<p>I can help with products, gift recommendations, customization, photos, delivery, shipping, payment, returns, cart and wishlist.</p><p>Try: <strong>“Anniversary gift under ₹500”</strong> or <strong>“Wife ke liye photo gift chahiye”</strong>.</p>`;
    }
    addMessage(html,"bot",true);
  }

  document.getElementById("amoraChatLauncher").addEventListener("click",()=>{panel.hidden=false;input.focus();});
  document.getElementById("amoraChatClose").addEventListener("click",()=>panel.hidden=true);
  document.getElementById("amoraChatForm").addEventListener("submit",e=>{e.preventDefault();const v=input.value.trim();if(v){input.value="";respond(v);}});
  document.getElementById("amoraChatQuick").addEventListener("click",e=>{const b=e.target.closest("button[data-q]");if(b)respond(b.dataset.q);});
  messages.addEventListener("click",e=>{const b=e.target.closest(".chat-add-product");if(b){addToCart(b.dataset.id);}});
  addMessage(`Hi! 😊 I’m Amora Assistant.<br><span class="chat-muted">Try asking “birthday gift under ₹500”, “shipping?”, or “wife ke liye gift chahiye”.</span>`,"bot",true);
}

// Run after the original site initialization so existing design/code remains intact.
document.addEventListener("DOMContentLoaded", () => {
  enhanceHeader();
  initCategoryFilters();
  initCartPage();
  initWishlistPage();
  initSearchPage();
  initFinder();
  initProductEnhancements();
  initAmoraChatbot();
  enhanceCards();
  document.addEventListener("click", e=>{const cart=e.target.closest(".js-add-cart"), wish=e.target.closest(".js-wishlist"); if(cart){e.preventDefault();addToCart(cart.dataset.id);} if(wish){e.preventDefault();toggleWishlist(wish.dataset.id);}});
  setTimeout(()=>{enhanceCards();applyCategoryClientFilter();},50);
});
