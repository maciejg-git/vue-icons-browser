import { h } from 'vue'
export default {
  name: "Navigation",
  vendor: "Mdi",
  tags: ["navigation"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-navigation","innerHTML":"<path d='M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z' />"},
    )
  }
}