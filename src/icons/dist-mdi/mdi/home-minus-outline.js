import { h } from 'vue'
export default {
  name: "HomeMinusOutline",
  vendor: "Mdi",
  tags: ["home","minus","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-home-minus-outline","innerHTML":"<path d='M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M16 13V15H8V13H16Z' />"},
    )
  }
}