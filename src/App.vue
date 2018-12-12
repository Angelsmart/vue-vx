<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-link to="/About">About</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
 color: red;
 a{
 		margin:10px;
 }
}
</style>
