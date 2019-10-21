<template>
  <div class="header">
    <h2 class="header-title">Welcome, <span class="user">Michelle</span></h2>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    background: #009ddb;
    font-family: 'BrandonLight', Arial, sans-serif;
    padding: 50px 50px;
  }

  .header-title {
    color: white;
    font-weight: 100;
    font-size: 2.1rem;
    text-align: left;
  }

  .user{
    font-family: BrandonRegular, Arial, sans-serif;
  }
</style>
