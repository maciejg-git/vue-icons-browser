import { h } from 'vue'
export default {
  name: "Bat",
  vendor: "Mdi",
  tags: ["bat"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-bat","innerHTML":"<path d='M0.75,8C0.75,8 5,7 8,9C8,9 8.5,12.75 10.5,12.75V11C10.5,11 11,12 12,12C13,12 13.5,11 13.5,11V12.75C15.5,12.75 16,9 16,9C19,7 23.25,8 23.25,8C21.25,9 21,12.5 21,12.5C17,12.5 17,15.75 17,15.75C12,14.75 12,18.5 12,18.5C12,18.5 12,14.75 7,15.75C7,15.75 7,12.5 3,12.5C3,12.5 2.75,9 0.75,8Z' />"},
    )
  }
}