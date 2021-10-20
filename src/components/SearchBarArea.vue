<template>
    <div class="search-bar-area">
        <SearchBar />
    </div>
</template>

<script>

import SearchBar from './SearchBar.vue'
    
export default {
    name: 'SearchBarArea',
    components: {
        SearchBar
    }
}

</script>

<style scoped>

.search-bar-area {
    margin: 5rem 10vw 2rem 10vw;
}

</style>