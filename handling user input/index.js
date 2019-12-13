var app = new Vue({
  el: '#app',
  data: {
   message:'monadinfotech'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
     say: function (message) {
      alert(message)
    },
     warn: function (message, event) {
    // now we have access to the native event
    if (event) event.preventDefault()
    alert(message)
  }
  }
  
})

