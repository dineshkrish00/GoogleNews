<template>
    <div>
        <v-row>
            <v-col cols="5">
                <TopStoryMain />
            </v-col>
            <v-col cols="7">
                <OtherTopStory />
                <OtherTopStory />
                <OtherTopStory />
            </v-col>
        </v-row>
        <!-- <v-row >
            <v-divider class="my-7 "></v-divider>
        </v-row> -->
    </div>
</template>

<script>
import TopStoryMain from './TopStoryMain.vue';
import OtherTopStory from './OtherTopStory.vue';
export default {
    name: 'TopStory',
    components: {
        TopStoryMain,
        OtherTopStory,
    }
}
</script>