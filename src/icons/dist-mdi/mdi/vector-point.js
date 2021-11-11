import { h } from 'vue'
export default {
  name: "VectorPoint",
  vendor: "Mdi",
  type: "",
  tags: ["vector","point"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-vector-point","innerHTML":"<path d='M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z' />"},
    )
  }
}