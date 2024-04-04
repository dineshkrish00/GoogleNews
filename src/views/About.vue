<template>
  <v-container class="main   elevation-0">
    <v-bottom-navigation v-model="value" color="green" class=" rounded-t-pill rounded-br-pill mt-5">
      <v-btn text value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn text value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn text value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <div class="d-flex justify-center pa-0">
      <v-img height="200" width="150" src="https://picsum.photos/200/225" cover alt="img"></v-img>
      <v-img height="200" width="150" src="https://picsum.photos/300/225" cover alt="img"></v-img>
      <v-img height="200" width="150" src="https://picsum.photos/225/225" cover alt="img"></v-img>
      <v-img height="200" width="150" src="https://picsum.photos/350/225" cover alt="img"></v-img>
      <v-img height="200" width="150" src="https://picsum.photos/275/225" cover alt="img"></v-img>
    </div>
  </v-container>
</template>



<script>
export default {
  name: "About",
  data() {
    return {
      value: 'recent',
    }
  }
}

</script>

<style scoped>
.main {
  border: 2px solid black;
}
</style>
