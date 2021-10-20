<template>
  <div>
    <Header @handle-submit="handleSubmit"/>
    <SearchBarArea />
    <Loading v-if='loading'/>
    <Results @handle-submit="handleSubmit" v-if="searched && !loading" :data="this.queryData" :query="this.searchQuery"/>
    <Welcome v-if="!searched && !loading"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Results from './components/Results.vue'
import Welcome from './components/Welcome.vue'
import Loading from './components/Loading.vue'
import SearchBarArea from './components/SearchBarArea.vue'

export default {
  name: 'App',
  components: {
    Header,
    Results,
    Welcome,
    Loading,
    SearchBarArea
  },
  data() {
    return {
      queryData: [],
      searchQuery: '',
      searched: false,
      loading: false
    }
  },
  methods: {
    async handleSubmit(query) {
      try {
        this.loading = true
        const response = await fetch(`http://localhost:5000/search/${query}`)
        const { data } = await response.json()
        this.queryData = data
        this.searched = true
        this.searchQuery = query
        console.log(data)
        this.loading = false
      } 
      catch(e) {
        console.log(e)
      }
    }
  },
  created() {
    this.handleSubmit('discover')
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  background-color: #FAFAFA;
}

#app {
  font-family: 'Hind', 'Noto Sans JP', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
