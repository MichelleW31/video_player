<template>
  <div class="comments">
    <h4 class="comments-title">Comments</h4>
    <textarea name="comments" id="comments" cols="90" rows="10" placeholder="Type up a sweet comment..."></textarea>
    <p id="error-message" class="no-display">Please enter a comment to submit.</p>
    <div class="submit-wrapper">
      <button class="submit" @click="submitComment">add comment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  methods: {
    submitComment () {
      let textArea = document.getElementById('comments')
      let error = document.getElementById('error-message')
      if (textArea.value === '') {
        error.classList.remove('no-display')
      } else {
        error.classList.add('no-display')
        textArea.value = ''
      }
    }
  }
}
</script>

<style>
  .comments {

  }

  .comments-title {
    font-size: 2.3rem;
    margin: 40px 0;
    text-align: left;
  }

  #comments {
    border: 2px solid #d1d1d1;
    height: 220px;
    width: 100%;
  }

  #comments::placeholder {
    font-family: BrandonLight, Arial, sans-serif;
    font-size: 2.2rem;
    padding: 30px;
  }

  .no-display {
    visibility: hidden;
  }

  #error-message {
    color: red;
  }

  .submit-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .submit {
    background: #faa61a;
    border: none;
    color: #fff;
    font-family: BrandonLight, Arial, sans-serif;
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin-top: 25px;
    padding: 10px 0;
    text-align: center;
    width: 75%;
  }
</style>
