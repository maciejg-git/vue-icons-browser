import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDecisionAuto",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","decision","auto"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-decision-auto"},
      [ 
        h(
          "path",
          {"d":"M12,5H9L13,1L17,5H14V9.43C13.25,9.89 12.58,10.46 12,11.12V5M10.4,15H8.5L7.8,13H4.6L3.9,15H2L5.2,6H7.2L10.4,15M7.35,11.65L6.2,8L5.05,11.65H7.35M23,11L19,7V10C15.39,9.85 12.31,12.57 12,16.17C10.44,16.72 9.62,18.44 10.17,20C10.72,21.56 12.44,22.38 14,21.83C15.56,21.27 16.38,19.56 15.83,18C15.53,17.14 14.85,16.47 14,16.17C14.47,12.17 18.47,11.97 18.95,11.97V14.97L23,11Z"}
        ) 
      ]
    )
  }
}