<template>
  <div class="likes-dislikes">
    <div class="likes">
      <LikeIcon :addLike="addLike"/>
      <h4 class="likes-copy">{{selected_video.likes}}</h4>
    </div>
    <div class = "dislikes">
      <DislikeIcon :addDislike="addDislike" />
      <h4 class="dislikes-copy">{{selected_video.dislikes}} </h4>
    </div>
  </div>
</template>

<script>
import LikeIcon from './icons/LikeIcon.vue'
import DislikeIcon from './icons/DislikeIcon.vue'
// import axios from 'axios'

export default {
  name: 'LikesDislikes',
  props: ['selected_video'],
  components: {
    LikeIcon,
    DislikeIcon
  },
  methods: {
    addLike () {
      // axios.post('http://localhost:8081/videos').then(response => {
      //   console.log(response)
      // })
      //   .catch(error => {
      //     console.log('error', error)
      //   })
      let likeIcon = document.getElementById('like')
      if (!likeIcon.classList.contains('added')) {
        this.selected_video.likes += 1
      }
      likeIcon.classList.toggle('added')
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

  .likes-copy, .dislikes-copy {
    font-size: 2.1rem;
  }

  h4 {
    color: #faa61a;
  }

  @media (min-width: 900px) {
    .likes-copy, .dislikes-copy {
      font-size: 1rem;
    }
  }
</style>
