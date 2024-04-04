<template>
    <div>

        <v-container fluid class=" px-5">
            <v-row>
                <v-col class="d-flex justify-start align-center text-h5">
                    <!-- <div >Google News</div> -->
                    <div  class="d-flex align-center">
                        <img src="../../../assets/home/gLogo.png" width="100px" height="30px" img/>
                        <div class="grey--text font-weight-regular">News</div>
                    </div>

                </v-col>
                <v-col class="d-flex justify-center align-center ">
                    <v-card flat class="d-flex  px-5 py-2 align-center" color="#F1F3F4" width="700">
                        <i class="fa-solid fa-magnifying-glass mr-5"></i>
                        <div class="text-subtitle-1 d-flex justify-start  mr-15">enter your search</div>
                        <v-spacer></v-spacer>
                        <i class="fa-solid fa-chevron-down"></i>
                    </v-card>
                    <div class="ml-4 d-flex">
                        <HelpMenu></HelpMenu>
                        <!-- <v-icon class="d-flex justify-center">help</v-icon> -->
                        <SettingsMenu></SettingsMenu>
                        <!-- <v-icon class="d-flex justify-center ml-4">settings</v-icon> -->
                    </div>
                </v-col>
                <v-col class="d-flex justify-end mr-1">
                    <v-row>
                        <v-col class="d-flex justify-end align-center">
                            <GoogleAppsMenu class="mr-5 align-center" medium></GoogleAppsMenu>
                            <!-- <v-icon class="mr-5 align-center" medium>apps</v-icon> -->
                            <v-avatar class="teal darken-1 white--text mb-1" size="30">M</v-avatar>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row >
                <v-container class="my-0 py-0">
                    <NavLinks></NavLinks>
                </v-container>
            </v-row>
        </v-container>



    </div>
</template>

<script>
import NavLinks from './NavLinks.vue';
import HelpMenu from './nav_menu_popup/HelpMenu.vue'
import SettingsMenu from './nav_menu_popup/SettingsMenu.vue';
import GoogleAppsMenu from './nav_menu_popup/GoogleAppsMenu.vue'
export default {
    name: 'NavLogo',
    components: {
        NavLinks,
        HelpMenu,
        SettingsMenu,
        GoogleAppsMenu,
    }
}
</script>