<template>
    <el-table
      :data="users"
        border>
      <el-table-column
        prop="nombre"
        label="Nombre">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {nombre: 'Isaias Cardenas', email: 'isaias.cardenas@aphix.cl'}
            ],
        }
    },
    methods: {
        getUsers() {
            console.log('login');
        }
    }
}
</script>

<style>
.gradient {
    height: 100%;
    width: 100%;
}
.login-form {
    top: -1%;
    position: relative;
    margin: 60px auto;
    width: 350px;
}
</style>

