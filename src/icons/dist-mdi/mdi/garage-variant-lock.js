import { h } from 'vue'
export default {
  $_icon: {
    name: "GarageVariantLock",
    vendor: "Mdi",
    type: "",
    tags: ["garage","variant","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-garage-variant-lock"},
      [ 
        h(
          "path",
          {"d":"M21.8 16V14.5C21.8 13.1 20.4 12 19 12S16.2 13.1 16.2 14.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16M20.5 16H17.5V14.5C17.5 13.7 18.2 13.2 19 13.2S20.5 13.7 20.5 14.5V16M5 12H15.04C14.61 12.59 14.35 13.27 14.26 14H5V12M16.06 11H4V20H2V9L12 5L22 9V11.04C21.17 10.4 20.13 10 19 10C17.9 10 16.88 10.39 16.06 11M13 20H5V18H13V20M5 15H13.95C13.42 15.54 13.08 16.24 13 17H5V15Z"}
        ) 
      ]
    )
  }
}