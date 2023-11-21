// <!-- Initialize Swiper  for team section -->
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Initialize Swiper  for partners section
let partner = new Swiper(".swiperPartner", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

// for testimonials
let test = new Swiper(".testimonials-swipper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for service page 6
let servPagesixFirst = new Swiper(".serv-p-six-first", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// contact us form in  contact us page
// placeholder go up in focus

let formInputs = document.querySelectorAll(".custom-input .form-control");
formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value !== "") {
      this.parentElement.classList.add("has-data");
    } else {
      this.parentElement.classList.remove("has-data");
    }
  });
});
