<template>
  <div class="thumbnails">
    <div v-for="video in videos" :key="video.path">
      {{video.path}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['videos']
}
</script>
