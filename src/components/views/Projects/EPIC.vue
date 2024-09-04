<template>
  <v-container>
      <v-row>
          <v-col cols="12">
              <v-card class="mx-auto">
                  <v-container fluid>
                      <v-row align="center" justify="center">
                          <v-col cols="12" align-self="center" class="xjets_center">
                              <v-img :src="require('../../../assets/epic-sample.jpeg')"      />
                          </v-col>
                      </v-row>
                  </v-container>

                  <v-card-title>
                      Real-time radio imaging to detect Fast Radio Bursts
                  </v-card-title>
                  <v-card-subtitle>
                      A computationally efficient approach
                  </v-card-subtitle>
                  <v-card-text>
                      Modern radio astronomy has entered an era where telescopes are being built with hundreds to thousands of antennas to achieve the derired performance. For example, studies of universe's evolution using the redshifted 21 cm line are propelling arrays towards large fields of view with high sensitivity. Transient phenomena like FRBs have added a real-time processing constraint. Traditional telescopes operate by computing the pair-wise antenna cross-power correlations to image the sky. While advances in GPUs allowed this method to work on arrays with a few hundred antennas, next generation telescopes with thousands of antennas will require a better method to lower computational costs. 
                      <br><br>
                      E-Field Parallel Imaging Correlator (EPIC) is an algorithm designed to transform antenna signals directly into sky images without the need for any correlations. I developed a highly-optimized GPU <a href="https://github.com/epic-astronomy/LWA_EPIC/tree/phoenix" target="_blank">code<v-icon  small>mdi-open-in-new</v-icon></a> to deploy EPIC on the Long Wavelength Array in Sevilleta, New Mexico. This code images the sky at a rate of 25000 frames per second  below 100 MHz to detect Fast Radio Bursts. I also developed a highly-scalable DevOps solution that allows deploying EPIC on any similar array with minimal changes to the configuration. A live 25 FPS video of the sky is available for streaming on <a href="https://livetv.epic-astronomy.org/" target="_blank"> EPIC TV<v-icon  small>mdi-open-in-new</v-icon></a>. See EPIC astronomy <a href="https://epic-astronomy.org/" target="_blank">website</a> for more details

                  </v-card-text>
                  <v-card-actions>
                      <v-spacer> </v-spacer>
                      <v-btn href="https://ieeexplore.ieee.org/document/10466824" target="_blank"
                          dark link color="indigo">IEEE Article <v-icon>mdi-open-in-new</v-icon>
                      </v-btn>
                      <v-btn href="https://neurophotonics.spiedigitallibrary.org/conference-proceedings-of-spie/13101/131011C/Architecture-and-implementation-of-a-25000-FPS-radio-camera-on/10.1117/12.3012524.short#_=_" target="_blank"
                          dark link color="indigo">SPIE Proc. <v-icon>mdi-open-in-new</v-icon>
                      </v-btn>
                      <v-btn href="https://github.com/epic-astronomy" target="_blank"
                          dark link color="black"> <v-icon>mdi-github</v-icon>
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EPIC'
}
</script>

<style>
.xjets_center {
  display: flex;
  justify-content: center;
}
</style>