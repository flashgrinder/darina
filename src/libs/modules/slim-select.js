import SlimSelect from 'slim-select'

function init() {

    const feedbackSelect = new SlimSelect({
        select: '.js-select-feedback',
        settings: {
            showSearch: false,
            searchHighlight: true,
        }
    });

}

export default { init }