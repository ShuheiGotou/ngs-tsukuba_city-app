<template>
  <div class="">
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
          {{ problem.id }}
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
  },
};
</script>

<style>
img {
  width: 300px;
}
.box-card {
  margin: auto;
  width: 50%;
}
</style>
