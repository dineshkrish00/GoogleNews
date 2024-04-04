<template>
    
    <div>
        <NavBar></NavBar>
        <News></News>
    </div>
       
</template>

<script>
import NavBar from './nav-bar/NavBar.vue';
import News from './news/News.vue';
export default{
    components: {
        NavBar,
        News,
    },
}
</script>