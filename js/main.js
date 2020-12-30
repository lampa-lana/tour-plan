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
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact",
          email: "Your email address must be in the format of name@domain.com",
        },
        emailNews: {
          required: "We need your email address to contact",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone to contact",
          phone: "Your phone  must be in the format of +7(999) 999-99-99",
          minlength: "Your phone must be at least 10 digits",
        },
      },
    });
    
  });
  $(function(){  
    $(".input__phone").mask("+7(999) 999-99-99", {
      } );
  }); 
   AOS.init();
});