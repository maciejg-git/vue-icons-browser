import { h } from 'vue'
export default {
  name: "VideoImage",
  vendor: "Mdi",
  tags: ["video","image"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-video-image","innerHTML":"<path d='M17,10.5L21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M10.91,9.55L9.2,11.82L10.5,13.55L9.77,14.09L7.73,11.36L5,15H15L10.91,9.55Z' />"},
    )
  }
}