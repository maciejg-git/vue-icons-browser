import { ref, markRaw } from "vue";
import useSettings from "./composition/use-settings";

let settings = useSettings();

let toKebab = (s) => {
  return s
    .replace(/([A-Z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

export let loadIcons = (icons) => {
  for (let icon in icons) {
    markRaw(icons[icon]);
    icons[icon].selected = ref(false);
    icons[icon].getIconName = getIconName;
    icons[icon].visible = ref(true);
  }

  let iconsArray = Object.values(icons);

  return iconsArray;
};

export let getIconName = function () {
  let i = `${settings.vendorPrefix ? this.$_icon.vendor : ""}${this.$_icon.name}${
    settings.originalNames ? "" : this.$_icon.type
  }`;
  if (settings.kebabCase) return toKebab(i);
  return i;
};
