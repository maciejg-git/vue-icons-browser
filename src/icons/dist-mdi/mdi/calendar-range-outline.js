import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarRangeOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","range","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-range-outline"},
      [ 
        h(
          "path",
          {"d":"M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14H17V12H15V14M11,14H13V12H11V14Z"}
        ) 
      ]
    )
  }
}