import { createApp, provide } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "tailwindcss/tailwind.css";

import { plugin } from "vue-component-tailwind";
import { registerIcon } from "./vue";
import "./styles/components.css";
import "vue-component-tailwind/dist/style.css";

import {
  BBootstrapFill,
  BGithub,
  BDownload,
  BThreeDotsVertical,
  BList,
  BThreeDots,
  BMoon,
  BSun,
} from "./icons/dist-bootstrap";
import { MdiMaterialDesign } from "./icons/dist-mdi";
import { FaFontAwesomeBrand, FaBarsSolid } from "./icons/dist-fontawesome";
import { MdiContentCopy, MdiCheckBold } from "./icons/dist-mdi";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "./styles/github.css";
import "./styles/night-owl.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

let app = createApp(App);

registerIcon(app, [
  // logos
  BBootstrapFill,
  MdiMaterialDesign,
  FaFontAwesomeBrand,
  BGithub,
  // clipboard
  MdiContentCopy,
  MdiCheckBold,
  // download
  BDownload,
  // menu
  BThreeDotsVertical,
  BList,
  FaBarsSolid,
  BThreeDots,
  // navbar
  BMoon,
  BSun,
]);

app.provide("hljs", hljs);
app.use(plugin);
app.use(createPinia());
app.mount("#app");
