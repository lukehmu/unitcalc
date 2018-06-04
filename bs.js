//var questionJSON = import('https://s3-eu-west-1.amazonaws.com/files.epwebsites.co.uk/yaml.json')


Vue.component('input-text', {
    data: function () {
      return {
        inputValue: '',
      }
    },
    props: ['label', 'newAtt'],
    template: '<div class="form-group"><label> {{ label }} </label><input v-model="inputValue" class="form-control"></input></div>',
    created() {
        this.inputValue = this.newAtt
    }
  })



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
          .then (response => {
              this.questions = response.data.inputs
              this.options = response.data.options
          })
    }

})