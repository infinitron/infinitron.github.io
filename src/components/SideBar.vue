<template>
    <v-navigation-drawer class="grey darken-4" dark :permanent="$vuetify.breakpoint.mdAndUp" app dense>
        <div class="dp_bat">
            <router-link :to="'/'">
                <v-img :src="require('../assets/dp2.jpg')" class="dp" />
            </router-link>
            <router-link :to="'/'">
                <v-img :src="require('../assets/batman_logo.png')" class="badge" />
            </router-link>
        </div>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Karthik Reddy
                    </v-list-item-title>
                    <v-list-item-subtitle>Basic Astrophysicist</v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <!-- <v-btn icon color="blue lighten-1" x-small><v-icon>mdi-help-circle-outline</v-icon dense small></v-btn> -->
                        Part-time Batman
                        <BatDialog />
                    </v-list-item-subtitle>
                </v-list-item-content>


            </v-list-item>

            <v-divider></v-divider>
            <v-list-item-group v-model="selected_item" color="blue lighten-1" @change="change_page">
                <v-list-item v-for="item in items" :key="item.id" :to="item.component" exact>
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <v-subheader>Drag around the sky for fun! →</v-subheader>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block color="blue darken-1" link :href="cv" target="_blank">
                    <v-icon left>mdi-file-document-multiple</v-icon> Download CV
                    <v-icon right>mdi-open-in-new</v-icon>
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import BatDialog from './BatDialog.vue'
import cv from '../assets/CV_2022.pdf'
export default {
    name: 'SideBar',
    data: () => ({
        cv,
        items: [
            { title: 'Intro', id: 'intro', component: { name: 'Intro' }, icon: 'mdi-home' },
            { title: 'Experience', id: 'experience', component: { name: 'Experience' }, icon: 'mdi-briefcase' },//,params:{type:"Education"}
            { title: 'Research', id: 'research_interests', component: { name: 'Research' }, icon: 'mdi-electron-framework' },
            // {title:'Download CV'},
            { title: 'Publications', id: 'publications', component: { name: 'Publications' }, icon: 'mdi-notebook' },
            { title: 'About Me', id: 'who_am_i', component: { name: 'AboutMe' }, icon: 'mdi-human-male-female' },
            { title: 'Get in touch', id: 'get_in_touch', component: { name: 'ContactMe' }, icon: 'mdi-card-account-mail' },
            { title: 'Just lensing', id: 'just_lensing', component: { name: 'JustLensing' }, icon: 'mdi-power-off' }
        ],
        //selected_item: null//this.selected_page
    }),
    components: {
        BatDialog
    },
    methods: {
        change_page: function (page) {
            if (page == undefined || page == null) {
                this.$emit('page-name', null)
            } else {
                this.$emit('page-name', this.items[page])
            }
        }
    },
    props: ['selected_page'],
    model: {
        prop: 'selected_page',
        event: 'page-change'
    },
    computed: {
        selected_item: {
            get: function () {
                return this.selected_page//!=null?this.selected_page.id:null
            },
            set: function (val) {
                this.$emit('page-change', val)
            }
        }
    }
}
</script>

<style>
.dp {
    position: relative;
    top: 1%;
    display: flex;
    justify-content: center;
    /* left: 25%; */
    margin: auto;
    width: 95%;
    clip-path: circle(at center);
}

.badge {
    width: 50%;
    position: absolute !important;
    bottom: 0px;
    transform: translateY(30%);
    margin-left: 40%;
    filter: drop-shadow(1px 1px 1px white) drop-shadow(-1px -1px 1px white);
}

.dp_bat {
    position: relative;
    top: 1%;
}
</style>