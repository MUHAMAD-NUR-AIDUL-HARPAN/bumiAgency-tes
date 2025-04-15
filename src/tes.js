const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const heroImg = document.querySelector("div.relative.top-0");
let menuOpen = false;

mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  menuOpen = !menuOpen;
  mobileMenuButton.classList.toggle("open", menuOpen);
  if (menuOpen) {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    // Disable scrolling
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

// Tutup menu jika klik di luar tombol dan menu
document.addEventListener("click", event => {
  if (menuOpen && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    closeMenu();
  }
});

mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  menuOpen = !menuOpen;
  
  // Menghapus kelas 'closed' saat menu dibuka
  if (menuOpen) {
    mobileMenuButton.classList.remove("closed");
  } else {
    mobileMenuButton.classList.add("closed");
  }
  
  mobileMenuButton.classList.toggle("open", menuOpen);
  if (menuOpen) {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    // Disable scrolling
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

// ketika close humburger nya menjadi hitam
mobileMenuButton.addEventListener("click", event => {
  event.stopPropagation();
  menuOpen = !menuOpen;
  mobileMenuButton.classList.toggle("open", menuOpen);
  
  if (menuOpen) {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

function closeMenu() {
  menuOpen = false;
  mobileMenuButton.classList.remove("open");
  mobileMenu.classList.remove("translate-x-0", "opacity-100");
  mobileMenu.classList.add("translate-x-full", "opacity-0");
  document.body.style.overflow = "";
}



// dropdown  menu mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");
  const menus = document.querySelectorAll(".dropdown-menu");

  toggles.forEach((toggle, index) => {
    const menu = menus[index];
    const arrow = toggle.querySelector("svg");

    toggle.addEventListener("click", e => {
      e.stopPropagation();

      const isOpen = menu.classList.contains("show");

      // Tutup semua dulu
      menus.forEach(m => m.classList.remove("show"));
      document.querySelectorAll(".dropdown-toggle svg").forEach(icon => icon.classList.remove("rotate"));

      // Buka kalau sebelumnya tertutup
      if (!isOpen) {
        menu.classList.add("show");
        arrow.classList.add("rotate");
      }
    });
  });

  // Tutup kalau klik di luar
  document.addEventListener("click", () => {
    menus.forEach(menu => menu.classList.remove("show"));
    document.querySelectorAll(".dropdown-toggle svg").forEach(icon => icon.classList.remove("rotate"));
  });
});

// Event scroll untuk mengubah warna hamburger setelah melewati hero
window.addEventListener("scroll", () => {
  if (heroImg) {
    const heroHeight = heroImg.offsetHeight;
    if (window.scrollY > heroHeight) {
      mobileMenuButton.classList.add("after-hero");
    } else {
      mobileMenuButton.classList.remove("after-hero");
    }
  }
});

// menu dropdown *
// 
// Dropdown nav (desktop-menu)
  function closeAllDropdowns(scopeSelector) {
    document.querySelectorAll(`${scopeSelector} .dropdown-menu`).forEach(menu => {
      menu.classList.add("hidden");
    });
    document.querySelectorAll(`${scopeSelector} .dropdown-toggle`).forEach(toggle => {
      toggle.classList.remove("open");
    });
  }

  document.querySelectorAll("#desktop-menu .dropdown-toggle").forEach(toggle => {
    const dropdownName = toggle.getAttribute("data-dropdown");
    const currentDropdown = document.getElementById(`dropdown-${dropdownName}`);
    const parentItem = toggle.closest("li");

    if (!currentDropdown || !parentItem) return;

    parentItem.addEventListener("mouseenter", () => {
      closeAllDropdowns("#desktop-menu");
      currentDropdown.classList.remove("hidden");
      toggle.classList.add("open");
      currentDropdown.classList.add("animate-slideDown");
      setTimeout(() => {
        currentDropdown.classList.remove("animate-slideDown");
      }, 300);
    });

    parentItem.addEventListener("mouseleave", (e) => {
      const toElement = e.relatedTarget;

      // Cek apakah benar-benar keluar dari li dan dropdown
      if (!parentItem.contains(toElement)) {
        currentDropdown.classList.add("hidden");
        toggle.classList.remove("open");
      }
    });
  });


// Dropdown hover untuk nav
document.querySelectorAll("#desktop-menu .dropdown-toggle").forEach(toggle => {
  const dropdownName = toggle.getAttribute("data-dropdown");
  const currentDropdown = document.getElementById(`dropdown-${dropdownName}`);
  const parentItem = toggle.closest("li");

  if (!currentDropdown || !parentItem) return;

  // Saat pointer masuk ke <li>
  parentItem.addEventListener("pointerenter", () => {
    closeAllDropdowns("#desktop-menu");
    currentDropdown.classList.remove("hidden");
    toggle.classList.add("open");
    currentDropdown.classList.add("animate-slideDown");
    setTimeout(() => {
      currentDropdown.classList.remove("animate-slideDown");
    }, 300);
  });

  // Saat pointer benar-benar keluar dari <li> dan dropdown
  parentItem.addEventListener("pointerleave", (e) => {
    // Cek apakah benar-benar keluar dari area menu + dropdown
    const related = e.relatedTarget;
    if (!parentItem.contains(related)) {
      currentDropdown.classList.add("hidden");
      toggle.classList.remove("open");
    }
  });
});


// Dropdown untuk menu nav (hover)
document.querySelectorAll("#desktop-menu .dropdown-toggle").forEach(toggle => {
  const dropdownName = toggle.getAttribute("data-dropdown");
  const currentDropdown = document.getElementById(`dropdown-${dropdownName}`);
  const parentItem = toggle.closest("li");

  if (!currentDropdown || !parentItem) return;

  // Saat mouse masuk ke <li>
  parentItem.addEventListener("mouseenter", () => {
    closeAllDropdowns("#desktop-menu");
    currentDropdown.classList.remove("hidden");
    toggle.classList.add("open");
    currentDropdown.classList.add("animate-slideDown");
    setTimeout(() => {
      currentDropdown.classList.remove("animate-slideDown");
    }, 300);
  });

  // Saat mouse keluar dari <li>
  parentItem.addEventListener("mouseleave", () => {
    currentDropdown.classList.add("hidden");
    toggle.classList.remove("open");
  });
});




// dropdown section herro

// Menu Mobile*
document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua link di dalam nav
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      // Ambil target anchor dari atribut href
      const targetId = link.getAttribute("href");

      // Cari parent <li> dari link yang diklik
      const parentLi = link.parentElement;
      // Cari elemen <li> berikutnya yang diasumsikan berisi ikon (gambar Down)
      const sibling = parentLi.nextElementSibling;

      if (sibling) {
        const img = sibling.querySelector("img");
        // Jika gambar ada dan src mengandung "Down"
        if (img && img.getAttribute("src").includes("Down")) {
          // Tambahkan kelas rotasi untuk memulai animasi
          img.classList.add("rotate-up");
          // Hapus kelas rotasi setelah 300ms agar gambar kembali ke posisi semula
          setTimeout(() => {
            img.classList.remove("rotate-up");
          }, 300);
        }
      }

      // Cegah aksi default agar animasi terlihat sebelum navigasi
      event.preventDefault();
      // Setelah animasi selesai (300ms), lakukan scroll ke target
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  });
});

