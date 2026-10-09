<template>
  <v-app>
    <SideBar v-model="selected_page" @page-name="setPage" />

    <v-main>
      <!-- <v-overlay absolute v-if="selected_page!=null"><router-view /></v-overlay> -->
      <router-view class="absolute" />
      <BHLensing />
      <NightMountains />
      <SocialSpeedDial />
      <CopyRightFooter />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue'
import CopyRightFooter from './components/CopyRightFooter.vue'
import SocialSpeedDial from './components/SocialSpeedDial.vue'
import NightMountains from './components/NightMountains.vue'
import BHLensing from './components/BHLensing.vue'
import BatText from '!raw-loader!./assets/batLogoASCII.txt'



export default {
  name: 'App',

  components: {
    SideBar,
    CopyRightFooter,
    SocialSpeedDial,
    NightMountains,
    BHLensing
  },

  data: () => ({
    show_overlay: false,
    selected_page: null,
    comp_name: null
  }),
  methods: {
    test: function (e) {
      console.log(e);
    },
    setPage: function (page) {
      this.comp_name = page != null ? page.component : null
    }
  },
  mounted: () => {
    console.log('%c ' + BatText, 'display:flex;justify-content:center;text-align:center')
  }
};
</script>

<style>
.absolute {
  position: absolute;
  z-index: 2;
}

/* Every content card scrolls inside the visible area (viewport minus footer and breathing room),
   so nothing is ever clipped on short laptop screens. */
.page-card {
  --page-gap: 16px;
  max-height: calc(100vh - 48px - 2 * var(--page-gap));
  max-height: calc(100dvh - 48px - 2 * var(--page-gap));
  overflow-y: auto;
}

.full-w {
  width: 100%;
}

/* Vuetify breaks card titles at any character ("Astro/physics"); break at word boundaries instead */
.v-card__title {
  word-break: normal;
}

.page-col {
  padding: var(--page-gap) !important;
}

@media (max-width: 959px) {
  .page-card {
    /* the app bar takes 48px on small screens */
    max-height: calc(100vh - 48px - 48px - 2 * var(--page-gap));
    max-height: calc(100dvh - 48px - 48px - 2 * var(--page-gap));
  }
}

html {
  overflow-y: auto
}
</style>
