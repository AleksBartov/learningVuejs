new Vue ({
    el: "#app",
    data: {
        correntView: 'first'
    },
    components: {
        first: {
            template: "#first"
        },
        second: {
            template: "#second"
        },
        third: {
            template: "#third"
        },
        fourth: {
            template: "#fourth"
        }
    },
    methods: {
        switchView: function (view) {
            this.correntView = view
        }
    }
})
