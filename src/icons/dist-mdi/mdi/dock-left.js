import { h } from 'vue'
export default {
  name: "DockLeft",
  vendor: "Mdi",
  tags: ["dock","left"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-dock-left","innerHTML":"<path d='M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z' />"},
    )
  }
}