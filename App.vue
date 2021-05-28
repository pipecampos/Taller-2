<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/populares">Peliculas Populares</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  to="/valoradas">Peliculas Mejor Calificadas</router-link>
      </li>
    </ul>
  </div>
</nav>
      <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  padding: 50px;
  margin-bottom: 10px;
}
#navbarNav{
  display: flex;
  justify-content: center;

}
</style>
