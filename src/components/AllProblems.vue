<template>
  <div>
    <h1>
      困りごとの一覧ページ
      <small>つくば市職員が閲覧するページ</small>
    </h1>
    <ul class="card-list">
      <li v-for="problem in problems" @click="toProblemDetail(problem)">
        <problem-card :problem="problem" class="card"></problem-card>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import { WEB_API_URL, TOKEN } from './../../.env';
import ProblemCard from './ProblemCard.vue';

export default {
  name: 'all-problems',
  components: {
    ProblemCard,
  },
  data() {
    return {
      problems: '',
    };
  },
  created() {
    const config = {
      headers: { Authorization: TOKEN },
    };
    axios.get(`${WEB_API_URL}/v1/problems`, config)
            .then((response) => {
              this.problems = response.data;
              console.log(this.problems);
            }).catch(() => {
            });
  },
  methods: {
    toProblemDetail(problem) {
      router.push({ name: 'problem-detail', params: { id: problem.id } });
    },
  },
};
</script>

<style scoped>
.card-list {
  margin: auto;
  padding: 0;
  list-style-type: none;
  padding-bottom: 100px;
  width: 50%;
}
small {
  color: #aaaaaa;
}
</style>
