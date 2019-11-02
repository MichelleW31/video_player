<template>
  <div id="app">
    <Header />
    <LogoBanner />
    <VideoPlayer />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import LogoBanner from './components/LogoBanner'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/icons/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    LogoBanner,
    VideoPlayer,
    Footer
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
    color: #393e3c;
    font-family: 'BrandonRegular', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .added{
    fill: #d0870e
  }
</style>
