import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarImport",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","import"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-import"},
      [ 
        h(
          "path",
          {"d":"M12,12L8,16H11V22H13V16H16M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H9V20H5V9H19V20H15V22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4Z"}
        ) 
      ]
    )
  }
}