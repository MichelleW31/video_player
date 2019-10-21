<template>
  <div class="thumbnail-wrapper">
      <img v-for="video in videos" :key="video.path" class="thumbnails" :src="require(`../assets/images/${video.path}.jpg`)" :alt="video.path">
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['videos']
}
</script>

<style>
  .thumbnail-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 50px 80px 0;
  }

  .thumbnails {
    width: 29%;
  }
</style>
