import SlimSelect from 'slim-select'

function init() {

    const feedbackSelect = new SlimSelect({
        select: document.querySelector('.js-select-feedback'),
        settings: {
            showSearch: false,
            searchHighlight: true,
            // placeholderText: '<strong>Отдел</strong>',
        }
    });

}

export default { init }