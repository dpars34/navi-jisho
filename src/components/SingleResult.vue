<template>
    <div class='single-result-wrapper'>
        <div class="result-head">
            <div class="head-left">
                <p class='reading-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].reading : null}}</p>
                <h2 class='word-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].word : result.japanese[0].reading }}</h2>
                <div class="head-bubble-area">
                    <Bubble v-if="result.is_common" color="#FAFAFA" bgcolor="#07831A" text="C " fontsize="1.4rem" tooltip="Common Word"/>
                    <Bubble v-if="result.jlpt.length >= 1" color="#FAFAFA" bgcolor="#0663A6" :text="this.jlpt" fontsize="1.4rem" :tooltip="`JLPT Level: ${this.jlpt}`"/>
                </div>
            </div>
            <div class='head-right'>
                <div class='head-definition-list' :key="meaning" v-for="(meaning, index) in result.senses[0].english_definitions">
                    <p class='head-definition-text'>{{meaning}}</p>
                    <pre class='head-definition-text' v-if="index !== (result.senses[0].english_definitions.length - 1)"> / </pre>
                </div>
            </div>
        </div>

        <div class='result-body'>
            <div class="definitions">
                <div class='body-definition-area' :key="sense.english_definitions" v-for="(sense, index) in result.senses">
                    <Bubble class='definition-number-bubble' color="#111111" bgcolor="#F4C008" :text="index + 1" fontsize="1.4rem"/>
                    <div class="bubble-right">
                        <div class='body-definition-list' :key="meaning" v-for="(meaning, index) in sense.english_definitions">
                            <p class='body-definition-text'>{{meaning}}</p>
                            <pre class='body-definition-text' v-if="index !== (sense.english_definitions.length - 1)"> / </pre>
                        </div>
                        <div v-if="sense.see_also.length > 0" class="see-also-area">
                            <p class='see-also-text'>see also:<pre class='see-also-text'> </pre></p>
                            <div class='see-also-list' :key='alternative' v-for='(alternative, index) in sense.see_also'>
                                <p class='see-also-text'>{{alternative}}</p>
                                <pre class='see-also-text' v-if="index !== (sense.see_also.length - 1)"> / </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Bubble from './Bubble.vue'
import { jlptRender } from '../helperFunctions'

export default {
    name: 'SingleResult',
    props: {
        result: Object
    },
    data() {
        return {
            jlpt: ''
        }
    },
    components: {
        Bubble
    },
    created() {
        this.jlpt = jlptRender(this.result.jlpt[0])
    }
}
</script>

<style>

.single-result-wrapper {
    margin: 0 0 4rem 0;
}

.result-head {
    border-left: solid #D7D7D7 10px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
}

.head-left {
    white-space: nowrap;
}

.reading-heading {
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    top: 5px;
    font-size: 1.2rem;
}

.word-heading {
    margin: 0;
    padding: 0;
    font-size: 2.4rem;
}

.head-bubble-area {
    display: flex;
    column-gap: 0.5rem;
    -moz-column-gap: 0.5rem;
    -webkit-column-gap: 0.5rem;
}

.head-right {
    margin-left: 2rem;
}

.head-definition-list {
    display: inline-block;
    font-size: 2rem;
    vertical-align: middle;
}

.head-definition-text {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: 'Hind', Arial, sans-serif;
}

.definition-number-bubble {
    display: inline-block;
    margin-right: 1rem;
}

.bubble-right {
    margin-top: 6px;
}

.body-definition-area {
    margin: 1.5rem 1rem 1rem calc(1rem + 10px);
    display: flex;
}

.body-definition-list {
    display: inline-block;
}

.body-definition-text {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: 'Hind', Arial, sans-serif;
}

.see-also-area {
    color: #7B7B7B;
}

.see-also-list {
    display: inline-block;
}

.see-also-text {
    display: inline-block;
    margin: 1rem 0 0 0;
    padding: 0;
    font-family: 'Hind', Arial, sans-serif;
}

</style>