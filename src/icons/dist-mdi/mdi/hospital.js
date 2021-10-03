import { h } from 'vue'
export default {
  name: "Hospital",
  vendor: "Mdi",
  tags: ["hospital"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-hospital","innerHTML":"<path d='M18 14H14V18H10V14H6V10H10V6H14V10H18' />"},
    )
  }
}