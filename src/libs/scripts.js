import sliderBlog from '../libs/modules/slider-blog';
import fancybox from '../libs/modules/fancybox';
import formSelect from '../libs/modules/slim-select.js';
document.addEventListener('DOMContentLoaded', function(e) {

    const sliderBlogTrue = document.querySelector('.js-slider-blog-init');
    const fancyboxTrue = document.querySelector('.js-fancybox-init');
    fancyboxTrue ? fancybox.init() : false;
    sliderBlogTrue ? sliderBlog.init() : false;
    formSelect.init();

    // Fake Input
    const fakeInput = document.querySelectorAll('.feedback-us__file input[type=file]');
    fakeInput.forEach(function(input) {
        input.addEventListener('change', function() {
            let file = this.files[0];
            this.closest('.feedback-us__file').querySelector('.feedback-us__file-btn').innerHTML = file.name;
        });
    });

    // Fake Input
    const fakeInput = document.querySelectorAll('.feedback-us__file input[type=file]');
    fakeInput.forEach(function(input) {
        input.addEventListener('change', function() {
            let file = this.files[0];
            this.closest('.feedback-us__file').querySelector('.feedback-us__file-btn').innerHTML = file.name;
        });
    });

});