<template>
  <div class="thumbnails">
    <div v-for="video in videos" :key="video.path">
      <img :src="require(`../assets/images/${video.path}.jpg`)" :alt="video.path">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['videos']
}
</script>
