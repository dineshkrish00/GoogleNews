<template>
    <div>
        <v-row class="mb-7">
            <v-col>
                <v-row class="px-3 mb-1">
                    <v-div class="text-body-2 font-weight-medium">
                        <img src="https://static.toiimg.com/photo/92222747.cms" style="height: 10px; width: 120x;" alt="TOI">
                        <i class="fa-regular fa-newspaper pl-2"></i>
                    </v-div>
                    <v-spacer></v-spacer>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </v-row>
                <v-row class="px-3">
                    <div class="text-body-1">
                        Lorem ipsum dolor sit amet consectetur aui.
                    </div>
                    <div class="text-caption">12 hours ago</div>
                </v-row>
                <v-divider class="my-1" style="position: relative; top: 15px;"></v-divider>
            </v-col>

            <v-col cols="4" class="d-flex justify-center align-start pa-0 ">
                <img style="height: 75px; width: 75px; object-fit: cover; border-radius: 15px;"
                    src="https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image">
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default{
    name: 'OtherLocalNews',
}
</script>

