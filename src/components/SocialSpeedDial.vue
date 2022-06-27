<template>
    <!-- <v-card id="create"> -->
        <v-speed-dial v-model="fab" bottom="bottom" right="right" direction="top" open-on-hover class="v-speed-dial">
            <template v-slot:activator>
                <v-btn v-model="fab" color="blue darken-1" dark fab>
                    <v-icon v-if="fab">
                        mdi-close
                    </v-icon>
                    <v-icon v-else>
                        mdi-account
                    </v-icon>
                </v-btn>
            </template>
            <v-btn fab dark small color="#171515" link href="https://github.com/infinitron" target="_blank">
                <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn fab dark small link href="https://www.linkedin.com/in/skarthikreddy/" color="#0A66C2"
                target="_blank">
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn fab dark small color="#1DA1F2" link href="https://twitter.com/__I_am_batman_" target="_blank">
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
        </v-speed-dial>
    <!-- </v-card> -->
</template>

<script>
export default{
    name:'SocialSpeedDial',
    data:()=>({
            fab:false
    })
}
</script>

<style>
.v-speed-dial{
    position:absolute !important;
    z-index:6 !important;
}
</style>