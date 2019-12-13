<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test />
    <modal />
  </div>
</template>
<script>
import Test from './components/Test.vue'
import Modal from './components/Modal.vue'
export default {
  name: 'app',
  components: {
    Test,
    Modal
  }
}
</script>
