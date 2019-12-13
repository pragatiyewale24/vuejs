<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  mounted() {
  axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => console.log(response))
}
};
</script>