<template>
    <form @submit.prevent="handleCadastrar">
        <h3>Detalhe</h3>
        <img src="../assets/detalhes.png">
        <div class="form-group">
        <input
            type="Username"
            class="form-control"
            v-model="username"
            placeholder="Username"
        />
        </div>
        <div class="form-group">
        <input type="Nome" class="form-control" v-model="nome" placeholder="Nome" />
        </div>
        <div class="form-group">
        <input
            type="Sobrenome"
            class="form-control"
            v-model="sobrenome"
            placeholder="Sobrenome"
        />
        </div>
        <button class="btn btn-primary btn-block">Continuar</button>
    </form>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
        username: "",
        nome: "",
        sobrenome: "",
        };
    },
    methods: {
        handleCadastrar() {
        const data = {
            username: this.username,
            nome: this.nome,
            sobrenome: this.sobrenome,
        };
        console.log(data);
        alert("Cadastrado");
        window.location.href = "/#/login"
        },
    },
};
</script>

<style>
form{    
    text-align: center;
    vertical-align: middle;
}
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

</style>
