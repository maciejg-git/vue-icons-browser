import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageBroken",
    vendor: "Mdi",
    type: "",
    tags: ["image","broken"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-image-broken","innerHTML":"<path d='M19,3A2,2 0 0,1 21,5V11H19V13H19L17,13V15H15V17H13V19H11V21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19M21,15V19A2,2 0 0,1 19,21H19L15,21V19H17V17H19V15H21M19,8.5A0.5,0.5 0 0,0 18.5,8H5.5A0.5,0.5 0 0,0 5,8.5V15.5A0.5,0.5 0 0,0 5.5,16H11V15H13V13H15V11H17V9H19V8.5Z' />"},
    )
  }
}