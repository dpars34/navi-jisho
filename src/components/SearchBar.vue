<template>
    <div class="search-bar-wrapper">
        <form @submit="handleSubmit">
            <input v-model="query" class="search-bar" name="search-bar" type="text" autocomplete="off">
            <input type="submit" value="Search">
        </form>
    </div>
</template>

<script>

export default {
    name: 'SearchBar',
    data() {
        return {
            query: 'hello'
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