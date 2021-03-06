import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistRemove",
    vendor: "Mdi",
    type: "",
    tags: ["playlist","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-playlist-remove"},
      [ 
        h(
          "path",
          {"d":"M2,6V8H14V6H2M2,10V12H11V10H2M14.17,10.76L12.76,12.17L15.59,15L12.76,17.83L14.17,19.24L17,16.41L19.83,19.24L21.24,17.83L18.41,15L21.24,12.17L19.83,10.76L17,13.59L14.17,10.76M2,14V16H11V14H2Z"}
        ) 
      ]
    )
  }
}