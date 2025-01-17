// 바디안에 있으면 필요없으나 맨위에 걸어주면 꼭 써줘야함
window.onload = function () {
  // const 선언 이름(내가 만든) = new 새롭게 Swiper하라는 행동은
  //  "클라스.itemSwiper"로 하고 그내용은{}안에 쓴다
  const itemSwiper = new Swiper(".itemSwiper", {
    // 계속반복 자연스럽게 연결 없으면 앞으로 그냥가 자연스럽지 않음
    loop: true,
    autoplay: {
        // 속도
        delay: 500,
        // 멈추지 말라는 뜻
        disableOnInteraction: false,
      },
    // 슬라이드 보이기 모바일용
    slidesPerView: 1.5,
    // 이미지 공간띄우기
    spaceBetween: 20,
    // 반응순간의 공간 나누기
    breakpoints: {
      // 작은거 부터
      590: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      // 1050까지는 이렇게 보여짐 
      1050: {
        slidesPerView: 4,
      },
    },
  });
};
