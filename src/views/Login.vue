<template>
    <div>
        <form @submit.prevent="handleLogar">
            <h3>Login</h3>
            <div class="form-group">
            <input
                type="Username"
                class="form-control"
                v-model="username"
                placeholder="Username"
            />
            </div>
            <div class="form-group">
            <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Password"
            />
            </div>
            <button class="btn btn-primary btn-block">Login</button>
            <div class="form-group" id="radio">
                <input type="radio" class="form-control" id="connect" />
                <label for="connect">Manter conectado</label><a href="/"> Esqueceu?</a>
            </div>
        </form>
        <router-link to="/registrar"><button class="btn btn-primary btn-block">Criar Conta</button></router-link>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
        username: "",
        password: "",
        };
    },
    methods: {
        handleLogar() {
        const data = {
            username: this.username,
            password: this.password,
        };
        console.log(data);
        alert("Logado")
        window.location.href = "/#/planos"
        },
    },
};
</script>

<style>
.form-control {
    border-radius: 25px;
    text-align: center;
}
.btn {
    border-radius: 25px;
    border-color: #f68e2b;
    background-color: #f68e2b;
    color: #fff;
}
#radio .form-control{
    margin: 20px;
    display: inline;
    width: 15px;
    height: 15px;
    border-radius: 25;
}
</style>
