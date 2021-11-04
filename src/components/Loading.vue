<template>
    <div class='loading-wrapper'>
        <div class="bubble-box">
            <Bubble class='bubble1' bgcolor="#A60606"/>
            <Bubble class='bubble2' bgcolor="#F4C008"/>
            <Bubble class='bubble3' bgcolor="#07831A"/>
            <Bubble class='bubble4' bgcolor="#0663A6"/>
        </div>
        <h1>Loading...</h1>
    </div>
</template>

<script>

import Bubble from './Bubble.vue'

export default {
    name: 'Loading',
    components: {
        Bubble
    }
}

</script>

<style scoped>

.loading-wrapper {    
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.bubble-box {
    display: flex;
    gap: 1rem;
    animation: bounce ease-in;
    padding-top: 4rem;
}

@keyframes bounce {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.95)   translateY(0); }
        30%  { transform: scale(.95,1.1)   translateY(-30px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }

.bubble1 {
    animation: bounce ease-in 1s infinite;
}

.bubble2 {
    animation: bounce ease-in 1s infinite;
    animation-delay: 250ms;
}

.bubble3 {
    animation: bounce ease-in 1s infinite;
    animation-delay: 500ms;
}

.bubble4 {
    animation: bounce ease-in 1s infinite;
    animation-delay: 750ms;
}

</style>