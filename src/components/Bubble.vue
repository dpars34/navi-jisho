<template>
    <div :style=style :class="`bubble ${tooltip ? 'hoverable' : ''}`" @click="bubbleClick">
        <div class="inner-text">
            {{text}}
        </div>

        <div v-if="tooltip" :style=tooltipStyle class="tooltip">
            <p class='tooltip-text'>{{tooltip}}</p>
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
            return `border: solid 1px ${this.bgcolor};`
        }
    },
    methods: {
        // SO THAT USERS CAN CLICK WHEN USING A MOBILE DEVICE
        bubbleClick () {

            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                
                const toolTip = document.querySelector('.tooltip')
    
                toolTip.style.animation = "tooltip 0.4s forwards"
                toolTip.style.animationDelay = "0.5s"
                toolTip.style.display = "inline-block;"
            }

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

.hoverable:hover {
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
    min-width: 8rem;
    position: relative;
    display: none;
    opacity: 0;
    color: black;
    font-size: 0.8rem;
    background-color: white;
    border-radius: 10px;
    padding: 0 0.5rem;
    line-height: normal;
    z-index: 10;
}

.tooltip-text {
    margin: 0.1rem 0;
    padding: 0;
}

</style>