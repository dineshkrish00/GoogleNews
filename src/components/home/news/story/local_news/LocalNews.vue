<template>
    <div>
        <!-- <v-row>
                <v-col>
                    <v-row class="px-3 mb-1">
                        <v-div class="text-body-2">
                            Times of India 
                            <i class="fa-regular fa-newspaper"></i>
                        </v-div>
                        <v-spacer></v-spacer>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </v-row>
                    <v-row class="px-3">
                        <div class="text-subtitle-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit!
                        </div>
                        <div class="text-caption">12 hours ago</div>
                    </v-row>
                </v-col>

                <v-col cols="4" class="d-flex justify-center align-start pa-0">
                    <img 
                        style="height: 75px; width: 75px; object-fit: cover; border-radius: 15px;" 
                        src="https://images.unsplash.com/photo-1584359983106-ef9366f27454?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="image"
                    >
                </v-col>
            </v-row> -->
        <v-container>
            <v-row>
                <v-col>
                    <OtherLocalNews></OtherLocalNews>
                    <OtherLocalNews></OtherLocalNews>
                    <OtherLocalNews></OtherLocalNews>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// import LocalNewsHeader from './LocalNewsHeader.vue';
import OtherLocalNews from './OtherLocalNews.vue'
export default {
    name: 'LocalNews',
    components: {
        OtherLocalNews,
        // LocalNewsHeader,
    }
}
</script>