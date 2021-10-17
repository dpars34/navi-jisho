<template>
    <div class='single-result-wrapper'>
        <div class="result-head">
            <div class="head-left">
                <p class='reading-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].reading : null}}</p>
                <h2 class='word-heading'>{{result.japanese[0].word !== undefined ? result.japanese[0].word : result.japanese[0].reading }}</h2>
                <div class="head-bubble-area">
                    <Bubble v-if="result.is_common" color="#FAFAFA" bgcolor="#07831A" text="C " fontsize="1.4rem" tooltip="Common Word"/>
                    <Bubble v-if="result.jlpt.length >= 1" color="#FAFAFA" bgcolor="#0663A6" :text="jlptRender(this.result.jlpt[0])" fontsize="1.4rem" :tooltip="`JLPT Level: ${jlptRender(this.result.jlpt[0])}`"/>
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
                    <div class="right-of-number">
                        <div class="definition">
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
                        <div class="right-bubbles">
                            <div class="parts-of-speech-bubbles" :key='part' v-for='part in sense.parts_of_speech'>
                                <Bubble color="#FAFAFA" bgcolor="#A60606" :text="partsOfSpeechRender(part)" fontsize="1rem" :tooltip="part"/>
                            </div>
                            <div class="tags-bubbles" :key='tag' v-for='tag in sense.tags'>
                                <Bubble color="#FAFAFA" bgcolor="#757575" :text="tagsRender(tag)" fontsize="1rem" :tooltip="tag"/>
                            </div>
                            <div @click='openLink(sense.links[0].url)' v-if="sense.links.length > 0" class="wiki-arrow">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if='result.japanese.length > 1' class="other-forms-area">
                <div class="other-forms-title-area">
                    <i class="fas fa-arrow-down arrow-down"></i>
                    <p class='other-forms-title'>Other forms</p>
                </div>
                <div class="other-forms-list" :key='form' v-for="(form, index) in result.japanese">
                    <p class='single-form-text'><b>{{form.word}}</b> ({{form.reading}})</p>
                    <pre class='single-form-text' v-if="index !== (result.japanese.length - 1)">  /  </pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Bubble from './Bubble.vue'
import { jlptRender, partsOfSpeechRender, tagsRender } from '../helperFunctions'

export default {
    name: 'SingleResult',
    props: {
        result: Object
    },
    methods: {
        jlptRender(param) {
            return jlptRender(param)
        },
        partsOfSpeechRender(param) {
            return partsOfSpeechRender(param)
        },
        tagsRender(param) {
            return tagsRender(param)
        },
        openLink (url) {
            window.open(url, '_blank').focus()
        }
    },
    components: {
        Bubble
    },
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

.right-of-number {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.definition {
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

.right-bubbles {
    display: flex;
    gap: 0.5rem;
}

.wiki-arrow {
    all: unset;
    font-size: 1.5rem;
    color: #474747;
    position: relative;
    top: 3px;
}

@keyframes zoom-in {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(0.2rem);
    }
}

.wiki-arrow:hover {
    animation: zoom-in 0.3s forwards;
    cursor: pointer;
}

.other-forms-area {
    margin: 1.5rem 1rem 1rem calc(1rem + 10px);
    max-width: 700px;
}

.arrow-down {
    font-size: 1.5rem;
    color: #474747;
}

.other-forms-title-area {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.other-forms-title {
    display: inline-block;
    margin-left: 1rem;
}

.other-forms-list {
    display: inline-block;
}

.single-form-text {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: 'Hind', Arial, sans-serif;
}

</style>