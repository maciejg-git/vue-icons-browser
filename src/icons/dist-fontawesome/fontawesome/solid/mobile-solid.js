import { h } from 'vue'
export default {
  $_icon: {
    name: "Mobile",
    vendor: "Fa",
    type: "Solid",
    tags: ["mobile"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-mobile"},
      [ 
        h(
          "path",
          {"d":"M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z"}
        ) 
      ]
    )
  }
}