//var questionJSON = import('https://s3-eu-west-1.amazonaws.com/files.epwebsites.co.uk/yaml.json')


Vue.component('input-text', {
    data: function () {
        return {
            inputValue: '',
        }
    },
    props: ['label', 'id'],
    template: '<div class="form-group"><label :for="id"> {{ label }} </label><input v-model="inputValue" type="text" :id="id" class="form-control"></input></div>',
})

Vue.component('input-textarea', {
    data: function () {
        return {
            inputValue: '',
        }
    },
    props: ['label', 'id'],
    template: '<div class="form-group"><label :for="id"> {{ label }} </label><textarea v-model="inputValue" type="text" :id="id" class="form-control"></textarea></div>',
})

Vue.component('input-select', {
    data: function () {
        return {
            selectedValue: '',
        }
    },
    props: ['label', 'id', 'options'],
    template: `
    <div class="form-group">
        <label :for="id"> {{ label }} </label>
        <select v-model="selectedValue" :id="id" class="form-control">
            <option v-for="(option, key, index) in options" :value="key">
                {{ option }}
            </option>
        </select>
    </div>`
})

Vue.component('input-radio', {
    data: function () {
        return {
            selectedValue: '',
        }
    },
    props: ['label', 'name', 'options'],
    template: `
    <fieldset class="form-group">
        <legend class="col-form-label">{{ label }}</legend>
            <div class="form-check" v-for="option in options">
                <input type="radio" :name="name" :id="option.value" :value="option.value" class="form-check-input" v-model="selectedValue">
                <label :for="option.value" class="form-check-label"> {{ option.label }} </label>
            </div>
        </legend>
    </fieldset>`
})
{/* <input type="radio" id="contactChoice1"
name="contact" value="email">
<label for="contactChoice1">Email</label> */}



var app = new Vue({
    el: '#app',

    data: {
        questions: '',
        options: ''
    },
    computed: {

    },
    methods: {

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

    },
    created() {
        axios({
                method: 'GET',
                url: 'https://s3-eu-west-1.amazonaws.com/files.epwebsites.co.uk/yaml.json'
            })
            .then(response => {
                this.questions = response.data.inputs
                this.options = response.data.options
            })
    }

})