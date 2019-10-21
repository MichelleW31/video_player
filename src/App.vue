<template>
  <div id="app">
    <Header />
    <LogoBanner />
    <VideoPlayer :videos="videos"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LogoBanner from './components/LogoBanner.vue'
import VideoPlayer from './components/VideoPlayer'

export default {
  data: function () {
    return {
      videos: [
        { path: 'who_is_24g' },
        { path: 'future_of_drones' },
        { path: 'ces_overview' }
      ]
    }
  },
  name: 'app',
  components: {
    Header,
    LogoBanner,
    VideoPlayer
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
    margin: 0;
    padding: 0;
  }
</style>
