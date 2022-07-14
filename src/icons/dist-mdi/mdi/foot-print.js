import { h } from 'vue'
export default {
  $_icon: {
    name: "FootPrint",
    vendor: "Mdi",
    type: "",
    tags: ["foot","print"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-foot-print"},
      [ 
        h(
          "path",
          {"d":"M16 2A2 2 0 1 1 14 4A2 2 0 0 1 16 2M12.04 3A1.5 1.5 0 1 1 10.54 4.5A1.5 1.5 0 0 1 12.04 3M9.09 4.5A1 1 0 1 1 8.09 5.5A1 1 0 0 1 9.09 4.5M7.04 6A1 1 0 1 1 6.04 7A1 1 0 0 1 7.04 6M14.53 12A2.5 2.5 0 0 0 17 9.24A2.6 2.6 0 0 0 14.39 7H11.91A6 6 0 0 0 6.12 11.4A2 2 0 0 0 6.23 12.8A6.8 6.8 0 0 1 6.91 15.76A6.89 6.89 0 0 1 6.22 18.55A1.92 1.92 0 0 0 6.3 20.31A3.62 3.62 0 0 0 10.19 21.91A3.5 3.5 0 0 0 12.36 16.63A2.82 2.82 0 0 1 11.91 15S11.68 12 14.53 12Z"}
        ) 
      ]
    )
  }
}