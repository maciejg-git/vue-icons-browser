<template>
  <icons-vendor :icons="icons" vendor="fontawesome" />
</template>

<script>
import { onMounted } from "vue"
import IconsVendor from "./IconsVendor.vue"
import { loadIcons } from "../icons";
import * as iconsData from "../icons/dist-fontawesome";
// import tags from "../icons/dist-fontawesome/tags.json";

export default {
  components: {
    IconsVendor,
  },
  setup(props, { emit }) {
    let icons = loadIcons(iconsData);

    onMounted(() => emit('fontawesome-loaded'))

    return {
      icons,
    };
  },
};
</script>

<style scoped>
</style>
