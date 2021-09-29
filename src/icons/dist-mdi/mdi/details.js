import { h } from 'vue'
export default {
  name: "Details",
  vendor: "Mdi",
  tags: ["details"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-details","innerHTML":"<path d='M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z' />"},
    )
  }
}