<template>
    <el-container>
        <div class="gradient">
            <el-form :model="loginForm" class="login-form">
                <el-form-item label="Correo">
                    <el-input v-model="loginForm.email" placeholder="Correo"></el-input>
                </el-form-item>
                <el-form-item label="Contraseña">
                    <el-input v-model="loginForm.password" placeholder="Contraseña"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Iniciar Sesión</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push({
                name: 'Index Usuarios',
            });
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
