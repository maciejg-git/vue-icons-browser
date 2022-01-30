import { h } from 'vue'
export default {
  $_icon: {
    name: "TextLong",
    vendor: "Mdi",
    type: "",
    tags: ["text","long"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-text-long","innerHTML":"<path d='M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z' />"},
    )
  }
}