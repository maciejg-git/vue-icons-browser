import { h } from 'vue'
export default {
  $_icon: {
    name: "BreadSlice",
    vendor: "Fa",
    type: "Solid",
    tags: ["bread","slice"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-bread-slice"},
      [ 
        h(
          "path",
          {"d":"M512 176.1C512 203 490.4 224 455.1 224H448v224c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V224H56.89C21.56 224 0 203 0 176.1C0 112 96 32 256 32S512 112 512 176.1z"}
        ) 
      ]
    )
  }
}