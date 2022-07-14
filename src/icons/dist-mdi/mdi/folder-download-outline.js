import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderDownloadOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","download","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-download-outline"},
      [ 
        h(
          "path",
          {"d":"M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M14 9H16V13H19L15 17L11 13H14Z"}
        ) 
      ]
    )
  }
}