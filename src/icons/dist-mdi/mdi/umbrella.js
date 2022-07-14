import { h } from 'vue'
export default {
  $_icon: {
    name: "Umbrella",
    vendor: "Mdi",
    type: "",
    tags: ["umbrella"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-umbrella"},
      [ 
        h(
          "path",
          {"d":"M12,2A9,9 0 0,1 21,11H13V19A3,3 0 0,1 10,22A3,3 0 0,1 7,19V18H9V19A1,1 0 0,0 10,20A1,1 0 0,0 11,19V11H3A9,9 0 0,1 12,2Z"}
        ) 
      ]
    )
  }
}