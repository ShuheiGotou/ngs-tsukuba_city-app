<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span='8'>
        <div class="thumbnail">
          <img :src="thumbnailUrl"  v-if="!!thumbnailUrl">
          <img src="../assets/logo.png" v-else>
        </div>
      </el-col>
      <el-col :span='16'>
        <div class="content">
          <div class="comment">
              <p>{{ problemComment }}</p>
          </div>
          <div class="date">{{ problemDate }}</div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { WEB_API_URL } from '../../.env';

export default {
  name: 'problem-card',
  props: [
    'problem',
  ],
  computed: {
    thumbnailUrl() {
      return !this.problem.image_url ? null : WEB_API_URL + this.problem.image_url;
    },
    problemComment() {
      const limit = 256;
      const trimText = `${this.problem.comment.substr(0, limit)}...`;
      return this.problem.comment.length > limit ? trimText : this.problem.comment;
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
.thumbnail {
  position: relative;
  width: 65%;
  text-align: center;
}
.thumbnail:before {
    content: "";
    display: block;
    padding-top: 100%;
}
.thumbnail > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  overflow: hidden;
}
.comment {
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  flex-grow: 9;
  color: #7f7f7f;
}
.comment p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.date {
  flex-grow: 1;
  /*text-align: right;*/
  font-size: x-small;
  color: #aaaaaa;
}
p {
  padding: 0.5em 0;
  margin: 0;
  font-size: initial;
}
img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.box-card {
  margin-bottom: 20px;
  /*position: relative;
  display: flex;*/
}
</style>
