import { h } from 'vue'
export default {
  $_icon: {
    name: "DistributeVertical",
    vendor: "B",
    type: "",
    tags: ["distribute","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-distribute-vertical"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}
        ),
        h(
          "path",
          {"d":"M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"}
        ) 
      ]
    )
  }
}