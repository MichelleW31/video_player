<template>
  <div class="views-wrapper">
    <h3>{{selected_video.title}} , {{selected_video.views}} Views</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Views',
  props: ['selected_video']
}
</script>

<style>
  .views-wrapper {
    padding: 0 50px;
  }

  h3 {
    padding-bottom: 40px;
  }
</style>
