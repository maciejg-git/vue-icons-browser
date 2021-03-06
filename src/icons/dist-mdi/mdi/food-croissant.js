import { h } from 'vue'
export default {
  $_icon: {
    name: "FoodCroissant",
    vendor: "Mdi",
    type: "",
    tags: ["food","croissant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-food-croissant"},
      [ 
        h(
          "path",
          {"d":"M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z"}
        ) 
      ]
    )
  }
}