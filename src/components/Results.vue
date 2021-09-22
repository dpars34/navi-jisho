<template>
    <div class="results-wrapper">
        <h2>Results for "{{query}}"</h2>
        <div :key="result.slug" v-for="result in data"> 
            <SingleResult :result="result"/>
        </div>
    </div>
</template>

<script>

import SingleResult from './SingleResult.vue'

export default {
    name: 'Results',
    components: {
        SingleResult
    },
    props: {
        data: Array,
        query: String
    }
}
</script>

<style scoped>

.results-wrapper {
    margin: 0 10vw 0 10vw;
}

</style>