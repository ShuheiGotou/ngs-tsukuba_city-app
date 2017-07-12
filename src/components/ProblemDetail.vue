<template>
  <div>
    <h1>
      返答ページ
      <small>（詳細ページ）</small>
    </h1>
    <problem-detail-card :problem="problem"></problem-detail-card>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL, TOKEN } from '../../.env';
import ProblemDetailCard from './ProblemDetailCard.vue';

export default {
  name: 'problem-detail',
  data() {
    return {
      problem: '',
    };
  },
  components: {
    ProblemDetailCard,
  },
  created() {
    const config = {
      headers: { Authorization: TOKEN },
    };
    const problemId = this.$route.params.id;
    axios.get(`${WEB_API_URL}/v1/problems/${problemId}`, config)
            .then((response) => {
              this.problem = response.data;
              console.log(this.problem);
            }).catch(() => {
            });
  },
};
</script>

<style lang="css">
</style>
