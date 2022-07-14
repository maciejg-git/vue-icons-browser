import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveSearchOutline",
    vendor: "Mdi",
    type: "",
    tags: ["archive","search","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-archive-search-outline"},
      [ 
        h(
          "path",
          {"d":"M13.04 10C12.64 10.25 12.26 10.55 11.9 10.9C11.57 11.24 11.27 11.61 11.03 12H8V10.5C8 10.22 8.22 10 8.5 10H13.04M20 8H2V2H20V8M18 4H4V6H18V4M5 18V9H3V20H11.82C11.24 19.4 10.8 18.72 10.5 18H5M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z"}
        ) 
      ]
    )
  }
}