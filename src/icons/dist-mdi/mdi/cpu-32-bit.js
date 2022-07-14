import { h } from 'vue'
export default {
  $_icon: {
    name: "Cpu32Bit",
    vendor: "Mdi",
    type: "",
    tags: ["cpu","32","bit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cpu-32-bit"},
      [ 
        h(
          "path",
          {"d":"M9,3V5H7A2,2 0 0,0 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11H21V9H19V7A2,2 0 0,0 17,5H15V3H13V5H11V3M7,9H10.5A1,1 0 0,1 11.5,10V14A1,1 0 0,1 10.5,15H7V13.5H10V12.75H8.5V11.25H10V10.5H7M12.5,9H16A1,1 0 0,1 17,10V11.75A1,1 0 0,1 16,12.75H14V13.5H17V15H12.5V12.25A1,1 0 0,1 13.5,11.25H15.5V10.5H12.5"}
        ) 
      ]
    )
  }
}