<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        >Кінотеатр "Hollywood"</router-link
      >
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Профіль</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/premieras">Прем'єри</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/movie-search"
              >Знайти фільм</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sessions">Сеанси</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Про нас</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Toolbar",
};
</script>

<style>
.navbar {
  padding: 10px 10px;
  background-color: orange;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-link {
  font-size: 1.2rem;
  color: #333;
  margin-right: 1.5rem;
  text-decoration: none;
}

@media (max-width: 991.98px) {
  .navbar-brand {
    font-size: 1.2rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
