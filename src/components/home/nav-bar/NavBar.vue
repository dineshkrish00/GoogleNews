<template>
    <div>
        <NavLogo></NavLogo>
        <v-divider></v-divider>
        <!-- <NavLinks></NavLinks> -->
    </div>
</template>

<script>
import NavLogo from './NavLogo.vue';
// import NavLinks from './NavLinks.vue';
export default{
    name: 'Navbar',
    components: {
        NavLogo,
        // NavLinks,
    },
}
</script>