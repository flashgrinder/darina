import  { Fancybox } from '@fancyapps/ui';

function init() {

    Fancybox.bind("[data-fancybox='photo-blog']", {
        selector: '.js-fancybox-init .swiper-slide:not(.swiper-slide-duplicate)',
        Thumbs: {
            type: "classic",
        },
    });

}
export default { init }