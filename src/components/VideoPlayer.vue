<template>
  <div id = video_player>
    <div class="video-player">
      <h3>{{selected_video.title}}</h3>
      <div class="video">
        <video :id="`${selected_video.path}_video`" controls :src="require(`../assets/videos/${selected_video.path}.mp4`)" ></video>
      </div>
    </div>
    <div class="views-and-likes">
      <h4>{{selected_video.views}} views</h4>
      <LikesDislikes :selected_video="selected_video"/>
    </div>
    <hr>
    <Thumbnails :videos="videos" @videoSelected="selected_video=$event" />
  </div>
</template>

<script>
import Thumbnails from './Thumbnails.vue'
import LikesDislikes from './LikesDislikes'

let videos = [
  { title: 'Who Is 24G', path: 'who_is_24g', views: 0, likes: 0, dislikes: 0 },
  { title: 'Future of Drones', path: 'future_of_drones', views: 0, likes: 0, dislikes: 0 },
  { title: 'Ces Overview', path: 'ces_overview', views: 0, likes: 0, dislikes: 0 }
]
export default {
  data: function () {
    return {
      videos,
      selected_video: {}
    }
  },
  name: 'VideoPlayer',
  components: {
    Thumbnails,
    LikesDislikes
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
  created () {
    this.selected_video = this.videos[0]
  }

}
</script>

<style>
  #video_player{
    padding: 95px 50px 0;
  }

  h3 {
    font-size: 2.7rem;
    padding-bottom: 40px;
  }

  h4 {
    font-size: 1.6rem;
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
</style>
