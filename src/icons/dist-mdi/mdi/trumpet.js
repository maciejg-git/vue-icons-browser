import { h } from 'vue'
export default {
  $_icon: {
    name: "Trumpet",
    vendor: "Mdi",
    type: "",
    tags: ["trumpet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-trumpet"},
      [ 
        h(
          "path",
          {"d":"M22 6C21 11 15 11 15 11H4C3 11 2 10 2 10H1V14H2C2 14 3 13 4 13H4.3C4.1 13.3 4 13.6 4 14V16C4 17.1 4.9 18 6 18H7V19H9V18H10V19H12V18H13V19H15V18H16C17.1 18 18 17.1 18 16V14C18 13.9 18 13.7 17.9 13.6C19.6 14.2 21.4 15.4 22 18H23V6H22M6 16.5C5.7 16.5 5.5 16.3 5.5 16V14C5.5 13.7 5.7 13.5 6 13.5H7V16.5H6M9 16.5V13.5H10V16.5H9M12 16.5V13.5H13V16.5H12M16.5 16C16.5 16.3 16.3 16.5 16 16.5H15V13.5H16C16.3 13.5 16.5 13.7 16.5 14V16M9 10H7V9H9V10M12 10H10V9H12V10M15 10H13V9H15V10Z"}
        ) 
      ]
    )
  }
}