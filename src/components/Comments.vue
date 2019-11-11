<template>
  <div class="comments-wrapper">
    <h4 class="comments-title">Comments</h4>
    <textarea name="comments" id="comments" cols="90" rows="10" placeholder="Type up a sweet comment..."></textarea>
    <p id="error-message" class="no-display">Please enter a comment to submit.</p>
    <div class="submit-wrapper">
      <button class="submit" @click="submitComment(selected_video.vid_id)">add comment</button>
    </div>
    <div class="comment-section">
      <Comment v-show="comment.vid_id === selected_video.vid_id" v-for="comment in comments" :key="comment.vid_id + comment.username" :comment="comment"/>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'
import axios from 'axios'

export default {
  data: function () {
    return {
      comments: [],
      newComment: { username: 'Michelle W' }
    }
  },
  name: 'Comments',
  props: ['selected_video'],
  methods: {
    getComments () {
      axios.get('http://localhost:8081/comments').then(response => {
        this.comments = response.data
      })
        .catch(error => {
          console.log('error', error)
        })
    },
    submitComment (id) {
      let textArea = document.getElementById('comments')
      let error = document.getElementById('error-message')

      this.newComment.vid_id = id
      this.newComment.comment_text = textArea.value

      if (textArea.value === '') {
        error.classList.remove('no-display')
      } else {
        error.classList.add('no-display')
        axios.post('http://localhost:8081/comments/addComment', null, { params: this.newComment }).then(response => {
          this.comments = response.data
        })
          .catch(error => {
            console.log('error', error)
          })
        textArea.value = ''
      }
    }
  },
  components: {
    Comment
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
  .comments-title {
    font-size: 2.3rem;
    margin: 40px 0;
    text-align: left;
  }

  #comments {
    border: 2px solid #d1d1d1;
    font-family: BrandonRegular, Arial, sans-serif;
    font-size: 1.4rem;
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
    margin: 25px 0 45px;
  }

  .submit {
    background: #faa61a;
    border: none;
    color: #fff;
    font-family: BrandonLight, Arial, sans-serif;
    font-size: 2.5rem;
    letter-spacing: 1px;
    padding: 10px 0;
    text-align: center;
    width: 75%;
  }

  @media (min-width: 900px) {
    .comments-title {
      font-size: 1rem;
    }

    #comments, #comments::placeholder {
      font-size: 1rem;
    }

    .comments-wrapper {
      width: 77%;
    }

    #error-message {
      text-align: left;
    }

    .submit {
      font-size: 1.1rem;
      padding: 20px 0;
      width: 50%;
    }
  }
</style>
