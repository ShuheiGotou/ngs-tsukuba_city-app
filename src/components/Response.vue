
<template>
  <div>
    <h1>
      返答ページ
      <small>つくば市職員が閲覧するページ</small>
    </h1>
  <!-- <p>{{ msg }}</p>     -->
    <ul class="card-list">
      <li v-for="problem in problems">
        <problem-card :problem="problem" class="card"></problem-card>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
import { WEB_API_URL, TOKEN } from './../../.env';
import ProblemCard from './ProblemCard.vue';

export default {
  name: 'response-page',
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
};
</script>

<style>
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
