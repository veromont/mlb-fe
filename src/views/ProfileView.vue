<template>
  <div class="container">
    <h1 class="text-center mb-4">My Profile</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <img
            class="card-img-top"
            alt="User Avatar"
            v-bind:src="require('@/assets/monke.jpg')"
          />
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.bio }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Профіль:</strong> {{ user.username }}
            </li>
            <li class="list-group-item">
              <strong>Email:</strong> {{ user.email }}
            </li>
            <li class="list-group-item">
              <strong>Телефон:</strong> {{ user.phone }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Про себе</h5>
            <div class="form-group">
              <label for="bio">Bio</label>
              <textarea
                class="form-control"
                id="bio"
                rows="3"
                v-model="user.bio"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="favorite-movie">Улюблений фільм</label>
              <input
                type="text"
                class="form-control"
                id="favorite-movie"
                v-model="user.favoriteMovie"
              />
            </div>
            <div class="form-group">
              <label for="favorite-genre">Улюблений жанр</label>
              <input
                type="text"
                class="form-control"
                id="favorite-genre"
                v-model="store.favGenre"
              />
            </div>
            <div class="form-group">
              <label for="favorite-genre">Роль</label>
              <input
                type="text"
                class="form-control"
                id="favorite-genre"
                v-model="store.mode"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contact Info</h5>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                v-model="user.phone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { store } from "@/store/Store";
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        username: "marvel_enjoyer_228",
        bio: "I love movies and spend most of my free time watching them. My favorite movie of all time is The Godfather.",
        favoriteMovie: "The Godfather",
        email: "johndoe@example.com",
        phone: "555-555-5555",

      },
      store,
    };
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: auto;
}

.list-group-item {
  font-size: 1.1rem;
}

.form-group label {
  font-weight: bold;
}

.btn {
  font-weight: bold;
  background-color: #007bff;
  border-color: #007bff;
}

.btn:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn:focus {
  box-shadow: none;
}

.btn-primary.disabled,
.btn-primary:disabled {
  background-color: #007bff;
  border-color: #007bff;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
