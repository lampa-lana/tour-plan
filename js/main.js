var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  keyboard: {
  enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },
  effect: "fade",
})