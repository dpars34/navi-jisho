<template>
    <div :style=style class="bubble">
        {{text}}
    </div>
</template>

<script>

export default {
    name: 'Bubble',
    props: {
        color: String,
        bgcolor: String,
        text: [String, Number],
        fontsize: String
    },
    computed: {
        style () {
            return `color: ${this.color}; background-color: ${this.bgcolor}; font-size: ${this.fontsize}`
        }
    }
}

</script>

<style scoped>

.bubble {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color:black;
    text-align: center;
    vertical-align: middle;
    line-height: 39px;
    font-family: 'Hind', Arial, sans-serif;
}



</style>