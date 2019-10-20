<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  * {
    padding : 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html{
    font-size: 2.5vw;
  }

  @font-face {
    font-family: 'BrandonRegular';
    src: url("assets/fonts/BRANDON_REG.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BrandonLight';
    src: url("assets/fonts/BRANDON_LIGHT.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BrandonMedium';
    src: url("assets/fonts/BRANDON_MED.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BrandonBold';
    src: url("assets/fonts/BRANDON_BLD.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BrandonBlack';
    src: url("assets/fonts/BRANDON_BLK.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
</style>
