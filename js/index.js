
window.addEventListener('load',function(){new Swiper(".mySwiper", {
    direction: "vertical",
    // autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // loop: true,
    slidesPerView: "auto",
    preloadImages: true
})});