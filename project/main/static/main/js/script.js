'use strict';

console.log("%cОстановитесь!","color: red; font-family:monospace; font-size: 60px");

console.log("%cЭта функция браузера предназначена для разработчиков. Если кто-то сказал вам скопировать и вставить что-то здесь, чтобы включить функцию  или «взломать» чей-то аккаунт, это мошенники."," font-family:serif; font-size: 20px");


/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}



/**
 * search toggle
 */

const searchContainer = document.querySelector("[data-search-wrapper]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});



/**
 * whishlist & cart toggle
 */

const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for (let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {

    let clickedElemDataValue = this.dataset.panelBtn;

    for (let i = 0; i < sidePanels.length; i++) {

      if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");
      } else {
        sidePanels[i].classList.remove("active");
      }

    }

  });
}



/**
 * back to top
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});



/**
 * product details page
 */

const productDisplay = document.querySelector("[data-product-display]");
const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

for (let i = 0; i < productThumbnails.length; i++) {
  productThumbnails[i].addEventListener("click", function () {
    productDisplay.src = this.src;
    productDisplay.classList.add("fade-anim");

    setTimeout(function () {
      productDisplay.classList.remove("fade-anim");
    }, 250);

  });
}











//              filter

const all = document.querySelector("#all");
const fresh = document.querySelector("#fresh");
const fish = document.querySelector("#fish");
const healthy = document.querySelector("#healthy");



all.addEventListener("click",() => {
  all.classList.add("active")
  fresh.classList.remove("active")
  fish.classList.remove("active")
  healthy.classList.remove("active")
})

fresh.addEventListener("click",() => {
  fresh.classList.add("active")
  all.classList.remove("active")
  fish.classList.remove("active")
  healthy.classList.remove("active")
})
fish.addEventListener("click",() => {
  fish.classList.add("active")
  all.classList.remove("active")
  fresh.classList.remove("active")
  healthy.classList.remove("active")
})
healthy.addEventListener("click",() => {
  healthy.classList.add("active")
  all.classList.remove("active")
  fish.classList.remove("active")
  fresh.classList.remove("active")
})