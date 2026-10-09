<template>
    <v-speed-dial v-model="fab" bottom="bottom" right="right" direction="top" open-on-hover class="v-speed-dial">
        <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-1" dark fab :small="$vuetify.breakpoint.xsOnly"
                aria-label="Social links">
                <v-icon v-if="fab">
                    mdi-close
                </v-icon>
                <v-icon v-else>
                    mdi-account
                </v-icon>
            </v-btn>
        </template>
        <v-btn v-for="link in links" :key="link.label" fab dark x-small link :href="link.href" :color="link.color"
            target="_blank" rel="noopener noreferrer" :aria-label="link.label">
            <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
    name: 'SocialSpeedDial',
    data: () => ({
        fab: false,
        links: [
            { label: 'GitHub', href: 'https://github.com/infinitron', icon: 'mdi-github', color: '#171515' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/skarthikreddy/', icon: 'mdi-linkedin', color: '#0A66C2' },
            { label: 'X (Twitter)', href: 'https://x.com/__I_am_batman_', icon: 'mdi-twitter', color: '#14171A' }
        ]
    })
}
</script>

<style>
.v-speed-dial {
    position: fixed !important;
    z-index: 6 !important;
    /* sit above the footer, which is 48px tall on desktop and wraps to ~72px on phones */
    bottom: 64px !important;
    right: 16px !important;
}

@media (max-width: 599px) {
    .v-speed-dial {
        bottom: 88px !important;
        right: 12px !important;
    }
}
</style>
