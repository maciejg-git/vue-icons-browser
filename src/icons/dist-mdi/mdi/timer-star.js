import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerStar",
    vendor: "Mdi",
    type: "",
    tags: ["timer","star"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-star"},
      [ 
        h(
          "path",
          {"d":"M15 3H9V1H15V3M13 19C13 20.03 13.26 21 13.71 21.83C13.16 21.94 12.59 22 12 22C7.03 22 3 17.97 3 13S7.03 4 12 4C14.12 4 16.07 4.74 17.62 6L19.04 4.56C19.55 5 20 5.46 20.45 5.97L19.03 7.39C20.26 8.93 21 10.88 21 13C21 13.12 21 13.23 21 13.35C20.36 13.13 19.7 13 19 13C15.69 13 13 15.69 13 19M13 7H11V14H13V7M23 17.89L20.11 17.64L19 15L17.87 17.64L15 17.89L17.18 19.77L16.5 22.58L19 21.09L21.45 22.58L20.8 19.77L23 17.89Z"}
        ) 
      ]
    )
  }
}