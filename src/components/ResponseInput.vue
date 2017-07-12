<template>
  <div class="input-area">
    <el-input
    type="textarea"
    :autosize="{ minRows: 3 }"
    placeholder="Please input"
    v-model="replyComment">
    </el-input>
    <el-button type="primary" class="reply-button" @click="postResponse">Send Reply</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL, TOKEN } from './../../.env';

export default {
  name: 'response-input',
  props: [
    'problem',
  ],
  data() {
    return {
      replyComment: '',
    };
  },
  methods: {
    postResponse() {
      const config = {
        headers: { Authorization: TOKEN },
      };
      const data = {
        comment: this.replyComment,
      };
      axios.post(`${WEB_API_URL}/v1/problems/${this.problem.id}/responses`, data, config)
              .then((response) => {
                console.log(response);
                this.replyComment = '';
              }).catch(() => {
              });
    },
  },
};
</script>

<style scoped>
.input-area {
  margin: auto;
  width: 50%;
}
.reply-button {
  margin-left: auto;
  margin-top: 10px;
}
</style>
