import { h } from 'vue'
export default {
  name: "Plus",
  vendor: "Mdi",
  tags: ["plus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-plus","innerHTML":"<path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />"},
    )
  }
}