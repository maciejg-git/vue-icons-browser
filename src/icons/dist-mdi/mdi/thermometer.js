import { h } from 'vue'
export default {
  $_icon: {
    name: "Thermometer",
    vendor: "Mdi",
    type: "",
    tags: ["thermometer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-thermometer","innerHTML":"<path d='M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z' />"},
    )
  }
}