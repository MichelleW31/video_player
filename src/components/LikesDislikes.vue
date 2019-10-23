<template>
  <div class="likes-dislikes">
    <div class="likes">
      <LikeIcon :addLike="addLike"/>
      <h4>{{selected_video.likes}}</h4>
    </div>
    <div class = "dislikes">
      <DislikeIcon :addDislike="addDislike" />
      <h4>{{selected_video.dislikes}} </h4>
    </div>
  </div>
</template>

<script>
import LikeIcon from './icons/LikeIcon.vue'
import DislikeIcon from './icons/DislikeIcon.vue'

export default {
  name: 'LikesDislikes',
  props: ['selected_video'],
  components: {
    LikeIcon,
    DislikeIcon
  },
  methods: {
    addLike () {
      this.selected_video.likes += 1
    },
    addDislike () {
      this.selected_video.dislikes += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .likes-dislikes {
    display: flex;
  }

  .likes, .dislikes {
    align-items: center;
    display: flex;
  }

  .likes {
    margin-right: 30px;
  }

  h4 {
    color: #faa61a;
  }
</style>
