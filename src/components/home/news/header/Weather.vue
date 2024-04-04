<template>
    <div>
        <v-card class="mt-3 mr-1 rounded-xl">
            <v-row >
                <v-col class="d-flex align-center ml-1">
                    <i class="fa-solid fa-chevron-left pl-3"></i>
                    <i class="fa-regular light-blue--text fa-snowflake pl-7" style="font-size: 35px;"></i>
                </v-col>
                <!-- ----------------------------- -->
                <v-col class="text-left mr-5">
                    <v-row class="text-caption blue-grey--text">
                        Chennai
                        <i class="fa-solid fa-location-crosshairs pl-2 pt-1"></i> 
                    </v-row>
                    <v-row class="text-h5">30°C</v-row>
                    <v-row class="text-caption blue--text">More on weather.com</v-row>
                </v-col>
            </v-row>

        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Weather',
}
</script>