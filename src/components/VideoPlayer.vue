<template>
  <div class="video-player">
    <h3>{{selected_video}}</h3>
    <div class="video">
      <video controls :src="require(`../assets/videos/${selected_video}.mp4`)"></video>
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
      selected_video: 'who_is_24g'
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
    padding: 100px 50px;
  }
  video{
    width: 70%;
  }
</style>
