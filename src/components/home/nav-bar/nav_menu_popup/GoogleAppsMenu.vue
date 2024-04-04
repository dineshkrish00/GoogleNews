<template>
    <div>
        <v-menu :location="bottom" offset-y>
            <template v-slot:activator="{ attrs, on }">
                <v-icon slot="activator" class="d-flex justify-center ml-4" v-bind="attrs" v-on="on">apps</v-icon>
            </template>
            <v-list class="">

                <v-list-item v-for="(icon, i) in icons" :key="i">
                    <v-list-item-title>
                        <v-row>
                            <v-col>
                                <v-card>
                                    <i :class="icon" style="font-size: 35px;"></i>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-list-item-title>
                </v-list-item>

                <!-- <v-list-item v-for="(icon, i) in icons3" :key="i">
                    <v-list-item-titile>
                        <i :class="icon" style="font-size: 35px;"></i>
                    </v-list-item-titile>
                </v-list-item>

                <v-list-item v-for="(icon, i) in icons4" :key="i">
                    <v-list-item-titile>
                        <i :class="icon" style="font-size: 35px;"></i>
                    </v-list-item-titile>
                </v-list-item> -->
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'GoogleAppsMenu',
    data() {
        return {
            icons: [
                'fa-brands fa-google',
                'fa-brands fa-app-store-ios',
                'fa-brands fa-whatsapp',
                'fa-brands fa-apple-pay',
                'fa-brands fa-napster',
                'fa-brands fa-windows',
                'fa-brands fa-linux',
                'fa-brands fa-redhat',
                'fa-brands fa-ubuntu',
                'fa-brands fa-google-pay',
                'fa-brands fa-google-drive',
                'fa-brands fa-google-play',
            ],
            // icons2: [
            //     'fa-brands fa-apple-pay',
            //     'fa-brands fa-napster',
            //     'fa-brands fa-windows',
            // ],
            // icons3: [
            //     'fa-brands fa-linux',
            //     'fa-brands fa-redhat',
            //     'fa-brands fa-ubuntu',
            // ],
            // icons4: [
            //     'fa-brands fa-google-pay',
            //     'fa-brands fa-google-drive',
            //     'fa-brands fa-google-play',
            // ],
        }
    }
}
</script>