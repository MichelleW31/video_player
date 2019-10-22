<template>
  <div id="app">
    <Header />
    <LogoBanner />
    <VideoPlayer :selected_video="selected_video" :videos="videos"/>
    <div class="views-and-likes">
      <Views :selected_video="selected_video" />
    </div>
    <Thumbnails :videos="videos" @videoSelected="selected_video=$event"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LogoBanner from './components/LogoBanner.vue'
import VideoPlayer from './components/VideoPlayer'
import Thumbnails from './components/Thumbnails'
import Views from './components/Views'

export default {
  data: function () {
    return {
      videos: [
        { title: 'Who Is 24g', path: 'who_is_24g', views: 0, likes: 0 },
        { title: 'Future of Drones', path: 'future_of_drones', views: 0, likes: 0 },
        { title: 'Ces Overview', path: 'ces_overview', views: 0, likes: 0 }
      ],
      selected_video: {}
    }
  },
  name: 'app',
  components: {
    Header,
    LogoBanner,
    VideoPlayer,
    Thumbnails,
    Views
  },
  methods: {
    increaseViews () {
      this.selected_video.views += 1
    }
  },
  watch: {
    selected_video: function (val) {
      this.increaseViews()
    }
  },
  created () {
    this.selected_video = this.videos[0]
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
