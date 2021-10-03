import { h } from 'vue'
export default {
  name: "HomeRoof",
  vendor: "Mdi",
  tags: ["home","roof"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-home-roof","innerHTML":"<path d='M19 16H22L12 7L2 16H5L12 9.69L19 16M7 8.81V7H4V11.5L7 8.81Z' />"},
    )
  }
}