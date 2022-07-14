import { h } from 'vue'
export default {
  $_icon: {
    name: "InboxRemove",
    vendor: "Mdi",
    type: "",
    tags: ["inbox","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-inbox-remove"},
      [ 
        h(
          "path",
          {"d":"M19 15H15C15 16.7 13.7 18 12 18S9 16.7 9 15H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M14.1 6.5L15.5 7.9L13.4 10L15.5 12.1L14.1 13.5L12 11.4L9.9 13.5L8.5 12.1L10.6 10L8.5 7.9L9.9 6.5L12 8.6L14.1 6.5Z"}
        ) 
      ]
    )
  }
}