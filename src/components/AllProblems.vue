<template>
  <div class="">
    <h1>困りごとの一覧ページ</h1>
  <!-- <p>{{ msg }}</p>     -->
    <ul class="card-list">
      <li v-for="problem in problems">
        <!-- <problem-card :problem="problem" class="card"></problem-card> -->
        <p>{{ problem.comment }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL, TOKEN } from './../../.env';

export default {
  name: 'all-problems',
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

<style lang="css">
</style>
