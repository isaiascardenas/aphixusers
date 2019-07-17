<template>
    <el-container style="height: 100%;">
        <el-header>
            <el-button type="primary" class="login-button" @click="handleLogin" round>
                Iniciar sesión
            </el-button>
        </el-header>
        <el-main> Home </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      allUsers: [],
    };
  },
  methods: {
    handleLogin() {
        this.$router.push({
            name: 'Login',
        });
    }
  }
}
</script>

<style>
.login-button {
    float: right;
    margin-top: 10px;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 56px;
    height: 180px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
}

body > .el-container {
    height: 100%;
}
</style>
