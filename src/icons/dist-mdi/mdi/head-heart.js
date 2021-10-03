import { h } from 'vue'
export default {
  name: "HeadHeart",
  vendor: "Mdi",
  tags: ["head","heart"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-head-heart","innerHTML":"<path d='M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M17 8.83C17 10.37 15.64 11.6 13.58 13.47L13 14L12.42 13.47C10.36 11.6 9 10.37 9 8.83C9 7.63 9.96 6.64 11.16 6.63H11.2C11.89 6.63 12.55 6.94 13 7.46C13.45 6.94 14.11 6.63 14.8 6.63C16 6.62 17 7.59 17 8.79V8.83Z' />"},
    )
  }
}