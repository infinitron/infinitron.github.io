<template>
    <v-container class="overflow-y-auto max-h mx-0 pa-8" >
        <v-timeline dense reverse >
            <v-timeline-item v-for="w in work" :key="w.position" :color="w.color" small>
                <template v-slot:opposite>
                    <span :class="`headline font-weight-bold ${w.color}--text`" v-text="w.year"></span>
                </template>
                <v-card class="ma-6" elevation="4">
                    <!-- <div class="py-4"> -->
                    <v-card-title :class="`headline ${w.color}--text`">
                       <v-container>
                        <v-row justify="space-between">
                             <v-col class="pl-0">{{ w.position }}</v-col><v-col class="text-right">{{ w.time }}</v-col>
                        </v-row>
                       </v-container>
                    </v-card-title>
                    <v-card-subtitle>
                        {{ w.employer }}<br> {{ w.place }}
                    </v-card-subtitle>
                    <v-card-text v-if="w.duties != null">
                        <div>
                         {{ w.duties }}
                        </div>
                    </v-card-text>
                    <!-- </div> -->
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
export default {
    name: 'WorkTab',
    data: () => ({
        work:[
            {
                time:'Sep 2014-Aug 2017',employer:'National Remote Sensing Centre',place:'Hyderabad, Telangana',duties:'Developed remote sensing satellite data-based systems for near real-time spatio-temporal water informatics.',position:'Scientist', color: 'green'
            },
            {
                time:'Aug 2017-Jul 2018',employer:'University of Maryland-Baltimore County',place:'Baltimore, MD',duties:'Assisted the course instructor for PHYS 121 with conducting tutorial sessions and exams.',position:'Teaching Assistant', color: 'indigo'
            },
            {time:'Sep 2021-Nov- 2021',employer:'Center for Astrophysics, Harvard-SAO',place:'Boston, MA',duties:'Performed simulations to understand the systematic uncertainties in LIRA analyses.',position:'Visiting predoc', color: 'pink'},
            {
                time:'Aug 2018-Jun 2022',employer:'University of Maryland-Baltimore County',place:'Baltimore, MD',duties:'Analyzed X-ray and radio structural differences in several extragalactic jets to constrain their X-ray emission mechanism.',position:'Research Assistant',color:'cyan'
            },
            {
                time:'Jul 2022-Present',employer:'Arizona State University',place:'Tempe, AZ', duties:'Developing a 25000 FPS radio camera to detect Fast Radio Bursts (FRBs) below 100 MHZ',position:'Postdoc',color:'orange'
            }
        ].reverse()
    })
}
</script>

<style>
.max-h{
    max-height:calc(90vh);
}
</style>