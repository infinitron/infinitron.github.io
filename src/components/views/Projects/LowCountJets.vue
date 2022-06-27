<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto">
                    <v-container fluid>
                        <v-row align="center" justify="center">
                            <v-col cols="12" align-self="center" class="xjets_center">
                                <v-img :src="require('../../../assets/low-counts.png')"      />
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-card-title>
                        Detecting X-ray/radio offsets in low-count X-ray jets
                    </v-card-title>
                    <v-card-subtitle>
                        A novel approach using LIRA
                    </v-card-subtitle>
                    <v-card-text>
                        Deteting X-ray/raido offsets can be straight forward in the case of isolated components. While
                        it is typical to obtain a mas accuracy in localizing radio sources, X-ray sources can be
                        problematic. Specifically, the emission from the bright core and poisson fluctuations can
                        introduce additional uncertainties in not only localization but also in detection. See below
                        video for an example.
                        <br>
                        <div class="xjets_center pa-2">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vLOscDQhXwM"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <br>
                        I use a specialized statistical tool called Low-Counts Image Reconstruction and Analysis (<a
                            href="https://github.com/astrostat/LIRA">LIRA</a><v-icon small>mdi-open-in-new</v-icon>; python package: <a href="https://github.com/astrostat/pylira">pylira<v-icon small>mdi-open-in-new</v-icon></a>) to account for these effects. It is a
                        Bayesian based MCMC tool that generates a posterior of emission in excess of a user-specified
                        baseline image. Here the baseline would be a birght point source (the core) and a flat
                        background. LIRA generates several images of the excess emission using an MCMC sampler and can
                        be used to estimate the significance of an offset. In a sample of 22 X-ray jets, it find offsets
                        in more than half of them. Shown in the figure is a source called 3C 418. The left panel shows
                        the original image, while the right shows the average of 2000 MCMC images from LIRA. We detected
                        the X-ray emission from its jet for the first time.
                        <br><br>
                        I created an automated parallel processror to run LIRA on observations with minimal user-input.
                        The code is available <a href="https://github.com/infinitron/lira.parallel" target="_blank">here</a><v-icon small>mdi-open-in-new</v-icon>. I also re-wrote the LIRA C code in modern C++ using <a href="https://en.wikipedia.org/wiki/Single_instruction,_multiple_data" target="_blank">SIMD</a><v-icon  small>mdi-open-in-new</v-icon> intrinsics. An experimental python wrapper is available <a href="https://github.com/infinitron/pylira_simd" target="_blank">here</a><v-icon  small>mdi-open-in-new</v-icon>.

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer> </v-spacer>
                        <v-btn href="https://ui.adsabs.harvard.edu/abs/2021ApJS..253...37R/abstract" target="_blank"
                            dark link color="indigo">ADS Link <v-icon>mdi-open-in-new</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LowCountsProj'
}
</script>

<style>
.xjets_center {
    display: flex;
    justify-content: center;
}
</style>