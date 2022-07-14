import { h } from 'vue'
export default {
  $_icon: {
    name: "Screwdriver",
    vendor: "Fa",
    type: "Solid",
    tags: ["screwdriver"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-screwdriver"},
      [ 
        h(
          "path",
          {"d":"M128 278.6l-117.1 116.9c-14.5 14.62-14.5 38.29 0 52.79l52.75 52.75c14.5 14.5 38.17 14.5 52.79 0L233.4 384c29.12-29.12 29.12-76.25 0-105.4S157.1 249.5 128 278.6zM447.1 0l-128 96L320 158L237 241.1C243.8 245.4 250.3 250.1 256 256c5.875 5.75 10.62 12.25 14.88 19L353.1 192h61.99l95.1-128L447.1 0z"}
        ) 
      ]
    )
  }
}