// button
const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {
  const icon = button.querySelector(".iconbtn"); // Ambil icon di dalam button

  button.addEventListener("click", () => {
    if (icon) {
      icon.classList.toggle("iconbtn-rotate");
    }
  });
});

// popup contact*
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const contactBtn = document.getElementById("contact-btn");
const overlay = document.getElementById("popup-overlay");

contactBtn.addEventListener("click", () => {
  popup.classList.add("open");
  overlay.style.display = "block"; // Aktifkan overlay
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  overlay.style.display = "none"; // Hilangkan overlay
});

// insight*
document.addEventListener("DOMContentLoaded", function () {
  // Swiper otomatis
  new Swiper(".swiper-auto", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  // Swiper manual dengan geser 1 card per navigasi dan loop infinity
  new Swiper(".swiper-manual", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: false, // aktifkan infinite loop
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// // slider section stories*
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.getElementById("newSlideContainer");
  const cards = document.querySelectorAll("#newSlideContainer > div");

  const progressContainer = document.getElementById("progressContainer");
  const segments = progressContainer.querySelectorAll(".segment");
  const activeIndicator = document.getElementById("activeIndicator");

  const prevButton = document.getElementById("newPrevButton");
  const nextButton = document.getElementById("newNextButton");

  let currentIndex = 0;
  let isScrolling = false;

  // Fungsi untuk mendapatkan lebar card
  function getCardWidth() {
    const gap = parseInt(getComputedStyle(slideContainer).gap) || 0;
    return cards[0].offsetWidth + gap;
  }

  let cardWidth = getCardWidth();

  // Fungsi untuk memperbarui card aktif
  function updateActiveCard() {
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.querySelectorAll("h3, p").forEach(el => {
          el.classList.remove("text-gray-400", "text-gray-100");
          el.classList.add("text-black");
        });
        card.querySelectorAll("img").forEach(img => {
          img.classList.remove("opacity-50");
        });
      } else {
        card.querySelectorAll("h3, p").forEach(el => {
          el.classList.remove("text-black");
          el.classList.add("text-gray-400");
        });
        card.querySelectorAll("img").forEach(img => {
          if (!img.classList.contains("opacity-50")) {
            img.classList.add("opacity-50");
          }
        });
      }
    });
  }

  // Fungsi untuk memperbarui indikator progress
  function updateProgressIndicator() {
    const containerRect = progressContainer.getBoundingClientRect();
    const activeSegment = segments[currentIndex];
    if (!activeSegment) return;

    segments.forEach(seg => {
      seg.classList.remove("border-black");
      seg.classList.add("border-gray-400");
    });

    activeSegment.classList.remove("border-gray-400");
    activeSegment.classList.add("border-black");

    const segmentRect = activeSegment.getBoundingClientRect();
    const leftOffset = segmentRect.left - containerRect.left;

    activeIndicator.style.left = `${leftOffset}px`;

    if (currentIndex === 0 && segmentRect.width > 400) {
      activeIndicator.style.width = `400px`;
      setTimeout(() => {
        activeIndicator.style.width = `${segmentRect.width}px`;
      }, 300);
    } else {
      activeIndicator.style.width = `${segmentRect.width}px`;
    }
  }

  // Fungsi untuk berpindah ke slide berikutnya
  function moveNext() {
    if (currentIndex < cards.length - 1 && !isScrolling) {
      isScrolling = true;
      currentIndex++;
      slideContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
      updateActiveCard();
      updateProgressIndicator();
      updateNavigationButtons(); // Update tombol navigasi
      setTimeout(() => {
        isScrolling = false;
      }, 400);
    }
  }

  // Fungsi untuk berpindah ke slide sebelumnya
  function movePrev() {
    if (currentIndex > 0 && !isScrolling) {
      isScrolling = true;
      currentIndex--;
      slideContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
      updateActiveCard();
      updateProgressIndicator();
      updateNavigationButtons(); // Update tombol navigasi
      setTimeout(() => {
        isScrolling = false;
      }, 400);
    }
  }

  // Fungsi untuk memperbarui status tombol navigasi
  function updateNavigationButtons() {
    // Tombol Previous
    if (currentIndex === 0) {
      prevButton.classList.add("opacity-50", "cursor-not-allowed");
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove("opacity-50", "cursor-not-allowed");
      prevButton.disabled = false;
    }

    // Tombol Next
    if (currentIndex === cards.length - 1) {
      nextButton.classList.add("opacity-50", "cursor-not-allowed");
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove("opacity-50", "cursor-not-allowed");
      nextButton.disabled = false;
    }
  }

  // Menangani perubahan ukuran layar
  window.addEventListener("resize", () => {
    cardWidth = getCardWidth();
  });

  // Inisialisasi tampilan awal
  updateActiveCard();
  updateProgressIndicator();
  updateNavigationButtons(); // Update status tombol di awal

  // Menambahkan event listener untuk tombol navigasi
  if (nextButton && prevButton) {
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);
  }
});

