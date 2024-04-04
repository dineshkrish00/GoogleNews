<template>
    <div>
        <v-menu :location="bottom" offset-y>
            <template v-slot:activator="{attrs, on}">
                <v-icon  slot="activator" class="d-flex justify-center ml-4" 
                v-bind="attrs"
                v-on="on"
                >settings</v-icon>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{item}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'SettingsMenu',
    data(){
        return{
            items: [
                'Settings', 'Language & region'
            ]
        }
    }
}
</script>