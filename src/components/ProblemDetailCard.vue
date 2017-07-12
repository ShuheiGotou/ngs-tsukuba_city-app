<template>
  <div class="box">
    <el-card class="box-card">
      <el-row>
        <el-col :span='12' :offset='6'>
          <div class="">
            <img :src="imageUrl"  v-if="!!imageUrl">
            <img src="../assets/noimage.jpg" v-else>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12' :offset='6'>
          {{ problem.comment }}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='12' :offset='6'>
          <div class="date">{{ problemDate }}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
import { WEB_API_URL } from '../../.env';

export default {
  name: 'problem-detail-card',
  props: [
    'problem',
  ],
  computed: {
    imageUrl() {
      return !this.problem.image_url ? null : WEB_API_URL + this.problem.image_url;
    },
    problemDate() {
      const regExp = new RegExp('T', 'g');
      const date = this.problem.created_at.replace(regExp, ' ').split('.');
      return date[0];
    },
  },
};
</script>

<style scoped>
img {
  width: 300px;
}
.box-card {
  margin: auto;
  width: 50%;
}
.box {
  margin-bottom: 20px;
}
</style>
