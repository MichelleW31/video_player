<template>
  <div class="comment">
    <div class="placeholder_image">
      <img src="../assets/images/placeholder_avatar.png" alt="Placeholder Image">
    </div>
    <div class="comment-copy">
      <h4>{{name}}</h4>
      <TimeSince />
      <p>{{comment}}</p>
    </div>
  </div>
</template>

<script>
import TimeSince from './TimeSince'

export default {
  data: function () {
    return {
      name: 'Michelle Williams'
    }
  },
  name: 'Comment',
  props: [
    'submitted_comment',
    'comment'
  ],
  components: {
    TimeSince
  }
}
</script>

<style scoped>
  .comment {
    display: flex;
    margin-bottom: 45px;
  }

  .placeholder_image {
    margin-right: 30px;
    max-width: 169px;
    width: 100%;
  }

  img{
    width: 100%;
  }

  .comment-copy h4 {
    font-size: 1.9rem;
    text-align: left;
  }

  .comment-copy p {
    font-size: 1.8rem;
    text-align: left;
  }
</style>
