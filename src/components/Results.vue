<template>
    <div class="results-wrapper">
        <div :key="result.slug" v-for="result in data"> 
            <SingleResult :result="result"/>
        </div>
    </div>
</template>

<script>

import SingleResult from './SingleResult.vue'

export default {
    name: 'Results',
    components: {
        SingleResult
    },
    props: {
        data: Array
    }
}

</script>

