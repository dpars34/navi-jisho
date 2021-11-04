<template>
    <header>
        <div class="flex">
            <a href="/"><img class="navi-logo" src="../assets/navijisho-logo2.png" alt="navijisho logo"></a>
            <a href="/"><img class="navi-mobile-logo" src="../assets/navijisho-mobile-logo.png" alt="navijisho logo"></a>
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
    position: fixed;
    top: 0;
    background-color: #FAFAFA;
    z-index: 99;
    width: 100%;
    border-bottom: solid 1px #D7D7D7;
}

.navi-logo {
    height: 45px;
    margin: .5rem 2rem 0 0;
}

@media (max-width: 600px) {
    .navi-logo {
        display: none;
    }
}

.navi-mobile-logo {
    height: 40px;
    margin: 1rem 2rem 0 0;
}

@media (min-width: 600px) {
    .navi-mobile-logo {
        display: none;
    }
}

.flex {
    display: flex;
    padding: 0 10vw 0 10vw;
}

.nav-link {
    margin: auto 1.3rem;
    font-weight: 300;
}

</style>