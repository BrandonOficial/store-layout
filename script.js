const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  console.log("Scrolling!");
  header.classList.toggle("sticky", this.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
});
