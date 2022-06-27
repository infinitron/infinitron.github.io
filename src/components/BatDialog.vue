<template>
    <!-- <v-row justify="center"> -->
    <v-dialog v-model="bat_dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue lighten-1" x-small icon v-bind="attrs" v-on="on" right>
                <v-icon dense small>mdi-help-circle-outline</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5">
                Batman?
            </v-card-title>
            <v-card-text>I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in a room
                together.</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text disabled>
                    Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="bat_dialog = false">
                    Agreed
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- </v-row> -->
</template>

<script>
export default{
    name:'BatDialog',
    data:()=>{
        return {
            bat_dialog:false
        }
    }
}
</script>