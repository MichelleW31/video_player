<template>
  <div class="thumbnail-wrapper">
      <img v-for="video in videos" :key="video.path" @click="selectVideo(video.path)" class="thumbnails" :src="require(`../assets/images/${video.path}.jpg`)" :alt="video.path">
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  name: 'Thumbnails',
  props: ['videos'],
  methods: {
    selectVideo (video) {
      eventBus.$emit('videoSelected', video)
    }
  }
}
</script>

<style>
  .thumbnail-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 50px 30px 0;
  }

  .thumbnails {
    width: 29%;
  }
</style>
