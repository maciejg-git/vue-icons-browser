import { h } from 'vue'
export default {
  $_icon: {
    name: "CabinAFrame",
    vendor: "Mdi",
    type: "",
    tags: ["cabin","a","frame"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cabin-a-frame"},
      [ 
        h(
          "path",
          {"d":"M12 3L4 21H20L12 3M9 19H7.08L9 14.67V19M13 19H11V14H13V19M10.19 12L12 7.92L13.81 12H10.19M15 14.67L16.92 19H15V14.67Z"}
        ) 
      ]
    )
  }
}