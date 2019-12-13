Vue.component('todo-item',{
	template: '<li>This is todo list</li>'

})

var app = new Vue({
  el: '#app',
  data: {
   message:'monadinfotech'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
  
})

