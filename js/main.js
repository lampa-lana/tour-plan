$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
  effect: "fade",
});
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },  
});

var menuButton = $(".menu-button");
menuButton.on('click', function () {
  console.log(' Клик по кнопке меню');
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass ("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass ("modal__dialog--visible");
  }

    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    $(document).on('keydown', function(e) {
		if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass ("modal__dialog--visible");              
		}
	})
});