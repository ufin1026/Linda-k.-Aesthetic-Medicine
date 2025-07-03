let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 }, // 可合併至 640
      1024: { slidesPerView: 3 },
    }
  });
  
  //SScroll Reveal
  const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true,
  });
  
  sr.reveal('.home-text, .box, .about-box, .brands-container, .treatments-container, .review-slider, .news-box, .order-form, .footer-box', {
    interval: 200
  });