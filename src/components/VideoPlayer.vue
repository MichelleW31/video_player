<template>
  <div id = video_player_wrapper>
    <h3>{{selected_video.vid_name}}</h3>
    <div class="vid-and-thumbnails">
      <div class="video-player">
        <div class="video">
          <video :id="`${selected_video.vid_name.toLowerCase().replace(/ /g,'_')}_video`" controls :src="require(`../assets/videos/${selected_video.vid_name.toLowerCase().replace(/ /g,'_')}.mp4`)" ></video>
        </div>
        <div class="views-and-likes">
          <h4 class="views-copy">{{selected_video.vid_views}} views</h4>
          <LikesDislikes :selected_video="selected_video"/>
        </div>
        <hr>
      </div>
      <div class="thumbnails-wrapper">
        <Thumbnails :videos="videos" @videoSelected="selected_video=$event" />
      </div>
    </div>
    <Comments :selected_video="selected_video"/>
  </div>
</template>

<script>
import Thumbnails from './Thumbnails.vue'
import LikesDislikes from './LikesDislikes'
import Comments from './Comments'
import axios from 'axios'

export default {
  data: function () {
    return {
      videos: [],
      selected_video: { vid_id: 1, vid_name: 'default', vid_views: 0, likes: 0, dislikes: 0, comments: [] }
    }
  },
  name: 'VideoPlayer',
  components: {
    Thumbnails,
    LikesDislikes,
    Comments
  },
  methods: {
    increaseViews () {
      this.selected_video.views += 1
    }
  },
  watch: {
    selected_video: function () {
      this.increaseViews()
    }
  },
  beforeCreate () {
    axios.get('http://localhost:8081/videos').then(response => {
      this.videos = response.data
      this.selected_video = this.videos[0]
    })
      .catch(error => {
        console.log('error', error)
      })
  }

}
</script>

<style scoped>
  #video_player_wrapper{
    padding: 95px 50px 0;
  }

  h3 {
    font-size: 2.7rem;
    padding-bottom: 40px;
  }

  .views-copy {
    font-size: 2.2rem;
  }

  video{
    padding-bottom: 30px;
    width: 100%;
  }

  .views-and-likes {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }

  @media (min-width: 900px) {
    #video_player_wrapper{
      padding: 145px 100px 0;
    }

    .vid-and-thumbnails {
      display: flex;
    }

    h3 {
      font-size: 1.3rem;
      text-align: left
    }

    .thumbnails-wrapper {
      width: 27%;
    }

    .views-copy {
      font-size: 1rem;
    }
  }
</style>
