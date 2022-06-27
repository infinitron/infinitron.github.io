<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto">
                    <v-container fluid>
                        <v-row align="center" justify="center">
                            <v-col cols="12" align-self="center" class="xjets_center">
                                <v-img :src="require('../../../assets/3c111_xray_radio.png')" />
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-card-title>
                        X-ray Emission from Extragalactic Jets
                    </v-card-title>
                    <v-card-subtitle>
                        An analysis using X-ray/radio positional offsets
                    </v-card-subtitle>
                    <v-card-text>
                        Active Galactic Nuclei are one of the most powerful objects in the world powered by Supermassive
                        Black Holes (SMBHs). A small fraction of these AGN produce bipolar jets of relativistic plasma
                        carrying momentum and energy from the central parsecs of SMBH out to kilo-parsecs and often to
                        Mpc scales. Their emission is observed in a wide range of frequencies from radio to X-rays and
                        sometimes in the hard X-rays. Their energy output can limit or stimulate the growth of galaxies;
                        they may be able to produce intergalactic magnetic fields. Despite their importance, several of
                        their properties remain uncertain. For example, their exact plasma
                        composition--electron/positron or electron/proton--is unknown, so is their speed on kpc-scales.
                        I'm trying to understand how some powerful of these jets produce X-rays on kilo-parsec scales
                        (radio-to-optical is typically produced the synchrotron mechanism).
                        <br>
                        <br>
                        Until recently, inverse Compton scattering of the cosmic microwave background (iC/CMB) was the
                        leading explanation for X-ray emission from these jets. This model is typically applied under
                        the one-zone assumption--roughly the same electrons that produce the radio also produce X-rays.
                        However, the X-rays peak and decay before the radio in some jets (see the Chandra X-ray image of
                        3C 111 above with the VLA radio contours overlaid). I used LIRA (see
                        below) to investigate these X-ray structural differences in about 100 X-ray jets and showed these "positional offsets" are
                        ubiquitous and that multi-zone models must be adopted to explain the X-rays. Based on inter-knot
                        distances, if the discrete features in these jets (called knots) are to be produced by an
                        intermittent activity in the central engine, as suggested by previous authors, I showed that knots
                        can at most be mildly-relativistic. This slow speed questions the application of one-zone iC/CMB
                        models which require highly relativistic jets. Building up on the previous suggestions that the knots in these jets are slow-moving parts of the jet embedded in an faster and lighter outer-flow, we suggested  that the shock-accelerated plasma flows around the obstacle to create the observed X-ray/radio offsets and morphology.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer> </v-spacer>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" text dark href="" color="indigo">ADS Link <v-icon>mdi-open-in-new</v-icon>
                                </v-btn>
                            </template>
                            <span>To be updated soon</span>
                        </v-tooltip>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'XJETSProj'
}
</script>

<style>
.xjets_center {
    display: flex;
    justify-content: center;
}
</style>