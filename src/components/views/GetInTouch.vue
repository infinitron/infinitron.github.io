<template>
    <v-container fill-height fluid class="ma-0 pa-0 overflow-x-hidden">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="6" sm="12" lg="4" md="4" xl="4" align-self="center">
                <v-card class="overflow-x-hidden test max-h " dark>
                    <v-card-title>Contact Me</v-card-title>
                    <v-card-text class="text-h6 ma-1">
                        <v-overlay v-if="showButton" absolute opacity="0.5">
                            <v-btn v-if="showButton" @click="decode">Decode</v-btn>
                        </v-overlay>
                        Email:<br> <a v-if="showButton == false" :href="email">{{ email }}</a> <span
                            v-if="showButton">{{ email }}</span>
                        <br>
                        <a v-if="showButton == false" :href="bat_email">{{ bat_email }}</a> <span v-if="showButton">{{
                                bat_email
                        }}</span> <br><br>
                        Address:<br>
                        <pre>{{ address }}</pre>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ContaceMeTab',
    data: () => ({
        email_enc: 'a2FydGhpa0B1bWJjLmVkdQ==',
        address_enc: 'VU1CQyBQaHlzaWNzIEJ1aWxkaW5nCjEwMDAgSGlsbHRvcCBDaXIsIEJhbHRpbW9yZSwgTUQgMjEyNTA=',
        email: 'a2FydGhpa0B1bWJjLmVkdQ==',
        address: 'VU1CQyBQaHlzaWNzIEJ1aWxkaW5nCjEwMDAgSGlsbHRvcCBDaXIsIEJhbHRpbW9yZSwgTUQgMjEyNTA',
        bat_email: 'aUBhbWJhdG1hbi5jb20=',
        showButton: true,
    }),
    computed: {
        email_href: function () {
            return "mailto:" + this.email;
        }
    },
    methods: {
        decode: function () {
            this.email = window.atob(this.email_enc);
            this.address = window.atob(this.address_enc);
            this.showButton = false;
            this.bat_email = window.atob(this.bat_email);
        }
    }
}
</script>
a="UMBC Physics Building\n1000 Hilltop Cir, Baltimore, MD 21250
"