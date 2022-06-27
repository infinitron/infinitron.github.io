<template>
    <v-container fill-height fluid class="ma-0 pa-0" >
        <v-row no-gutters align="center" justify="center" >
            <v-col cols="6" sm="12" lg="8" md="8" xl="8" align-self="center"  >
                <v-card class="overflow-y-hidden test max-h " dark>
                    <v-card-title>Experience</v-card-title>
                    <v-tabs dark vertical center-active>
                        <v-tab v-for="item in items" :key="item.name" exact>
                            <v-icon left>mdi-{{ item.icon }}</v-icon>{{ item.name }}
                        </v-tab>

                        <v-tab-item>
                            <EducationTab />
                        </v-tab-item>
                        <v-tab-item>
                            <WorkTab />
                        </v-tab-item>
                        <v-tab-item>
                            <SkillsTab />
                        </v-tab-item>
                    </v-tabs>
                    <!-- <router-view/> -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import EducationTab from './EducationTab.vue'
import WorkTab from './WorkTab.vue'
import SkillsTab from './Skills.vue'


export default {
    name: 'ExperiencePage',
    props: ["type"],
    components: { EducationTab,WorkTab,SkillsTab },
    data: () => ({
        activeTab: `/Experience/Education`,
        items: [
            { name: 'Education', icon: 'account-school', to: '/Experience/Education' },//"/Experience/Education"
            { name: 'Work', icon: 'account-tie', to: "/Experience/Work" },
            { name: 'Skills', icon: 'tools', to: "/Experience/Skills" }
        ],

    })
}
</script>
