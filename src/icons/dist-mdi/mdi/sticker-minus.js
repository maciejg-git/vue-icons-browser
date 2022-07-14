import { h } from 'vue'
export default {
  $_icon: {
    name: "StickerMinus",
    vendor: "Mdi",
    type: "",
    tags: ["sticker","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sticker-minus"},
      [ 
        h(
          "path",
          {"d":"M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M8 11H16V13H8V11M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z"}
        ) 
      ]
    )
  }
}