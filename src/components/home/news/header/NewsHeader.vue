<template>

    <v-container>
       <v-row>
           <v-col>
                <div class="text-h4 mb-1 font-weight-regular">Your briefing</div>
                <div class="text-subtitle-2 font-weight-light mt-2">Tuesday, 28 November</div>
           </v-col>
           <v-col class="" cols="3">
               <Weather/>
           </v-col>
       </v-row>
    </v-container>

</template>

<script>
import Weather from './Weather.vue';
export default{
    name: 'NewsHeader',
    components: {
        Weather,
    }
}
</script>