const SLIDE_WRAP = new Swiper('.Slide_Wrap', {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    parallax: true,
    speed: 800,

    slideActiveClass: 'on',
});

const MAIN_VS_LEFT_BUTTON = document.querySelector('.Main_Slide .left');
MAIN_VS_LEFT_BUTTON.addEventListener('click', () => {
    SLIDE_WRAP.slidePrev();
});

const MAIN_VS_RIGHT_BUTTON = document.querySelector('.Main_Slide  .right');
MAIN_VS_RIGHT_BUTTON.addEventListener('click', () => {
    SLIDE_WRAP.slideNext();
});

$('.notice').on('click', function () {
    $('.toggle').toggleClass('on');
    $(this).toggleClass('on');
})