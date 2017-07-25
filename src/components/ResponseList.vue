<template>
  <div class="box" v-if="responses.length > 0">
    <small>Responses list</small>
    <el-card class="box-card">
      <ul class="card-list">
        <li v-for="response in responses">
          <p>{{ response.comment }}</p>
        </li>
      </ul>
    </el-card>
  </div>
  <div class="box" v-else>
    <small>no-responses</small>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL } from '../../.env';

export default {
  name: 'response-list',
  data() {
    return {
      responses: '',
    };
  },
  created() {
    this.getResponses();
  },
  methods: {
    getResponses() {
      const token = window.sessionStorage.getItem('access_token');
      const config = {
        headers: { Authorization: token },
      };
      const problemId = this.$route.params.id;
      axios.get(`${WEB_API_URL}/v1/problems/${problemId}/responses`, config)
            .then((response) => {
              this.responses = response.data;
              console.log(response.data);
            }).catch(() => {
              this.$confirm('データの取得に失敗しました．再接続しますか？', 'ネットワークエラー', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
              }).then(() => {
                this.getResponses();
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: 'Retrying canceled',
                });
              });
            });
    },
  },
};
</script>

<style scoped>
.card-list {
  margin: auto;
  padding: 0;
  list-style-type: none;
  width: 50%;
}
small {
  color: #aaaaaa;
}
.box {
  margin-bottom: 20px;
}
.box-card {
  margin: auto;
  width: 50%;
}
</style>
