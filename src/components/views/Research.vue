<template>
    <v-container fill-height fluid class="ma-0 pa-0">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="8" sm="12" lg="8" md="8" xl="8" align-self="center">
                <v-card light class="overflow-y-auto max-h">

                    <v-toolbar>
                        <v-toolbar-title>
                            Research
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="text-h6 text-center">
                        Do you ever wonder why there is a universe at all or how mysterious phenomena in its grand
                        scheme keep popping up eternally as if the universe was a magical crystal ball? What if we had
                        the key to this crystal ball that allowed us to peer into the clockwork of this universe at any
                        scale? Fun, right?
                        <p>I get it.</p>
                        <p>Luckily, I also get to think about some of them for work. Below I describe selected pieces of
                            my research that interest me about this universe.</p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-container fill-height fluid>
                        <v-row>
                            <v-col cols="12">
                                <EPIC />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <XJETSProj />
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col cols="12">
                                <LowCountsProj />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import XJETSProj from './Projects/XJETSOffsets.vue'
import LowCountsProj from './Projects/LowCountJets.vue'
import EPIC from './Projects/EPIC.vue'

export default {
    name: 'ResearchPage',
    components: { XJETSProj, LowCountsProj, EPIC }
}
</script>



<style>
.max-h {
    max-height: calc(90vh);
}
</style>
