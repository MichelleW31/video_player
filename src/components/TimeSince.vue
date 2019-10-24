<template>
  <div class="time-since-wrapper">
    <p>{{timeSent}}</p>
  </div>
</template>

<script>
export default {
  name: 'TimeSince',
  computed: {
    timeSent: function () {
      return new Date().getTime() / 1000
    }
  }
}
</script>

<style scoped>
  p {
    color: #d1d1d1;
    font-size: 1.8rem;
    text-align: left;
  }

  @media (min-width: 900px) {
    p {
      font-size: 1rem;
    }
  }
</style>
