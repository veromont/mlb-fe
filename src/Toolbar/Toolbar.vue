<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        >Кінотеатр "Hollywood"</router-link
      >
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              v-if="store.mode === 'Адміністратор'"
              class="nav-link"
              to="/add-movie"
              >Додати фільм</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Профіль</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/premieres">Прем'єри</router-link>
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
import { store } from "@/store/Store";

export default {
  name: "Toolbar",
  setup() {
    return { store };
  },
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
    cursor: pointer;
  }

  .nav-link {
    font-size: 1rem;
    cursor: pointer;
  }
  .nav-link:hover {
    background-color: rgba(255, 208, 0, 0.815);
  }
}
</style>
