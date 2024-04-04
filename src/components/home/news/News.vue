<template>
    <div>
        <NewsHeader></NewsHeader>
        <Story></Story>
    </div>
</template>

<script>
import NewsHeader from './header/NewsHeader.vue';
import Story from './story/Story.vue';
export default{
    name: 'News',
    components: {
        NewsHeader,
        Story,
    }
}
</script>