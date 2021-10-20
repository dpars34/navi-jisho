<template>
    <div class="search-bar-area">
        <SearchBar @handle-submit="handleSubmit"/>
    </div>
</template>

<script>

import SearchBar from './SearchBar.vue'
    
export default {
    name: 'SearchBarArea',
    components: {
        SearchBar
    },
    methods: {
        handleSubmit(query) {
            this.$emit('handle-submit', query)
        }
    }
}

</script>

<style scoped>

.search-bar-area {
    margin: 1rem 10vw 2rem 10vw;
    position: sticky;
}

</style>