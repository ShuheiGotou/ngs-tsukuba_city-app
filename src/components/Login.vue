<template>
  <div class="">
    <p>Login page</p>
    <el-row>
      <el-col :span='12' :offset='6'>
        <el-card class="box-card">
          <el-form label-form="top" label-width="100px" :model="formData">
            <el-form-item label="Email">
              <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="Pass">
              <el-input type="password" v-model="formData.password"></el-input>
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
import router from '../router';
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
              window.sessionStorage.setItem('access_token', response.data.access_token);
              console.log(window.sessionStorage.getItem('access_token'));
              router.push('/');
            }).catch(() => {
              this.$alert('メールアドレスまたはパスワードを確認してください', 'ログイン失敗', {
                confirmButtonText: 'OK',
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