// button hero*
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("categoryContainer");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden"); // Tampilkan/sembunyikan input
  categoryContainer.classList.toggle("hidden"); // Sembunyikan/tampilkan kategori
  searchInput.focus(); // Fokus ke input saat ditampilkan
});

// swiper section partner*
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });
});

// your vision
document.querySelectorAll(".view-button").forEach(button => {
  button.addEventListener("click", function () {
    const img = this.querySelector(".arrow-icon");
    const text = this.querySelector(".view-text");

    img.classList.toggle("move-back");
    text.classList.toggle("text-blue-500"); // Mengubah warna teks saat diklik
  });
});

// header scroll
window.addEventListener("scroll", function () {
  const menuContainer = document.getElementById("menu-container");
  const logoImg = document.getElementById("logo-img");
  const siteTitle = document.getElementById("site-title");
  const heroSection = document.querySelector("div.relative.top-0");
  const footer = document.querySelector("footer");

  if (!menuContainer || !siteTitle || !heroSection || !footer) return;

  const heroHeight = heroSection.offsetHeight;
  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth < 640;
  const footerTop = footer.getBoundingClientRect().top;
  const threshold = window.innerHeight * 0.0;
  const isAtFooter = footerTop < threshold;
  const isPastHero = currentScrollY > heroHeight;

  const navLinks = document.querySelectorAll("#desktop-menu .nav-link");
  const navIcons = document.querySelectorAll(".nav-icon");

  if (isAtFooter) {
    // Footer terlihat
    menuContainer.classList.remove("fade-out", "text-white");
    menuContainer.classList.add("fade-in", "text-black");

    siteTitle.classList.remove("fade-out", "text-white");
    siteTitle.classList.add("fade-in", "text-black");

    navLinks.forEach(link => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });

    logoImg.classList.remove("fade-out");
    logoImg.classList.add("fade-in");

    navIcons.forEach(icon => {
      icon.style.filter = "brightness(0) saturate(100%)"; // hitam
    });

    return;
  }

  if (isPastHero) {
    // Sudah melewati hero, tapi belum sampai footer
    menuContainer.classList.remove("fade-in", "text-black");
    menuContainer.classList.add("fade-out", "text-white");

    siteTitle.classList.remove("fade-in", "text-black");
    siteTitle.classList.add("fade-out", "text-white");

    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });

    if (isMobile) {
      logoImg.classList.remove("fade-in", "icon-black");
      logoImg.classList.add("fade-out");
    } else {
      logoImg.classList.remove("fade-out");
      logoImg.classList.add("fade-in", "icon-black");
    }

    navIcons.forEach(icon => {
      icon.style.filter = ""; // reset
    });
  } else {
    // Masih di hero section
    menuContainer.classList.remove("fade-out", "text-black");
    menuContainer.classList.add("fade-in", "text-white");

    siteTitle.classList.remove("fade-out", "text-black");
    siteTitle.classList.add("fade-in", "text-white");

    navLinks.forEach(link => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });

    logoImg.classList.remove("fade-out", "icon-black");
    logoImg.classList.add("fade-in");

    navIcons.forEach(icon => {
      icon.style.filter = ""; // reset
    });
  }
});

// scroll*
const heroImge = document.querySelector("div.relative.top-0");
let heroHeight = heroImg ? heroImg.offsetHeight : 0;

// Gunakan passive event listener untuk scroll
window.addEventListener(
  "scroll",
  () => {
    // Jika tinggi hero sudah disimpan, gunakan heroHeight yang sudah di-cache
    if (window.scrollY > heroHeight) {
      mobileMenuButton.classList.add("after-hero");
    } else {
      mobileMenuButton.classList.remove("after-hero");
    }
  },
  { passive: true }
);

// fillter galery*
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Atur warna tombol: semua kembali ke text-secondary, kecuali tombol yang diklik jadi text-black
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("text-black");
      btn.classList.add("text-secondary");
    });
    button.classList.remove("text-secondary");
    button.classList.add("text-black");

    // Filter gallery
    const category = button.getAttribute("data-category");
    document.querySelectorAll(".gallery-item").forEach(item => {
      if (category === "All" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
