<template>
  <div>
    <Header />
    <SearchBar @handle-submit="handleSubmit"/>
    <Results :data="this.queryData"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    Results
  },
  data() {
    return {
      queryData: []
    }
  },
  methods: {
    async handleSubmit(query) {
      try {
        const response = await fetch(`http://localhost:5000/search/${query}`)
        const { data } = await response.json()
        this.queryData = data
        console.log(data)
      } 
      catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Hind', Arial, sans-serif;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
