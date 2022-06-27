<template>
    <div class="sticky-image-wrapper">
        <v-img :src="require('../assets/mountains_no_bg2.png')" />
    </div>
</template>

<script>
export default {
    name: 'NightMountains'
}
</script>

<style>
.sticky-image-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(40%);
    z-index: 0;
}

.sticky-image-wrapper img {
    display: table;
    position: relative;
    margin: auto;
    transform: translateY(45%);
}
</style>