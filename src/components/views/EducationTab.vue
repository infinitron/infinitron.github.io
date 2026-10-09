<template>
    <v-container class="mx-0 pa-2 pa-sm-6">
        <v-timeline dense reverse >
            <v-timeline-item v-for="edu in education" :key="edu.degree" :color="edu.color" small>
                <template v-slot:opposite>
                    <span :class="`headline font-weight-bold ${edu.color}--text`" v-text="edu.year"></span>
                </template>
                <v-card class="ma-1 ma-sm-3" elevation="4">
                    <!-- <div class="py-4"> -->
                    <v-card-title :class="`headline ${edu.color}--text`">
                       <div class="d-flex flex-wrap justify-space-between full-w"><span class="mr-4">{{ edu.degree }}</span><span>{{ edu.year }}</span></div>
                    </v-card-title>
                    <v-card-subtitle>
                        {{ edu.college }}<br> {{ edu.place }}
                    </v-card-subtitle>
                    <v-card-text v-if="edu.thesis != null">
                        <div>
                            Thesis: {{ edu.thesis }}
                        </div>

                        <div>
                            Advisors: {{ edu.advisor }}
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
    name: 'EducationTab',
    data: () => ({
        education: [
            { college: 'Indian Institute of Space Science and Technology', year: 2014, color: 'pink', place: 'Thrivanathapuram, India', thesis: 'On the Evolution of Net Currents in the Solar Active Region NOAA 11158', advisor: 'Dr. Prameswaran Venkatakrishnan', degree: 'B. Tech in Physical Sciences' },
            { college: 'University of Maryland-Baltimore County', year: 2019, color: 'green', thesis: null, advisor: null, place: 'Baltimore, MD', degree: 'MS in Physics' },
            { college: 'University of Maryland-Baltimore County', year: 2022, color: 'indigo', thesis: 'Morphological Clues to the X-ray Emission from Extragalactic Jets', advisor: 'Dr. Markos Georganopoulos, Dr. Eileen Meyer', place: 'Baltimore, MD', degree: 'Ph.D. in Astrophysics' }
        ].reverse()
    })
}
</script>
