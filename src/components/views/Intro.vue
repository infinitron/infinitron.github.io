<template>
    <v-card class="bkg-blur">
        <p class="f2"> Hey there! I'm Karthik and I'm a GPU guy at Caltech.</p>
        <p class="f1_5">
            I do a bit of High-performance computing for the DSA-2000 project.
        </p>
        <p class="f1_5">
            But 94.2477% of my work is just me squinting at my screen and muttering 'huh, that's weird.'
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