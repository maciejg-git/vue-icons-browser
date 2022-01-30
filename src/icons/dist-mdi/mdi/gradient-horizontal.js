import { h } from 'vue'
export default {
  $_icon: {
    name: "GradientHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["gradient","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-gradient-horizontal","innerHTML":"<path d='M9 13V11H11V13M11 15V13H13V15M11 11V9H13V11M9 9V7H11V9M9 17V15H11V17M3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5M18 15V17H16V15M18 11V13H16V11M18 7V9H16V7M11 5V7H13V5H15V7H13V9H15V11H13V13H15V15H13V17H15V19H13V17H11V19H5V5Z' />"},
    )
  }
}