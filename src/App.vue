<template>
  <div class="page-container">

    <Header @handle-submit="handleSubmit"/>

    <div class="content">
      <Loading v-if='loading'/>
      <Results @handle-submit="handleSubmit" v-if="searched && !loading" :data="this.queryData" :query="this.searchQuery"/>
      <NoResults v-if="failed"/>
      <Welcome v-if="!searched && !loading"/>
    </div>
    
    <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Results from './components/Results.vue'
import Welcome from './components/Welcome.vue'
import Loading from './components/Loading.vue'
import Footer from './components/Footer.vue'
import NoResults from './components/NoResults.vue'

export default {
  name: 'App',
  components: {
    Header,
    Results,
    Welcome,
    Loading,
    Footer,
    NoResults
  },
  data() {
    return {
      queryData: [],
      searchQuery: '',
      searched: false,
      loading: false,
      failed: false
    }
  },
  methods: {
    async handleSubmit(query) {
      try {
        this.loading = true
        this.failed = false;
        const response = await fetch(`http://localhost:5000/search/${query}`)
        const { data } = await response.json()

        if (data.length === 0) {
          this.failed = true
        }

        this.queryData = data
        this.searched = true
        this.searchQuery = query
        console.log(data)
        this.loading = false
        window.scrollTo(0, 0)
      } 
      catch(e) {
        console.log(e)
      }
    }
  },
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  background-color: #FAFAFA;
}

:root {
  scroll-padding-top: 75px;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Hind', 'Noto Sans JP', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}


</style>
