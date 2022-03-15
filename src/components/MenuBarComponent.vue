<template>
  <div>
    <br align="center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" >API Rest</a>
        <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div id="filter-bar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"> <router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"> <router-link to="/show">Mostrar Estudantes</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"> <router-link to="/edit">Editar Estudantes</router-link></a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'MenuBarComponent'
}
</script>

<style src="./styleComponents.css"/>