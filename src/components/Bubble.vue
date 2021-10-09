<template>
    <div :style=style class="bubble">
        <div class="inner-text">
            {{text}}
        </div>

        <div v-if="tooltip" :style=tooltipStyle class="tooltip">
            {{tooltip}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'Bubble',
    props: {
        color: String,
        bgcolor: String,
        text: [String, Number],
        fontsize: String,
        tooltip: String
    },
    computed: {
        style () {
            return `color: ${this.color}; background-color: ${this.bgcolor}; font-size: ${this.fontsize}`
        },

        tooltipStyle () {
            return `border: solid 3px ${this.bgcolor};`
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
    flex-shrink: 0;
}

.bubble:hover {
    cursor: pointer;
}

@keyframes tooltip {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.bubble:hover > .tooltip {
    animation: tooltip 0.4s forwards;
    animation-delay: 0.5s;
    display: inline-block;
}

.tooltip {
    position: relative;
    display: none;
    opacity: 0;
    color: black;
    font-size: 0.8rem;
    background-color: white;
    border-radius: 10px;
    padding: 0 0.5rem;
}



</style>