const IMAGES = [
  {
    id: 1,
    title: "Alpine Solitude",
    category: "nature",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75"
  },
  {
    id: 2,
    title: "Circuit Depth",
    category: "technology",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75"
  },
  {
    id: 3,
    title: "Night Pulse",
    category: "city",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=75"
  },
  {
    id: 4,
    title: "Glass Vaulted",
    category: "architecture",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=75"
  },
  {
    id: 5,
    title: "Liquid Form",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=75"
  },
  {
    id: 6,
    title: "Tide Break",
    category: "nature",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=75"
  },
  {
    id: 7,
    title: "Server Grid",
    category: "technology",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75"
  },
  {
    id: 8,
    title: "Urban Geometry",
    category: "city",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75"
  },
  {
    id: 9,
    title: "Arch Meridian",
    category: "architecture",
    src: "https://images.unsplash.com/photo-1572988139620-ffd5548e8ec2?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1572988139620-ffd5548e8ec2?w=600&q=75"
  },
  {
    id: 10,
    title: "Chromatic Wave",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=75"
  },
  {
    id: 11,
    title: "Forest Veil",
    category: "nature",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=75"
  },
  {
    id: 12,
    title: "Fiber Web",
    category: "technology",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75"
  },
  {
    id: 13,
    title: "Midtown Rain",
    category: "city",
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=75"
  },
  {
    id: 14,
    title: "Dome Interior",
    category: "architecture",
    src: "https://images.unsplash.com/photo-1545566064-38fec74ec97e?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1545566064-38fec74ec97e?w=600&q=75"
  },
  {
    id: 15,
    title: "Ink Diffusion",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=75"
  },
  {
    id: 16,
    title: "Desert Bloom",
    category: "nature",
    src: "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=600&q=75"
  },
  {
    id: 17,
    title: "Binary Rain",
    category: "technology",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75"
  },
  {
    id: 18,
    title: "Skyline Dusk",
    category: "city",
    src: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=600&q=75"
  },
  {
    id: 19,
    title: "Concrete Lattice",
    category: "architecture",
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=75"
  },
  {
    id: 20,
    title: "Neon Merge",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&q=75"
  },
  {
    id: 21,
    title: "Glacier Still",
    category: "nature",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75"
  },
  {
    id: 22,
    title: "Code Layer",
    category: "technology",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=75"
  },
  {
    id: 23,
    title: "Metro Rush",
    category: "city",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=75"
  },
  {
    id: 24,
    title: "Steel & Glass",
    category: "architecture",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    thumb: "https://images.unsplash.com/photo-1464788786188-97fa5b41bfab?w=600&q=75"
  }
];

let activeFilter = "all";
let lightboxIndex = -1;
let filteredItems = [];
let isLightboxOpen = false;

const galleryGrid = document.getElementById("galleryGrid");
const emptyState = document.getElementById("emptyState");
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbTitle = document.getElementById("lbTitle");
const lbCategory = document.getElementById("lbCategory");
const lbCounter = document.getElementById("lbCounter");
const lbLoader = document.getElementById("lbLoader");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbBackdrop = document.getElementById("lightboxBackdrop");
const statTotal = document.getElementById("stat-total");

function buildGallery() {
  galleryGrid.innerHTML = "";

  IMAGES.forEach((img, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item filtering-in";
    item.dataset.category = img.category;
    item.dataset.index = index;
    item.style.animationDelay = `${index * 40}ms`;

    item.innerHTML = `
      <img
        src="${img.thumb}"
        alt="${img.title}"
        loading="lazy"
        onerror="this.closest('.gallery-item').style.display='none'"
      />
      <div class="gallery-overlay">
        <div class="overlay-title">${img.title}</div>
        <div class="overlay-cat">${img.category}</div>
      </div>
      <div class="overlay-zoom">⤢</div>
    `;

    item.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(item);
  });

  statTotal.textContent = IMAGES.length;
  updateFilteredItems();
}

function updateFilteredItems() {
  filteredItems = activeFilter === "all"
    ? IMAGES.map((_, i) => i)
    : IMAGES.reduce((acc, img, i) => {
        if (img.category === activeFilter) acc.push(i);
        return acc;
      }, []);
}

function applyFilter(filter) {
  activeFilter = filter;
  updateFilteredItems();

  const allItems = galleryGrid.querySelectorAll(".gallery-item");
  let visibleCount = 0;

  allItems.forEach((item) => {
    const cat = item.dataset.category;
    const show = filter === "all" || cat === filter;

    if (show) {
      item.classList.remove("hidden", "filtering-out");
      item.classList.add("filtering-in");
      visibleCount++;
    } else {
      item.classList.add("filtering-out");
      setTimeout(() => {
        if (item.dataset.category !== activeFilter && activeFilter !== "all") {
          item.classList.add("hidden");
        }
      }, 300);
    }
  });

  emptyState.classList.toggle("visible", visibleCount === 0);
}

function openLightbox(globalIndex) {
  lightboxIndex = filteredItems.indexOf(globalIndex);
  if (lightboxIndex === -1) lightboxIndex = 0;

  isLightboxOpen = true;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  renderLightboxImage();
}

function closeLightbox() {
  isLightboxOpen = false;
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  lbImage.src = "";
}

function renderLightboxImage() {
  const img = IMAGES[filteredItems[lightboxIndex]];
  if (!img) return;

  lbTitle.textContent = img.title;
  lbCategory.textContent = img.category;
  lbCounter.textContent = `${lightboxIndex + 1} / ${filteredItems.length}`;

  lbImage.classList.add("loading");
  lbLoader.classList.add("visible");

  const tempImg = new Image();
  tempImg.onload = () => {
    lbImage.src = img.src;
    lbImage.alt = img.title;
    lbImage.classList.remove("loading");
    lbLoader.classList.remove("visible");
  };
  tempImg.onerror = () => {
    lbImage.src = img.thumb;
    lbImage.alt = img.title;
    lbImage.classList.remove("loading");
    lbLoader.classList.remove("visible");
  };
  tempImg.src = img.src;
}

function showNext() {
  lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
  renderLightboxImage();
}

function showPrev() {
  lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
  renderLightboxImage();
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    applyFilter(btn.dataset.filter);
  });
});

lbClose.addEventListener("click", closeLightbox);
lbBackdrop.addEventListener("click", closeLightbox);
lbNext.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
lbPrev.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

document.addEventListener("keydown", (e) => {
  if (!isLightboxOpen) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

let touchStartX = 0;
lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
});
lightbox.addEventListener("touchend", (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 50) {
    delta < 0 ? showNext() : showPrev();
  }
});

buildGallery();
