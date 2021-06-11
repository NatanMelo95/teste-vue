<template>
  <div id="app">
    <Nav/>
    <img alt="logo" src="./assets/logo.png">
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components:{
    Nav,
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2em;
}

@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
*{
  box-sizing: border-box;
}

body{
  padding-top: 15px;
  background-color: black;
  background-image: url("./assets/fundo.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}
body, html, #app, #root{
  width: 100%;
  height: 100%;
}
#app{
  text-align: center;
}
.navbar-light{
  background-color: #fff;
  box-shadow: rgba(34, 35, 58, 0.2);
}
.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner{
  width: 450px;
  margin: auto;
  color: #fff;
  /*background: #fff;*/
  box-shadow: rgba(34, 35, 58, 0.2);
  border-radius: 25px;
}
.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-pack: none;
}
.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
</style>
