<template>
  <div id="app">
  <lm-main-wrapper>

  </lm-main-wrapper>
  </div>
</template>

<script>
import lmMainWrapper from './components/lm-main-wrapper'

export default {
  name: 'App',
  components: {
    lmMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
