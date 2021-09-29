import { h } from 'vue'
export default {
  name: "Snail",
  vendor: "Mdi",
  tags: ["snail"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-snail","innerHTML":"<path d='M20.31 8.03L21.24 4.95C21.67 4.85 22 4.47 22 4C22 3.45 21.55 3 21 3S20 3.45 20 4C20 4.26 20.11 4.5 20.27 4.68L19.5 7.26L18.73 4.68C18.89 4.5 19 4.26 19 4C19 3.45 18.55 3 18 3S17 3.45 17 4C17 4.47 17.33 4.85 17.76 4.95L18.69 8.03C17.73 8.18 17 9 17 10V12.25C15.65 9.16 12.63 7 9.11 7C5.19 7 2 10.26 2 14.26C2 16.1 2.82 17.75 4.1 18.85L2.88 19C2.38 19.06 2 19.5 2 20C2 20.55 2.45 21 3 21L19.12 21C20.16 21 21 20.16 21 19.12V11.72C21.6 11.38 22 10.74 22 10C22 9 21.27 8.18 20.31 8.03M15.6 17.41L12.07 17.86C12.5 17.1 12.8 16.21 12.8 15.26C12.8 12.94 10.95 11.06 8.67 11.06C8.14 11.06 7.62 11.18 7.14 11.41C6.65 11.66 6.44 12.26 6.69 12.75C6.93 13.25 7.53 13.45 8.03 13.21C8.23 13.11 8.45 13.06 8.67 13.06C9.85 13.06 10.8 14.04 10.8 15.26C10.8 16.92 9.5 18.27 7.89 18.27C5.75 18.27 4 16.47 4 14.26C4 11.36 6.29 9 9.11 9C12.77 9 15.75 12.06 15.75 15.82C15.75 16.36 15.69 16.89 15.6 17.41Z' />"},
    )
  }
}