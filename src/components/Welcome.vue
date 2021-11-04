<template>
    <div class='welcome-wrapper'>
        <div class="top-welcome">
            <div class="number-box">NV01</div>
            <h1>ようこそ</h1>
            <h2>Welcome to Navi Jisho</h2>
            <div class='red-bar'>
                <div class="double-arrows">
                    <i class="fas fa-angle-double-right"></i>
                </div>
                <div class="white-circle"></div>
                <div class="double-arrows">
                    <i class="fas fa-angle-double-right"></i>
                </div>
            </div>
            <h3>Navi Jisho is the easy to navigate Japanese dictionary.</h3>
            <h3>Search for a word using the search bar.</h3>
            <div class="circles-area">
                <div class='circle-group'>
                    <a class='link' href="#what-section">
                        <div class="circle" style='border-color: #A60606;'>
                            <p>What?</p>
                        </div>
                    </a>

                    <a class='link' href="#how-section">
                        <div class="circle" style='border-color: #F4C008;'>
                            <p>How?</p>
                        </div>
                    </a>
                </div>

                <div class='circle-group'>
                    <a class='link' href="#who-section">
                        <div class="circle" style='border-color: #07831A;'>
                            <p>Who?</p>
                        </div>
                    </a>

                    <a class='link' href="#thanks-section">
                        <div class="circle" style='border-color: #0663A6;'>
                            <p>Thanks</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="bottom-welcome">
            <hr />

            <div id='what-section' class="text-section">
                <div class="info-title">
                    <Bubble bgcolor='#A60606'/>
                    <h3>What is Navi Jisho?</h3>
                </div>
                <div class="text-area">
                    <p>Navi Jisho is the easy to navigate Japanese dictionary. Inspired by the layout and design of the Tokyo and Osaka metro systems, this dictionary is designed to help guide learners through the various meanings and definitions just as the signs on the metro help guide commuters from point A to point B.</p>
                </div>
            </div>

            <div id='how-section' class="text-section">
                <div class="info-title">
                    <Bubble bgcolor='#F4C008'/>
                    <h3>How do you use Navi Jisho?</h3>
                </div>
                <div class="text-area">
                    <p>Navi Jisho uses colour coded bubbles to help users easily understand each entry. The bubbles are colour coded as follows:</p>
                    <p><span style="color: #A60606;">Red bubbles</span> - Show the “parts of speech” for each definition. This is information about how the word functions. This could be whether the word is a noun, verb or adjective for example.</p>
                    <p><span style="color: #F4C008;">Yellow bubbles</span> - Simply number the number of definitions for each word.</p>
                    <p><span style="color: #07831A;">Green bubbles</span> - Tells us if a word is common.</p>
                    <p><span style="color: #0663A6;">Blue bubbles</span> - Indicate the JLPT (Japanese Language Proficiency Test) level for each word.</p>
                    <p><span style="color: #757575;">Grey bubbles</span> - Used to give us extra information about the definition. This could be whether the word is usually written using kana alone, or if the word is a vulgar expression for example.</p>
                    <p>Due to the small size of each bubble, only a short abbreviation is provided at first glance. To get a more detailed understanding of the information, hover over a particular bubble to see the full description.</p>
                </div>
            </div>
            
            <div id='who-section' class="text-section">
                <div class="info-title">
                    <Bubble bgcolor='#07831A'/>
                    <h3>Who made Navi Jisho?</h3>
                </div>
                <div class="text-area">
                    <p>Navi Jisho was created by Daniel Parsons (that's me), a web developer living in Japan.</p>
                </div>
            </div>
            
            <div id='thanks-section' class="text-section">
                <div class="info-title">
                    <Bubble bgcolor='#0663A6'/>
                    <h3>Special Thanks</h3>
                </div>
                <div class="text-area">
                    <p>Navi Jisho uses an API created by Jisho.org. Infomation about the API can be found here: https://jisho.org/forum/54fefc1f6e73340b1f160000-is-there-any-kind-of-search-api.</p>
                    <h4>Data Sources</h4>
                    <h5>JMdict</h5>
                    <p>JMdict, created by Jim Breen and now managed by the Electronic Dictionary Research and Development Group (EDRDG), is a great general dictionary with roughly 170 000 entries and is actively maintained by Jim Breen and a team of volunteers. This dictionary file is the source of the bulk of the words in Jisho.</p>
                    <h5>JMnedict</h5>
                    <p>JMnedict, also from Jim Breen/EDRDG, is an immense database of Japanese proper names for people, companies and locations.</p>
                    <h5>KANJIDIC2</h5>
                    <p>KANJIDIC2, also from Jim Breen/EDRDG, is a database of kanji that includes readings, meanings and a lot of metadata around kanji like lookup numbers for kanji dictionary books, stroke count and information about variant forms.</p>
                    <h5>RADKFILE</h5>
                    <p>RADKFILE, also from Jim Breen/EDRDG, is a database of the radicals that make up kanji. This is used to drive the radical lookup feature in Jisho.</p>
                    <h5>Tatoeba (Tanaka corpus)</h5>
                    <p>The example sentences in Jisho come from the Tatoeba project, which got them from a large collection of sentences compiled by Professor Yasuhito Tanaka at Hyogo University and his students, and later extensively edited by Jim Breen.</p>
                    <h5>KanjiVG</h5>
                    <p>Stroke order data for kanji come from the excellent KanjiVG project, by Ulrich Apel and several contributors.</p>
                    <h5>DBpedia</h5>
                    <p>Jisho includes articles from Wikipedia that have both a Japanese article and a corresponding English article. The data source for this is the fantastic DBpedia project.</p>
                    <h5>Jonathan Waller‘s JLPT Resources page</h5>
                    <p>Information about what word and kanji belong to which JLPT level comes from Jonathan Waller‘s JLPT Resources page.</p>
                    <h5>WaniKani audio</h5>
                    <p>Audio files in Jisho have been graciously provided by the awesome people at Tofugu from their sweet kanji learning application WaniKani.</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import Bubble from './Bubble.vue'

export default {
    name: 'Welcome',
    components: {
        Bubble
    }
}

</script>

<style scoped>

.welcome-wrapper {
    margin-top: 4rem;
}

.top-welcome {
    min-height: calc(100vh - 8rem); /* Change the rem value to change positioning */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.number-box {
    margin-left: auto;
    margin-right: 10vw;
    background-color: #585858;
    padding: 0.2rem 0.5rem 0 0.5rem;
    font-size: 2rem;
    color: white;
    border-radius: 20px;
    font-weight: bold;
}

@media (max-width: 600px) {
    .number-box {
        display: none;
    }
}

h1 {
    font-size: 4rem;
    margin: 0 1rem 0 1rem;
    position: relative;
    top: 15px;
}

@media (max-width: 450px) {
    h1{
        font-size: 3rem;
    }
}

h2 {
    margin: 0 1rem 0 1rem;
}

h3 {
    margin: 0 1rem 0 1rem;
}

.red-bar {
    height: 30px;
    width: 100vw;
    background-color: #A60606;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}

.double-arrows {
    color: white;
    font-size: 1.5rem;
    margin: 0.4rem 10vw 0 10vw;
}

.white-circle{
    background-color: #FAFAFA;
    height: 20px;
    width: 20px;
    border-radius: 50%;
}

.circles-area {
    display: flex;
    gap: 2rem;
    margin: 1rem 3rem 0 3rem;
    flex-wrap: wrap;
    justify-content: center;
}

.circle-group {
    display: flex;
    gap: 2rem;
}

.circle {
    border: solid 8px;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.link {
    all: unset;
}

@keyframes zoom-in {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}

.circle:hover {
    animation: zoom-in 0.4s forwards;
    cursor: pointer;
}

hr {
    margin-top: 5rem; /* Change height above line */
    width: 70%;
    background-color: #A60606;
    border: none;
    height: 2px;
}

.bottom-welcome {
    margin: 0 10vw;
    overflow-wrap: break-word;
}

.info-title {
    display: flex;
    align-items: center;
    margin-top: 2rem;
}

</style>