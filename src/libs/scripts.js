import gsap from 'gsap';
import sliderBlog from '../libs/modules/slider-blog';
document.addEventListener('DOMContentLoaded', function(e) {

    gsap.config({
        nullTargetWarn: true,
        force3D: true
    });

    const sliderBlogSliderTrue = document.querySelector('.js-slider-blog-init');
    sliderBlogSliderTrue ? sliderBlog.init() : false;
});