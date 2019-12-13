var app = new Vue({
  el: '#app',
  data: {
   message:'monadinfotech',
    counter: 0
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
  
})

