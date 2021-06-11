<template>
    <div>
        <h3>Alterar Plano</h3>
        <div class="plano">
            <label>Plano Premium - €12,90</label>
            <button class="btn btn-primary btn-block" id="1" v-on:click="handlePlan">SELECIONAR</button>
        </div>
        <div class="plano">
            <label>Plano Premium - €12,90</label>
            <button class="btn btn-primary btn-block" id="2" v-on:click="handlePlan">SELECIONAR</button>
        </div>
        <div class="plano">
            <label>Plano Premium - €12,90</label>
            <button class="btn btn-primary btn-block" id="3" v-on:click="handlePlan">SELECIONAR</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Plan",
    methods: {
        handlePlan: function(){
            console.log("Plano selecionado")
            alert("Plano selecionado")
        }
    }
}
</script>

<style>
.plano{
    text-align: center;
    border-radius: 15px;
    border-style: solid;
    border-color: #5d6476;
    background-color: #383f51;
    margin: 15px;
}
.btn {
    position:relative;
    max-width: 180px;
    border-radius: 25px;
    border-color: #202125;
    background-color: #202125;
    margin: 15px;
    top:50%; 
    bottom:50%;
    left:26%;
    color: #fff;
}
</style>