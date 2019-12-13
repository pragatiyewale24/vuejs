var app = new Vue({
  el: '#app',
  data: {
   message:'monadinfotech'
  },
  methods: {
    handleSubmit: function () {
      alert('prevent event  modifier call')
    },
    handleClick: function () {
      alert('HandleClick method call')
    }
  }
  
})

