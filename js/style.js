window.onload = function () {
    // itemSwiper 코드
    const itemSwiper = new Swiper(".itemSwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        590: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        1050: {
          slidesPerView: 4,
        },
      },
    });
    //   비주얼 스와이퍼 코드
    const visualSwiper = new Swiper(".visualSwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
    });
  };
  