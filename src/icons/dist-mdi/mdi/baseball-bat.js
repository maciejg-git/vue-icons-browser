import { h } from 'vue'
export default {
  name: "BaseballBat",
  vendor: "Mdi",
  tags: ["baseball","bat"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-baseball-bat","innerHTML":"<path d='M20,2C19.72,2 19.5,2.11 19.29,2.29L9.79,11.79C9.75,11.83 9.72,11.87 7.23,15.35L4,18.59L3.71,18.29C3.5,18.1 3.26,18 3,18C2.44,18 2,18.44 2,19C2,19.26 2.1,19.5 2.29,19.71L4.29,21.71C4.68,22.11 5.31,22.12 5.71,21.74C6.11,21.35 6.12,20.72 5.71,20.29L5.41,20L8.64,16.77L12.21,14.21L21.71,4.71C22.1,4.32 22.1,3.68 21.71,3.29L20.71,2.29C20.5,2.1 20.26,2 20,2M18.5,13A2.5,2.5 0 0,0 16,15.5A2.5,2.5 0 0,0 18.5,18A2.5,2.5 0 0,0 21,15.5A2.5,2.5 0 0,0 18.5,13Z' />"},
    )
  }
}