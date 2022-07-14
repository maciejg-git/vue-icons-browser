import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewDashboardVariantOutline",
    vendor: "Mdi",
    type: "",
    tags: ["view","dashboard","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-dashboard-variant-outline"},
      [ 
        h(
          "path",
          {"d":"M2 5V19H22V5H2M20 12H16V7H20V12M14 10H10V7H14V10M10 12H14V17H10V12M4 7H8V17H4V7M16 17V14H20V17H16Z"}
        ) 
      ]
    )
  }
}