<template>
  <div>
    <h1>
      返答ページ
      <small>（詳細ページ）</small>
    </h1>
    <problem-detail-card :problem="problem"></problem-detail-card>
    <response-list></response-list>
    <response-input :problem="problem"></response-input>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL, TOKEN } from '../../.env';
import ProblemDetailCard from './ProblemDetailCard.vue';
import ResponseInput from './ResponseInput.vue';
import ResponseList from './ResponseList.vue';

export default {
  name: 'problem-detail',
  data() {
    return {
      problem: '',
    };
  },
  components: {
    ProblemDetailCard,
    ResponseInput,
    ResponseList,
  },
  created() {
    this.getResponses();
  },
  methods: {
    getResponses() {
      const config = {
        headers: { Authorization: TOKEN },
      };
      const problemId = this.$route.params.id;
      axios.get(`${WEB_API_URL}/v1/problems/${problemId}`, config)
            .then((response) => {
              this.problem = response.data;
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
</style>
