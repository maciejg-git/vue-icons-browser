import { h } from 'vue'
export default {
  name: "BasketballHoop",
  vendor: "Mdi",
  tags: ["basketball","hoop"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-basketball-hoop","innerHTML":"<path d='M21,2H3A2,2 0 0,0 1,4V16A2,2 0 0,0 3,18H5V14H19V18H21A2,2 0 0,0 23,16V4A2,2 0 0,0 21,2M17,12H15V9H9V12H7V9A2,2 0 0,1 9,7H15A2,2 0 0,1 17,9V12M7,16V19.5L8,23L10,21L12,23L14,21L16,23L17,19.5V16H7Z' />"},
    )
  }
}