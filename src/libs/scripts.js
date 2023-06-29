import sliderBlog from '../libs/modules/slider-blog';
import fancybox from '../libs/modules/fancybox';
import slimSelect from '../libs/modules/slim-select.js';
document.addEventListener('DOMContentLoaded', function(e) {

    const sliderBlogTrue = document.querySelector('.js-slider-blog-init');
    const fancyboxTrue = document.querySelector('.js-fancybox-init');
    fancyboxTrue ? fancybox.init() : false;
    sliderBlogTrue ? sliderBlog.init() : false;
    slimSelect.init();

});