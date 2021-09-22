<template>
    <div class="flex">
        <div class="search-bar-wrapper">
            <form @submit="handleSubmit">
                <input v-model="query" class="search-bar" name="search-bar" type="text" autocomplete="off" placeholder="Search for something...">
                <button class="search-button" type="submit"><i class="fas fa-arrow-right"></i></button>
            </form>
            <div class="underline"></div>
        </div>
    
    </div>
</template>

<script>

export default {
    name: 'SearchBar',
    data() {
        return {
            query: ''
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()

            this.$emit('handle-submit', this.query)
        }
    }
}
</script>

<style scoped>

.flex {
    display: flex;
    width: 100%;
}

.search-bar-wrapper{
    margin: 0.5rem 0;
    width: 100%;
}

.search-bar {
    all: unset;
    padding: 0.5rem;
    margin-left: 0.5rem;
    width: calc(100% - 50px);
}

.underline {
    height: 5px;
    width: 100%;
    background: #A60606;
    transform: skewX(-45deg);
}

.search-button {
    all: unset;
    font-size: 1.5rem;
    color: #474747;
    position: relative;
    top: 3px;
}

</style>