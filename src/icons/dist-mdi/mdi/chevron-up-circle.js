import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUpCircle",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","up","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-up-circle"},
      [ 
        h(
          "path",
          {"d":"M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7.4,15.4L12,10.8L16.6,15.4L18,14L12,8L6,14L7.4,15.4Z"}
        ) 
      ]
    )
  }
}