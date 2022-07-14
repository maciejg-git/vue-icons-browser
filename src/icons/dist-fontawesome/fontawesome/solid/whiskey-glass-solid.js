import { h } from 'vue'
export default {
  $_icon: {
    name: "WhiskeyGlass",
    vendor: "Fa",
    type: "Solid",
    tags: ["whiskey","glass"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-whiskey-glass"},
      [ 
        h(
          "path",
          {"d":"M479.1 32H32.04C12.55 32-2.324 49.25 .3008 68.51L56.29 425.1C60.79 456.6 87.78 480 119.8 480h272.9c31.74 0 58.86-23.38 63.36-54.89l55.61-356.6C514.3 49.25 499.5 32 479.1 32zM422.7 224H89.49L69.39 96h373.2L422.7 224z"}
        ) 
      ]
    )
  }
}