import { h } from 'vue'
export default {
  name: "BookSettings",
  vendor: "Mdi",
  tags: ["book","settings"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-book-settings","innerHTML":"<path d='M20 2V18C20 19.11 19.11 20 18 20H6C4.89 20 4 19.11 4 18V2C4 .895 4.89 0 6 0H7V7L9.5 5.5L12 7V0H18C19.1 0 20 .89 20 2M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z' />"},
    )
  }
}