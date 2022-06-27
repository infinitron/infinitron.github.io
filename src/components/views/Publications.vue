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
                    <v-card-text>
                        <!-- <v-list> -->
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
                        <!-- </v-list> -->
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
var title = '<span class="font-weight-bold">K Reddy</span>';
var title2 = '<span class="font-weight-bold">Karthik Reddy</span>';
export default {
    name: 'PublicationList',
    data: () => ({
        title: '<span class="font-weight-bold>K Reddy"</span>',
        title2: '<span class="font-weight-bold>Karthik Reddy"</span>',
        pubs: [
            { title: 'Flux emergence in the solar active region NOAA 11158: the evolution of net current', year: '2015', authors: 'P Vemareddy, P Venkatakrishnan, ' + title, citation: 'Research in Astronomy and Astrophysics 15 (9), 1547	', link: 'https://iopscience.iop.org/article/10.1088/1674-4527/15/9/011/meta' },
            {
                title: 'The origin of the X-ray emission in two well-aligned extragalactic jets: the case for IC/CMB', year: '2019', authors: 'Eileen T Meyer, Adurshsiva R Iyer, ' + title2 + ', Markos Georganopoulos, Peter Breiding, Mary Keenan', citation: 'The Astrophysical Journal Letters 883 (1), L2', link: 'https://iopscience.iop.org/article/10.3847/2041-8213/ab3db3/meta'
            },
            {
                title: 'The relativistic jet dichotomy and the end of the blazar sequence', year: '2021', link: 'https://academic.oup.com/mnras/article/505/4/4726/6256855?login=true', authors: 'M Keenan, ET Meyer, M Georganopoulos, ' + title + ', OJ French', citation: 'Monthly Notices of the Royal Astronomical Society 505 (4), 4726-4745'
            },
            {
                title: 'X-Ray-to-radio Offset Inference from Low-count X-Ray Jets', year: '2021', link: "https://iopscience.iop.org/article/10.3847/1538-4365/abd8d7/meta", citation: 'The Astrophysical Journal Supplement Series 253 (2), 37', authors: title + ', M Georganopoulos, ET Meyer'
            },
            {
                title: 'Variability of extragalactic X-ray jets on kiloparsec scales', year: '2022', link: 'https://assets.researchsquare.com/files/rs-1654349/v1_covered.pdf?c=1655223060', authors: 'Eileen Meyer, Aamil Shaik, Yanbo Tang, Nancy Reid, ' + title2 + ', et al.', citation: 'In review, Nature Astronomy'
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
