import { h } from 'vue'
export default {
  name: "GreaterThan",
  vendor: "Mdi",
  tags: ["greater","than"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-greater-than","innerHTML":"<path d='M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z' />"},
    )
  }
}