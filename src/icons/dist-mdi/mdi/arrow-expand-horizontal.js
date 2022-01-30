import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","expand","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-arrow-expand-horizontal","innerHTML":"<path d='M9,11H15V8L19,12L15,16V13H9V16L5,12L9,8V11M2,20V4H4V20H2M20,20V4H22V20H20Z' />"},
    )
  }
}