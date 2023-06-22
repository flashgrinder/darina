import Swiper, { Navigation } from 'swiper';
import  { Fancybox } from '@fancyapps/ui';

function init() {

    Swiper.use([Navigation]);

    const listSlider = Array.from(document.querySelectorAll(".js-slider-blog-init"));

    listSlider.forEach((item) => {
        let slider = item.querySelector('.js-slider-blog');
        let sliderFresh = item.querySelector('.js-slider-blog-fresh');

        const nextEl = item.querySelector('.js-slider-blog-next');
        const prevEl = item.querySelector('.js-slider-blog-prev');

        if ( slider ) {
            let sliderBlog = new Swiper(slider, {
                slidesPerView: 1.5,
                spaceBetween: 32,
                autoHeight: true,
                loop: false,
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 45,
                    }
                }
            });
        }
        if(sliderFresh) {
            let sliderBlogFresh = new Swiper(sliderFresh, {
                slidesPerView: 1.2,
                spaceBetween: 32,
                autoHeight: true,
                loop: false,
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    })

    Fancybox.bind("[data-fancybox='photo-blog']", {
        selector: '.js-fancybox-init .swiper-slide:not(.swiper-slide-duplicate)',
        backFocus: false,
        buttons: [
            "close"
        ],
        Thumbs: {
            type: "classic",
        },
    });

}
export default { init }