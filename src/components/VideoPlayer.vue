<template>
  <div class="video-player">
    <h3>{{selected_video.title}}</h3>
    <div class="video">
      <video :id="`${selected_video.path}_video`" controls :src="require(`../assets/videos/${selected_video.path}.mp4`)" ></video>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  props: [
    'videos',
    'selected_video'
  ]
  // updated () {
  //   let video = this.selected_video
  //   let v = document.getElementById(`${this.selected_video.path}_video`)
  //   v.addEventListener('play', function () {
  //     // this.$emit('videoWasViewed', views)
  //     console.log(v)
  //     // console.log(video)
  //     // console.log('inside event listener', video.title, video.views)
  //   })
  // }
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
