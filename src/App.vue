<template>
  <v-app>
    <SideBar v-model="selected_page" @page-name="setPage"/>

    <v-main>
      <!-- <v-overlay absolute v-if="selected_page!=null"><router-view /></v-overlay> -->
      <router-view  class="absolute"/>
      <BHLensing/>
      <NightMountains/>
      <SocialSpeedDial/>
      <CopyRightFooter/>
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
    show_overlay:false,
    selected_page:null,
    comp_name:null
  }),
  methods:{
    test: function(e){
      console.log(e);
    },
    setPage:function(page){
      this.comp_name=page!=null?page.component:null
    }
  },
  mounted:()=>{
    console.log('%c ' + BatText,'display:flex;justify-content:center;text-align:center')
  }
};
</script>

<style>
.absolute{
  position:absolute;
  z-index: 2;
}

html { overflow-y: auto }
</style>
