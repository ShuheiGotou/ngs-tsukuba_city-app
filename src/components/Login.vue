<template>
  <div class="">
    <p>login page</p>
    <el-row>
      <el-col :span='12' :offset='6'>
        <el-card class="box-card">
          <el-form :label-position="top" label-width="100px" :model="formData">
            <el-form-item label="Email">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="Pass">
              <el-input v-model="formData.passward"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary">send</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formData: {
        email: '',
        passward: '',
      },
    };
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
