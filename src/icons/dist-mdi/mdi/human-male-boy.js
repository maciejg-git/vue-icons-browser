import { h } from 'vue'
export default {
  $_icon: {
    name: "HumanMaleBoy",
    vendor: "Mdi",
    type: "",
    tags: ["human","male","boy"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-human-male-boy"},
      [ 
        h(
          "path",
          {"d":"M7.5,2A2,2 0 0,1 9.5,4A2,2 0 0,1 7.5,6A2,2 0 0,1 5.5,4A2,2 0 0,1 7.5,2M6,7H9A2,2 0 0,1 11,9V14.5H9.5V22H5.5V14.5H4V9A2,2 0 0,1 6,7M14.5,12A2,2 0 0,1 16.5,10A2,2 0 0,1 18.5,12A2,2 0 0,1 16.5,14A2,2 0 0,1 14.5,12M13.5,15H19.5V19H18V22H15V19H13.5V15Z"}
        ) 
      ]
    )
  }
}