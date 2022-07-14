import { h } from 'vue'
export default {
  $_icon: {
    name: "LeafMaple",
    vendor: "Mdi",
    type: "",
    tags: ["leaf","maple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-leaf-maple"},
      [ 
        h(
          "path",
          {"d":"M21.79,13L16,16L17,18L13,17.25V21H11V17.25L7,18L8,16L2.21,13L3.21,11.27L1.61,8L5.21,7.77L6.21,6L9.63,9.9L8,5H10L12,2L14,5H16L14.37,9.9L17.79,6L18.79,7.73L22.39,7.96L20.79,11.19L21.79,13Z"}
        ) 
      ]
    )
  }
}