var vm = new Vue({
            el: '#app',
            data: {
               msg:'hello world'
               },
            
           beforeCreate() {
    console.log("before instance is intialized");
    console.log(this.msg); // undefined
  },
  created() {
    console.log("after an instance is intialized");
    console.log(this.msg); // Hello vue world
  },
   beforeMount() {
    console.log("Component is still not connected to dom");
  },
  mounted() {
    console.log("Component is connected to dom");
  },
  beforeUpdate() {
    console.log(this.$refs["h1-element"].textContent);
    //Hello Vue world
  },
  updated() {
    console.log(this.$refs["h1-element"].textContent);
    //Msg is updated
  },
   beforeDestroy() {
    console.log("before component is destroyed");
  },
  destroyed() {
    console.log("after a component is destroyed");
  }

         });