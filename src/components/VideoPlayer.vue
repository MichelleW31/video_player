<template>
  <div class="video-player">

    <Thumbnails :videos="videos"/>
  </div>
</template>

<script>
import Thumbnails from './Thumbnails.vue'

export default {
  name: 'VideoPlayer',
  props: [
    'videos'
  ],
  components: {
    Thumbnails
  }
}
</script>
