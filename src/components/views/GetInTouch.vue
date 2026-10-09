<template>
    <v-container fill-height fluid class="ma-0 pa-0 overflow-x-hidden">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="12" sm="10" md="6" lg="4" align-self="center" class="page-col">
                <v-card class="page-card" dark>
                    <v-card-title>Contact Me</v-card-title>
                    <v-card-text class="text-h6 ma-1">
                        <v-btn v-if="showButton" color="blue darken-1" @click="decode">
                            <v-icon left>mdi-eye</v-icon>Show contact details
                        </v-btn>
                        <template v-else>
                        Email:<br> <a :href="'mailto:' + email">{{ email }}</a>
                        <br>
                        <!-- <a v-if="showButton == false" :href="bat_email">{{ bat_email }}</a> <span v-if="showButton">{{
                                bat_email
                        }}</span>  -->
                        <br><br>
                        Address:<br>
                        <pre>{{ address }}</pre>
                        </template>
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
        email_enc: 'a2FydGhpa0BjYWx0ZWNoLmVkdQ==',
        address_enc: 'QnJpZGdlIEFubmV4LCBQYXNhZGVuYQpDQSA5MTEyNSwgVW5pdGVkIFN0YXRlcw==',
        email: 'a2FydGhpa0BjYWx0ZWNoLmVkdQ==',
        address: 'QnJpZGdlIEFubmV4LCBQYXNhZGVuYQpDQSA5MTEyNSwgVW5pdGVkIFN0YXRlcw==',
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
