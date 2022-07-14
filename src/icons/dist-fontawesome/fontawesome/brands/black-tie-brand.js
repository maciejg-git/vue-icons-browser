import { h } from 'vue'
export default {
  $_icon: {
    name: "BlackTie",
    vendor: "Fa",
    type: "Brand",
    tags: ["black","tie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-black-tie"},
      [ 
        h(
          "path",
          {"d":"M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"}
        ) 
      ]
    )
  }
}