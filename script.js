const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// function for accordion1
let accordionn = document.getElementsByClassName("accordion1");

for (let i = 0; i < accordionn.length; i++) {
  accordionn[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-angle-down")) {
      this.childNodes[1].classList.remove("fa-angle-down");
      this.childNodes[1].classList.add("fa-angle-up");
    } else {
      this.childNodes[1].classList.remove("fa-angle-up");
      this.childNodes[1].classList.add("fa-angle-down");
    }
    {
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });


  // function for accordion
  let accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      if (this.childNodes[1].classList.contains("fa-plus")) {
        this.childNodes[1].classList.remove("fa-plus");
        this.childNodes[1].classList.add("fa-minus");
      } else {
        this.childNodes[1].classList.remove("fa-minus");
        this.childNodes[1].classList.add("fa-plus");
      }

      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
}}
