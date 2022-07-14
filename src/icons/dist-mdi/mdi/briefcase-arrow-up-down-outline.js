import { h } from 'vue'
export default {
  $_icon: {
    name: "BriefcaseArrowUpDownOutline",
    vendor: "Mdi",
    type: "",
    tags: ["briefcase","arrow","up","down","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-briefcase-arrow-up-down-outline"},
      [ 
        h(
          "path",
          {"d":"M10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V13.53C21.42 13 20.75 12.6 20 12.34V8H4V19H12.08C12.2 19.72 12.45 20.39 12.8 21H4C2.9 21 2 20.11 2 19V8C2 6.9 2.9 6 4 6H8V4C8 2.9 8.9 2 10 2M14 6V4H10V6H14M17.5 19H19V15H21V19H22.5L20 22L17.5 19M17 17V21H15V17H13.5L16 14L18.5 17H17Z"}
        ) 
      ]
    )
  }
}