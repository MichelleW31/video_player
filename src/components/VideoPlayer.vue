<template>
  <div class="video-player">
    {{selected_video}}
    <hr>
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
    })
  }
}
</script>

<style>
  .video-player {
    padding: 100px 50px;
  }
</style>
