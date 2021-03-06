import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarWeekBeginOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","week","begin","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-week-begin-outline"},
      [ 
        h(
          "path",
          {"d":"M19 4C20.11 4 21 4.89 21 6V20C21 21.11 20.11 22 19 22H5C3.89 22 3 21.1 3 20V6C3 4.89 3.9 4 5 4H6V2H8V4H16V2H18V4H19M19 20V10H5V20H19M19 8V6H5V8H19M7 12H9V18H7V12"}
        ) 
      ]
    )
  }
}