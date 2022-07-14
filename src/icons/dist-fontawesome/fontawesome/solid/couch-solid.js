import { h } from 'vue'
export default {
  $_icon: {
    name: "Couch",
    vendor: "Fa",
    type: "Solid",
    tags: ["couch"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-couch"},
      [ 
        h(
          "path",
          {"d":"M592 224C565.5 224 544 245.5 544 272V352H96V272C96 245.5 74.51 224 48 224S0 245.5 0 272v192C0 472.8 7.164 480 16 480h64c8.836 0 15.1-7.164 15.1-16L96 448h448v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16v-192C640 245.5 618.5 224 592 224zM128 272V320h384V272c0-38.63 27.53-70.95 64-78.38V160c0-70.69-57.31-128-128-128H191.1c-70.69 0-128 57.31-128 128L64 193.6C100.5 201.1 128 233.4 128 272z"}
        ) 
      ]
    )
  }
}