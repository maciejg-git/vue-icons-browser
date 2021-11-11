import { h } from 'vue'
export default {
  name: "WallSconce",
  vendor: "Mdi",
  type: "",
  tags: ["wall","sconce"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-wall-sconce","innerHTML":"<path d='M11,4L7,13H19L15,4H11M4,14V22H6V19H14V14H12V17H6V14H4Z' />"},
    )
  }
}