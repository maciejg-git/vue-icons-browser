import { h } from 'vue'
export default {
  name: "TableLock",
  vendor: "Mdi",
  tags: ["table","lock"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-table-lock","innerHTML":"<path d='M21 16V15.5C21 14.12 19.88 13 18.5 13S16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16M20 16H17V15.5C17 14.67 17.67 14 18.5 14S20 14.67 20 15.5V16M13 18H12V14H14.26C14.54 13.21 15.04 12.5 15.69 12H12V8H18V11.05C18.17 11.03 18.33 11 18.5 11C19.03 11 19.53 11.1 20 11.26V6C20 4.89 19.11 4 18 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13V18M10 18H4V14H10V18M10 12H4V8H10V12Z' />"},
    )
  }
}