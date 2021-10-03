import { h } from 'vue'
export default {
  name: "Backburger",
  vendor: "Mdi",
  tags: ["backburger"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-backburger","innerHTML":"<path d='M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z' />"},
    )
  }
}