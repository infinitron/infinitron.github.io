<template>
    <v-card class="bkg-blur">
        <p class="f2"> Hey there! I'm Karthik and I'm a GPU Engineer at Caltech.</p>
        <p class="f1_5">
            I do a bit of High-performance computing for DSA-2000. I also try
            to understand the nature of extragalactic jets and fast radio bursts.
        </p>
        <p class="f1_5">
            Sometimes I stare at gravitational lensing. <v-icon dark>mdi-arrow-down-right</v-icon>
        </p>
    </v-card>

</template>

<script>
export default {
    name: 'IntroPage'
}
</script>

<style>
.bkg-blur {
    background-color: rgba(0, 0, 0, 0.1) !important;
    backdrop-filter: blur(2px);
    /* position: absolute; */
    color: white !important;
    padding: 2.5%;
    top: 1% !important;
    text-align: center;
    width: 100%;
}

.f2 {
    font-size: 2em;
}

.f1_5 {
    font-size: 1.5em;
}
</style>