<template>
    <v-container fill-height fluid class="ma-0 pa-0">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="8" sm="12" lg="6" md="6" xl="8" align-self="center">
                <v-card light class="overflow-y-auto max-h">

                    <v-toolbar>
                        <v-toolbar-title>
                            Publications
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn link target="_blank" href="https://scholar.google.com/citations?user=34mjHBAAAAAJ">
                            <v-icon left>
                                mdi-google
                            </v-icon>
                            Scholar
                        </v-btn>
                    </v-toolbar>
                    <v-container fill-height fluid>
                    <!-- <v-card-text> -->
                        <!-- <v-list> -->
                            <v-row>
                                <v-col cols="12">
                        <v-list-item v-for="item in pubs" :key="item.title" three-line>
                            <v-list-item-content>
                                <v-list-item-title>
                                    [{{item.year}}] <a :href="item.link" target="_blank">{{item.title}}</a><v-icon small>mdi-open-in-new</v-icon>
                                </v-list-item-title>
                                <v-list-item-subtitle v-html="item.authors"> 
                                </v-list-item-subtitle> 
                                <v-list-item-subtitle>
                                    {{item.citation}} 
                                </v-list-item-subtitle>

                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    </v-row>
                        <!-- </v-list> -->
                    <!-- </v-card-text> -->
                </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
var title2 = '<span class="font-weight-bold">Karthik Reddy</span>';
export default {
    name: 'PublicationList',
    data: () => ({
        title: '<span class="font-weight-bold>K Reddy"</span>',
        title2: '<span class="font-weight-bold>Karthik Reddy"</span>',
        pubs: [
            { title: 'Flux emergence in the solar active region NOAA 11158: the evolution of net current', year: '2015', authors: 'P Vemareddy, P Venkatakrishnan, ' + title2, citation: 'Research in Astronomy and Astrophysics 15 (9), 1547	', link: 'https://iopscience.iop.org/article/10.1088/1674-4527/15/9/011/meta' },
            {
                title: 'The origin of the X-ray emission in two well-aligned extragalactic jets: the case for IC/CMB', year: '2019', authors: 'Eileen T Meyer, Adurshsiva R Iyer, ' + title2 + ', Markos Georganopoulos, Peter Breiding, Mary Keenan', citation: 'The Astrophysical Journal Letters 883 (1), L2', link: 'https://iopscience.iop.org/article/10.3847/2041-8213/ab3db3/meta'
            },
            {
                title: 'The relativistic jet dichotomy and the end of the blazar sequence', year: '2021', link: 'https://academic.oup.com/mnras/article/505/4/4726/6256855?login=true', authors: 'Mary Keenan, Eileen T. Meyer, Markos Georganopoulos, ' + title2 + ', Omar J French', citation: 'Monthly Notices of the Royal Astronomical Society 505 (4), 4726-4745'
            },
            {
                title: 'X-Ray-to-radio Offset Inference from Low-count X-Ray Jets', year: '2021', link: "https://iopscience.iop.org/article/10.3847/1538-4365/abd8d7/meta", citation: 'The Astrophysical Journal Supplement Series 253 (2), 37', authors: title2 + ', Markos Georganopoulos, Eileen T. Meyer'
            },
            {
                title: 'Variability of extragalactic X-ray jets on kiloparsec scales', year: '2023', link: 'https://www.nature.com/articles/s41550-023-01983-1', authors: 'Eileen Meyer, Aamil Shaik, Yanbo Tang, Nancy Reid, ' + title2 + ', et al.', citation: 'Nature Astronomy, 7(8), 967-975'
            },
            {
                title: 'Offsets between X-Ray and Radio Components in X-Ray Jets: The AtlasX', year: '2023', link: 'https://iopscience.iop.org/article/10.3847/1538-4365/aca321/meta', authors: title2 + ', Markos Georganopoulos, Eileen Meyer  et al.', citation: 'The Astrophysical Journal Supplement Series 265 8'
            },
            {
                title: 'An Optimized GPU Kernel for Real-Time Radio Imaging', year: '2023', link: 'https://ieeexplore.ieee.org/document/10466824', authors: title2+ ', Judd Bowman, Adam P. Beardsley et al. ', citation: 'IEEE HPCC \'23, pp 523-527'
            },
            {
                title: 'Architecture and implementation of a 25000 FPS radio camera on the long wavelength array', year: '2024', link: 'https://neurophotonics.spiedigitallibrary.org/conference-proceedings-of-spie/13101/131011C/Architecture-and-implementation-of-a-25000-FPS-radio-camera-on/10.1117/12.3012524.short#_=_', authors: title2+ ', Judd Bowman, Jayce Dowell et al. ', citation: 'Proc. SPIE 13101, Software and Cyberinfrastructure for Astronomy VIII, 131011C'
            },
            {
                title: 'Surprisingly Brighter, Spectrally Harder, Spatially Disjoint: Powerful Extragalactic X-ray Jets in the Chandra Era', year: '2024', link: '', authors: title2 + ', Markos Georganopoulos, Eileen T. Meyer', citation: 'Submitted to Universe'
            }
        ].reverse()
    })
}
</script>



<style>
.max-h {
    max-height: calc(90vh);
}
</style>
