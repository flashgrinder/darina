module.exports = {
	filename: "_smart-grid",
	outputStyle: 'scss',
	columns: 12,
	offset: "20px",
	container: {
		maxWidth: "1782px",
		fields: "20px"
	},
	breakPoints: {
		large: {
            width: '1200px',
        },
        tablet: {
                width: '1024px'
        },
        tabletSM: {
                width: '992px'
        },
        mobile: {
                width: "768px",
                offset: "15px",
                fields: "15px"
        },
        mobileXS: {
                width: "576px",
                fields: "10px"
        },
        mobileXSS: {
                width: "400px"
        }
	},
	mobileFirst: false
};