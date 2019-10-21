<template>
  <div class="video-player">
    <h3>{{selected_video.title}}</h3>
    <div class="video">
      <video controls :src="require(`../assets/videos/${selected_video.path}.mp4`)"></video>
    </div>
    <hr />
    <Thumbnails :videos="videos"/>
  </div>
</template>

<script>
import { eventBus } from '../main'
import Thumbnails from './Thumbnails.vue'

export default {
  data: function () {
    return {
      selected_video: { title: 'Who is 24g', path: 'who_is_24g' }
    }
  },
  name: 'VideoPlayer',
  props: [
    'videos'
  ],
  components: {
    Thumbnails
  },
  created () {
    eventBus.$on('videoSelected', (video) => {
      this.selected_video = video
      console.log('from vp', video)
    })
  }
}
</script>

<style>
  .video-player {
    padding: 95px 50px;
  }

  h3 {
    color: #393e3c;
    font-size: 2.7rem;
    padding-bottom: 40px;
  }

  video{
    padding-bottom: 50px;
    width: 100%;
  }
</style>
