import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarWeekend",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","weekend"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-weekend"},
      [ 
        h(
          "path",
          {"d":"M19,20V9H5V20H19M16,2H18V4H19A2,2 0 0,1 21,6V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2M7,18V11H9V18H7M15,11H17V18H15V11Z"}
        ) 
      ]
    )
  }
}