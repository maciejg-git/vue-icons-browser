import { h } from 'vue'
export default {
  name: "CardOff",
  vendor: "Mdi",
  tags: ["card","off"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-card-off","innerHTML":"<path d='M21.88 18.68L7.2 4H20C21.11 4 22 4.89 22 6V18C22 18.24 21.96 18.47 21.88 18.68M20.56 19.91L20.57 19.91L2.39 1.73L1.11 3L2.65 4.54C2.25 4.9 2 5.42 2 6V18C2 19.11 2.9 20 4 20H18.11L20.84 22.73L22.11 21.46L20.56 19.91Z' />"},
    )
  }
}