<template>
  <div class="likes-dislikes">
    <div class="likes">
      <LikeIcon :addLike="addLike" :selected_video="selected_video"/>
      <h4 class="likes-copy">{{selected_video.likes}}</h4>
    </div>
    <div class = "dislikes">
      <DislikeIcon :addDislike="addDislike" :selected_video="selected_video"/>
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
  methods: {
    postCall (call, id) {
      axios.put('http://localhost:8081/videos/' + call + id).then(response => {
        let video = response.data[0]
        this.$emit('newVideoLikes', video)
      })
        .catch(error => {
          console.log('error', error)
        })
    },
    addLike (id) {
      let likeIcon = document.getElementById('like')
      if (!likeIcon.classList.contains('added')) {
        this.postCall('addLikes', id)
      } else {
        this.postCall('subtractLikes', id)
      }
      likeIcon.classList.toggle('added')
    },
    addDislike (id) {
      let dislikeIcon = document.getElementById('dislike')
      if (!dislikeIcon.classList.contains('added')) {
        this.postCall('addDislikes', id)
      } else {
        this.postCall('subtractDislikes', id)
      }
      dislikeIcon.classList.toggle('added')
    }
  },
  computed: {
    newVideo () {
      return this.selected_video.vid_name
    }
  },
  watch: {
    newVideo () {
      let likeIcon = document.getElementById('like')
      let dislikeIcon = document.getElementById('dislike')
      likeIcon.classList.remove('added')
      dislikeIcon.classList.remove('added')
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
