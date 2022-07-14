import { h } from 'vue'
export default {
  $_icon: {
    name: "UsbPort",
    vendor: "Mdi",
    type: "",
    tags: ["usb","port"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-usb-port"},
      [ 
        h(
          "path",
          {"d":"M8 2C6.9 2 6 2.9 6 4V12H5V16L9 20V22H15V20L19 16V12H18V4C18 2.9 17.11 2 16 2M8 4H16V12H8M9 7V9H11V7M13 7V9H15V7Z"}
        ) 
      ]
    )
  }
}