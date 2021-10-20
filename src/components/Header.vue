<template>
    <header>
        <div class="flex">
            <a href="/"><img class="navi-logo" src="../assets/navijisho-logo2.png" alt="navijisho logo"></a>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
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
}

.flex {
    display: flex;
    padding: 0.5rem 10vw 0 10vw;
}

.nav-link {
    margin: auto 1.3rem;
    font-weight: 300;
}

</style>