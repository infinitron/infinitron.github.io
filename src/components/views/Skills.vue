<template>
<v-card>
    <v-list>
        <v-list-item v-for="skill in skills" :key="skill.category">
            <v-list-item-content>
                <v-list-item-title class="text-h5">
                    {{skill.category}}
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1">
                    {{skill.items.join(', ')}}
                </v-list-item-subtitle>
            </v-list-item-content>        
        </v-list-item>
    </v-list>
</v-card>
</template>

<script>
export default {
    name: 'SkillsTab',
    data: () => ({
        skills:[
            {category:'Data',items:['VLA', 'JVLA', 'ATCA' , 'Chandra']},
            {category:'Languages',items:['Python', 'R', 'C++', 'CUDA', 'Bash', 'SQL', 'CQL', 'Javascript','HTML','Latex']},
            {category:'Web Frameworks',items:['Plotly dash python', 'Node.JS', 'Vue.JS', 'Leaflet.JS']},
            {category:'OS',items:['Linux (Ubuntu, RHEL)','Windows (7,8,10,11)']},
            {category:'Databases',items:['PostgreSQL','Cassandra']},
            {category:'Softwares',items:['Difmap','CASA', 'CIAO', 'SAOImageDS9', 'ERDAS Imagine', 'ArcGIS']}
        ]
        
    })
}
</script>

<!-- <style>
.max-h{
    max-height:calc(90vh);
}
</style> -->