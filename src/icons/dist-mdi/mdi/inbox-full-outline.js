import { h } from 'vue'
export default {
  $_icon: {
    name: "InboxFullOutline",
    vendor: "Mdi",
    type: "",
    tags: ["inbox","full","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-inbox-full-outline","innerHTML":"<path d='M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19M5 19H9.4C8.79 18.47 8.35 17.78 8.13 17H5V19M19 19V17H15.87C15.65 17.78 15.21 18.47 14.6 19H19M19 15V5H5V15H10V16C10 18.67 14 18.67 14 16V15H19M7 7H17V9H7V7M17 11V13H7V11H17Z' />"},
    )
  }
}