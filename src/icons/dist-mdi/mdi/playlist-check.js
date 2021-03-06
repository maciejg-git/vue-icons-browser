import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistCheck",
    vendor: "Mdi",
    type: "",
    tags: ["playlist","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-playlist-check"},
      [ 
        h(
          "path",
          {"d":"M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z"}
        ) 
      ]
    )
  }
}