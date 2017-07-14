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
import { WEB_API_URL, TOKEN } from '../../.env';

export default {
  name: 'response-list',
  data() {
    return {
      responses: '',
    };
  },
  created() {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const problemId = this.$route.params.id;
    axios.get(`${WEB_API_URL}/v1/problems/${problemId}/responses`, config)
            .then((response) => {
              this.responses = response.data;
              console.log(response.data);
            }).catch(() => {
            });
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
