"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

// wa//
function submitToWhatsApp() {
  // Ambil data dari form
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const projector = document.getElementById("projector").value;
  const screen = document.getElementById("screen").value;
  const notes = document.getElementById("notes").value.trim();

  // Validasi data (pastikan semua field yang required terisi)
  if (!name || !address || !phone || !date || !projector || !screen) {
    alert("Mohon lengkapi semua field yang diperlukan.");
    return;
  }

  // Buat pesan untuk WhatsApp
  const message = `Halo, saya ingin menyewa proyektor:
Nama: ${name}
Alamat: ${address}
Nomor Telepon: ${phone}
Tanggal Sewa: ${date}
Jenis Proyektor: ${projector}
Jenis Screen: ${screen}
Catatan Tambahan: ${notes || "Tidak ada catatan tambahan."}`;

  // Encode pesan agar sesuai dengan URL
  const encodedMessage = encodeURIComponent(message);

  // Nomor WhatsApp tujuan
  const whatsappNumber = "087857122888";

  // Redirect ke WhatsApp
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank"
  );
}
