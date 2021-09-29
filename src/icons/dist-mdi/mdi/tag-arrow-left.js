import { h } from 'vue'
export default {
  name: "TagArrowLeft",
  vendor: "Mdi",
  tags: ["tag","arrow","left"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-tag-arrow-left","innerHTML":"<path d='M21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.53 2.21 12.04 2.59 12.41L3 12.81C3.9 12.27 4.94 12 6 12C9.31 12 12 14.69 12 18C12 19.06 11.72 20.09 11.18 21L11.58 21.4C11.95 21.78 12.47 22 13 22S14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13S21.79 11.96 21.41 11.58M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7M5 19H9V17H5V15L2 18L5 21V19Z' />"},
    )
  }
}