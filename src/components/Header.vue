<template>
    <header>
        <div class="flex">
            <img class="navi-logo" src="../assets/navijisho-logo2.png" alt="navijisho logo">
            <SearchBar @handle-submit="handleSubmit"/>
        </div>
    </header>
</template>

<script>

import SearchBar from './SearchBar.vue'

export default {
    name: 'Header',
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

header {
    padding: 0.5rem 10vw 0 10vw;
}

.navi-logo {
    height: 50px;
    margin: .5rem 2rem .5rem 0;
}

.flex {
    display: flex;
}

.nav-link {
    margin: auto 1.3rem;
    font-weight: 300;
}

</style>