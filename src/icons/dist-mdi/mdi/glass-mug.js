import { h } from 'vue'
export default {
  name: "GlassMug",
  vendor: "Mdi",
  type: "",
  tags: ["glass","mug"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-glass-mug","innerHTML":"<path d='M10,4V7H18V4H10M8,2H20L21,2V3L20,4V20L21,21V22H20L8,22H7V21L8,20V18.6L4.2,16.83C3.5,16.5 3,15.82 3,15V8A2,2 0 0,1 5,6H8V4L7,3V2H8M5,15L8,16.39V8H5V15Z' />"},
    )
  }
}