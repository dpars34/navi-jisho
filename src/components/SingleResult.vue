<template>
    <div class='single-result-wrapper'>
        <p class='reading-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].reading : null}}</p>
        <h2 class='word-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].word : result.japanese[0].reading }}</h2>
        <p>{{result.senses[0].english_definitions[0]}}</p>
    </div>
</template>

<script>

export default {
    name: 'SingleResult',
    props: {
        result: Object
    }
}

</script>