import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarFilterOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","filter","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-filter-outline"},
      [ 
        h(
          "path",
          {"d":"M19 3C20.1 3 21 3.9 21 5V11H19V9H5V19H15V21H4.8C4.4 20.9 4 20.7 3.6 20.4C3.3 20.1 3.1 19.7 3 19.2V5 4.8C3.1 4.4 3.3 4 3.6 3.6C3.9 3.3 4.3 3.1 4.8 3H6V1H8V3H16V1H18V3H19M19 7V5H5V7H19M19 21.4C19 21.5 19 21.7 18.9 21.8L18.7 22H18.3L18.1 21.9L17.1 20.9L17 20.7V17.6L14.1 13.9C14 13.7 14 13.6 14 13.4C14 13.3 14.1 13.2 14.2 13.1L14.5 13H21.5L21.8 13.1C21.9 13.2 22 13.3 22 13.4C22 13.5 22 13.7 21.9 13.8L19 17.5V21.4Z"}
        ) 
      ]
    )
  }
}