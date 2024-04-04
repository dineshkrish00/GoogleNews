<template>
    <div>
        <v-container class="">
            <v-row>
                <v-col cols="8">
                    <v-card class="pa-5 rounded-xxl">
                        <TopStoryHeader></TopStoryHeader>
                        <div>
                            <v-divider class="my-5"></v-divider>
                        </div>
                        <TopStory></TopStory>
                    </v-card>
                </v-col>
                <!-- ----------------------------------------- -->
                <v-col cols="4">
                    <v-card class="pa-5 rounded-xxl">
                        <LocalNewsHeader></LocalNewsHeader>
                        <div>
                            <v-divider class="my-5"></v-divider>
                        </div>
                        <LocalNews></LocalNews>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <v-card class="pa-5 rounded-xxl">
                        <TopStory></TopStory>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card class="pa-5 rounded-xxl">
                        <LocalNews></LocalNews>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import TopStoryHeader from '../story/top_story/TopStoryHeader.vue'
import LocalNewsHeader from './local_news/LocalNewsHeader.vue';
import TopStory from './top_story/TopStory.vue'
import LocalNews from './local_news/LocalNews.vue';
export default {
    name: 'Story',
    components: {
        TopStory,
        LocalNews,
        TopStoryHeader,
        LocalNewsHeader,
    }
}
</script>