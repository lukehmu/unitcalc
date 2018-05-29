var app = new Vue({
    el: '#app',
    data: {
        totalUnits: 2.27,
        pricePerUnit: '£2.20',
        cost: 5,
        abv: 4,
        volume: {
            name: 'Pint',
            value: 568
        },
        selectedVolume: [{
                name: 'Pint',
                value: 568
            },
            {
                name: 'Schooner',
                value: 379
            },
            {
                name: 'Half pint',
                value: 256
            },
            {
                name: 'Can',
                value: 330
            },
            {
                name: 'Small wine',
                value: 125
            },
            {
                name: 'Medium wine',
                value: 175
            },
            {
                name: 'Large wine',
                value: 250
            },
            {
                name: 'Shot',
                value: 25
            },
            {
                name: 'Double',
                value: 50
            }
        ],
        drinkList: [],
        drinkName: 'My first beer',
        showTable: false,
        showDrinkNameInput: false
    },
    computed: {
        addUnits: function () {
            total = []
            Object.entries(this.drinkList).forEach(([key, drink]) => {
                total.push(drink.units) // the value of the current key.
            });
            return total.reduce(function(total, num){ return total + num }, 0);
        }
    },
    methods: {
        calculate: function () {
            this.totalUnits = Number(((this.volume.value * this.abv) / 1000).toFixed(2))
            this.pricePerUnit = '£' + (this.cost / this.totalUnits).toFixed(2)
            this.showDrinkNameInput = true
        },
        addDrinkToList: function () {
            this.drinkList.push({ name: this.drinkName,pricePerUnit: this.pricePerUnit,volume: this.volume.name, units: this.totalUnits })
            this.drinkName = ''
            this.showTable = true
        },
        clearDrinkList: function () {
            this.drinkList = []
            this.showTable = false
            localStorage.removeItem('drinksList')
        }
    },
    mounted() {
        console.log('App mounted')
        if (localStorage.getItem('drinksList')) {
            this.drinkList = JSON.parse(localStorage.getItem('drinksList'))
            this.showTable = true
            this.showDrinkNameInput = true
            this.drinkName = ''
        }
    },
    watch: {
        drinkList: {
            handler() {
                console.log('drinks changed!')
                localStorage.setItem('drinksList', JSON.stringify(this.drinkList))
            },
            deep: true,
        },
    },

})