<template>
  <div>
    <div class="video-player">
      <h3>{{selected_video.title}}</h3>
      <div class="video">
        <video :id="`${selected_video.path}_video`" controls :src="require(`../assets/videos/${selected_video.path}.mp4`)" ></video>
      </div>
    </div>
    <Thumbnails :videos="videos" @videoSelected="selected_video=$event" />
    <div class="views-and-likes">
      <h3>{{selected_video.views}} Views</h3>
      <h3>{{selected_video.likes}} Likes {{selected_video.dislikes}} Dislikes</h3>
    </div>
  </div>
</template>

<script>
import Thumbnails from './Thumbnails.vue'

let videos = [
  { title: 'Who Is 24g', path: 'who_is_24g', views: 0, likes: 0, dislikes: 0 },
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
    Thumbnails
  },
  methods: {
    increaseViews () {
      this.selected_video.views += 1
    }
  },
  watch: {
    selected_video: function (val) {
      this.increaseViews()
    }
  },
  created () {
    this.selected_video = this.videos[0]
  }

}
</script>

<style>
  .video-player {
    padding: 95px 50px 0;
  }

  h3 {
    color: #393e3c;
    font-size: 2.7rem;
    padding-bottom: 40px;
  }

  video{
    padding-bottom: 30px;
    width: 100%;
  }
</style>
