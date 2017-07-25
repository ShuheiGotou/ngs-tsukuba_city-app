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
import { WEB_API_URL } from './../../.env';

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
      const token = window.sessionStorage.getItem('access_token');
      const config = {
        headers: { Authorization: token },
      };
      const data = {
        comment: this.replyComment,
      };
      axios.post(`${WEB_API_URL}/v1/problems/${this.problem.id}/responses`, data, config)
              .then((response) => {
                console.log(response);
                this.replyComment = '';
                this.$message({
                  message: '返答を送信しました．',
                  type: 'success',
                });
              }).catch(() => {
                this.$alert('送信できませんでした．ネットワークを確認してください．', 'ネットワークエラー', {
                  confirmButtonText: 'OK',
                });
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
  margin-top: 10px;
}
</style>
