import { h } from 'vue'
export default {
  $_icon: {
    name: "FileUploadOutline",
    vendor: "Mdi",
    type: "",
    tags: ["file","upload","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-upload-outline"},
      [ 
        h(
          "path",
          {"d":"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"}
        ) 
      ]
    )
  }
}