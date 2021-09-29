import { h } from 'vue'
export default {
  name: "CalculatorVariant",
  vendor: "Mdi",
  tags: ["calculator","variant"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-calculator-variant","innerHTML":"<path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M13 7.1L14.1 6L15.5 7.4L16.9 6L18 7.1L16.6 8.5L18 9.9L16.9 11L15.5 9.6L14.1 11L13 9.9L14.4 8.5L13 7.1M6.2 7.7H11.2V9.2H6.2V7.7M11.5 16H9.5V18H8V16H6V14.5H8V12.5H9.5V14.5H11.5V16M18 17.2H13V15.7H18V17.2M18 14.8H13V13.3H18V14.8Z' />"},
    )
  }
}