import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailLock",
    vendor: "Mdi",
    type: "",
    tags: ["email","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-lock"},
      [ 
        h(
          "path",
          {"d":"M20.5,0A2.5,2.5 0 0,1 23,2.5V3A1,1 0 0,1 24,4V8A1,1 0 0,1 23,9H18A1,1 0 0,1 17,8V4A1,1 0 0,1 18,3V2.5A2.5,2.5 0 0,1 20.5,0M12,11L4,6V8L12,13L16.18,10.39C16.69,10.77 17.32,11 18,11H22V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H15V8C15,8.36 15.06,8.7 15.18,9L12,11M20.5,1A1.5,1.5 0 0,0 19,2.5V3H22V2.5A1.5,1.5 0 0,0 20.5,1Z"}
        ) 
      ]
    )
  }
}