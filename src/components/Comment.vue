<template>
  <div class="comment">
    <h4>{{comment}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: [
    'submitted_comment',
    'comment'
  ]
}
</script>

<style>
</style>
