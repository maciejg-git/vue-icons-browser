import { h } from 'vue'
export default {
  $_icon: {
    name: "TabSearch",
    vendor: "Mdi",
    type: "",
    tags: ["tab","search"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tab-search"},
      [ 
        h(
          "path",
          {"d":"M7.5 11C5 11 3 13 3 15.5C3 16.38 3.25 17.21 3.69 17.9L.61 21L2 22.39L5.12 19.32C5.81 19.75 6.63 20 7.5 20C10 20 12 18 12 15.5S10 11 7.5 11M7.5 18C6.12 18 5 16.88 5 15.5S6.12 13 7.5 13 10 14.12 10 15.5 8.88 18 7.5 18M23 5V19C23 20.11 22.11 21 21 21H10.95C11.76 20.5 12.45 19.81 12.97 19H21V9H13V5H3V10.82C1.77 12 1 13.66 1 15.5V5C1 3.9 1.9 3 3 3H21C22.11 3 23 3.9 23 5Z"}
        ) 
      ]
    )
  }
}