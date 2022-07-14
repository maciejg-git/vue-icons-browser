import { h } from 'vue'
export default {
  $_icon: {
    name: "Seedling",
    vendor: "Fa",
    type: "Solid",
    tags: ["seedling"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-seedling"},
      [ 
        h(
          "path",
          {"d":"M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"}
        ) 
      ]
    )
  }
}