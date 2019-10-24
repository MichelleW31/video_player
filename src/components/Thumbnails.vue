<template>
  <div class="thumbnail-wrapper">
      <img v-for="video in videos" :key="video.path" @click="selectVideo(video)" class="thumbnails" :src="require(`../assets/images/${video.path}.jpg`)" :alt="video.path">
  </div>
</template>

<script>

export default {
  name: 'Thumbnails',
  props: ['videos'],
  methods: {
    selectVideo (video) {
      this.$emit('videoSelected', video)
    }
  }
}
</script>

<style scoped>
  .thumbnail-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 50px 30px 0;
  }

  .thumbnails {
    width: 29%;
  }

  @media (min-width: 900px) {
    .thumbnail-wrapper {
      align-items: flex-end;
      flex-direction: column;
      padding: 0;
    }

    .thumbnails {
      margin-bottom: 32px;
      width: 80%;
    }
  }
</style>
