<template>
  <div class="">
    <p>login page</p>
    <el-row>
      <el-col :span='12' :offset='6'>
        <el-card class="box-card">
          <el-form label-form="top" label-width="100px" :model="formData">
            <el-form-item label="Email">
              <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="Pass">
              <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" @click="postLoginData">send</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import { WEB_API_URL } from './../../.env';

export default {
  name: 'login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    postLoginData() {
      console.log(this.formData.email);
      console.log(this.formData.password);
      axios.post(`${WEB_API_URL}/v1/login`, this.formData)
            .then((response) => {
              console.log(response.data);
            }).catch(() => {
              this.$confirm('データの取得に失敗しました．再接続しますか？', 'ネットワークエラー', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
              }).then(() => {
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
.box-card {
  margin-bottom: 20px;
}
.input {
  width:50%;
}
</style>
