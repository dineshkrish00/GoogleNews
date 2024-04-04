<template>
  <v-app fluid>
    <!-- <v-app-bar  app color="white" dark>
      <v-img src="" alt=""></v-img>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main> -->
    
    <!-- <HomeComponent></HomeComponent> -->
    <About></About>
  </v-app >
</template>

<script>
// import HomeComponent from './components/home/HomeComponent.vue';
import About from './views/About.vue';
export default {
  name: "App",
  components: {
    // HomeComponent,
    About,
  },
  data: () => ({
    //
  }),
};
</script>

