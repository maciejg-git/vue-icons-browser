import { h } from 'vue'
export default {
  name: "Checkbook",
  vendor: "Mdi",
  tags: ["checkbook"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-checkbook","innerHTML":"<path d='M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z' />"},
    )
  }
}