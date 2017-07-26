<template>
  <el-card class="box-card">
    <el-badge value="返信してください！" class="item" v-if="!problem.responded"></el-badge>
    <el-badge class="item" hidden v-else ></el-badge>
    <el-row>
      <el-col :span='8'>
        <div class="thumbnail">
          <img :src="thumbnailUrl"  v-if="!!thumbnailUrl">
          <img src="../assets/noimage.jpg" v-else>
        </div>
      </el-col>
      <el-col :span='16'>
        <div class="content">
          <div class="comment">
              <p>{{ problemComment }}</p>
          </div>
          <div class="latlon">{{ problemLatLon }}</div>
          <div class="map" v-if="!!googleMapLink">
            <a v-bind:href="googleMapLink" target="_blank"> -> check map </a>
          </div>
          <div class="date">{{ problemDate }}</div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL } from './../../.env';

export default {
  name: 'problem-card',
  props: [
    'problem',
  ],
  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.getUserData();
  },
  computed: {
    thumbnailUrl() {
      return !this.problem.image_url ? null : WEB_API_URL + this.problem.image_url;
    },
    problemComment() {
      if (this.problem.comment.length === 0) {
        return 'No comment';
      }
      const limit = 256;
      const trimText = `${this.problem.comment.substr(0, limit)}...`;
      return this.problem.comment.length > limit ? trimText : this.problem.comment;
    },
    problemDate() {
      const regExp = new RegExp('T', 'g');
      const date = this.problem.created_at.replace(regExp, ' ').split('.');
      return date[0];
    },
    problemLatLon() {
      let lat = 'no data';
      let lon = 'no data';
      if (this.problem.latitude !== null && this.problem.longitude !== null) {
        lat = this.problem.latitude.toFixed(3);
        lon = this.problem.longitude.toFixed(3);
      }
      return `lat: ${lat},  lon: ${lon} `;
    },
    googleMapLink() {
      const GoogleMapLink = 'https://google.co.jp/maps/search/';
      if (this.problem.latitude !== null && this.problem.longitude !== null) {
        return `${GoogleMapLink + this.problem.latitude}+${this.problem.longitude}`;
      }
      return null;
    },
  },
  methods: {
    getUserData() {
      const userId = this.problem.user_id;
      const token = window.sessionStorage.getItem('access_token');
      const config = {
        headers: { Authorization: token },
      };
      axios.get(`${WEB_API_URL}/v1/users/${userId}`, config)
            .then((response) => {
              this.userId = response.data;
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
  /*text-align: right;*/
  font-size: x-small;
  color: #aaaaaa;
}
.latlon {
  /*text-align: right;*/
  font-size: small;
  color: #aaaaaa;
}
.map {
  /*text-align: right;*/
  font-size: small;
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
.item {
  float: right;
}
</style>
