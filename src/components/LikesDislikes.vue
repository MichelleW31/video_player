<template>
  <div class="likes-dislikes">
    <div class="likes">
      <LikeIcon :addLike="addLike" :selected_video="selected_video"/>
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
import axios from 'axios'

export default {
  name: 'LikesDislikes',
  props: ['selected_video'],
  components: {
    LikeIcon,
    DislikeIcon
  },
  computed: {
    newVideo () {
      return this.selected_video
    }
  },
  methods: {
    addLike (id) {
      // Need to set it up so that when like is updating with the database instantly on front end
      let likeIcon = document.getElementById('like')
      if (!likeIcon.classList.contains('added')) {
        axios.put('http://localhost:8081/videos/' + id).then(response => {
          let video = response.data[0]
          this.$emit('newVideoLikes', video)
        })
          .catch(error => {
            console.log('error', error)
          })
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
