import { h } from 'vue'
export default {
  name: "Ip",
  vendor: "Mdi",
  tags: ["ip"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-ip","innerHTML":"<path d='M16,11H14V9H16V11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M10,7H8V17H10V7M12,17H14V13H16A2,2 0 0,0 18,11V9A2,2 0 0,0 16,7H12V17Z' />"},
    )
  }
}