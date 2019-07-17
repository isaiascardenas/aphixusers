<template>
    <el-container style="height: 100%;">
        <el-aside class="main-aside">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style>

.main-aside {
    background-color: #B3C0D1;
    text-align: center;
    line-height: 56px;
    color: #333;
    width: 200px;
    height: 100%;
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
