<template>
        <v-card class="bkg-blur">
            <p class="f2"> I'm Karthik Reddy (and also Batman in some cultures), a recent Ph.D graduate in astrophysics from UMBC, and a soon to be postdoc at Arizona State University.</p>
                <p class="f1_5">
                    I work on extragalactic jets, fast radio bursts, astrostatistics and building scalable systems.
                </p>
                <p class="f1_5">
                    I also like to watch black hole lensing. <v-icon dark>mdi-arrow-down-right</v-icon>
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
    background-color: rgba(0, 0, 0, 0.1)!important;
    backdrop-filter: blur(2px);
    /* position: absolute; */
    color: white !important;
    padding: 2.5%;
    top:1% !important;
    text-align:center;
}

.f2{
    font-size: 2em;
}

.f1_5{
    font-size:1.5em;
}

</style>