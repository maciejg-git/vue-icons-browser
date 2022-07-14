import { h } from 'vue'
export default {
  $_icon: {
    name: "SubtitlesOutline",
    vendor: "Mdi",
    type: "",
    tags: ["subtitles","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-subtitles-outline"},
      [ 
        h(
          "path",
          {"d":"M20,4A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20M20,18V6H4V18H20M6,10H8V12H6V10M6,14H14V16H6V14M16,14H18V16H16V14M10,10H18V12H10V10Z"}
        ) 
      ]
    )
  }
}