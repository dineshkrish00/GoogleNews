<template>
    <v-container class="px-0">
        <v-row >
            <v-col class="d-flex justify-start">Home</v-col>
            <v-col class="d-flex justify-center">For Your</v-col>
            <v-col class="d-flex justify-center">Following</v-col>
            <v-col class="d-flex justify-center">News</v-col>
            <v-col class="d-flex justify-center">India</v-col>
            <v-col class="d-flex justify-center">World</v-col>
            <v-col class="d-flex justify-center">Local</v-col>
            <v-col class="d-flex justify-center">Business</v-col>
            <v-col class="d-flex justify-center">Technology</v-col>
            <v-col class="d-flex justify-center">Entertainment</v-col>
            <v-col class="d-flex justify-center">Sports</v-col>
            <v-col class="d-flex justify-center">Science</v-col>
            <v-col class="d-flex justify-center">Health</v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    name: 'NavLinks',
    data(){
        return{
            items: [
                'Home', 'For you', 'Following', 'News', 'India', 'World', 'Local', 'Business',
                'Technology', 'Emtertainment', 'Sports', 'Science', 'Health',
            ]
        }
    }
}
</script>