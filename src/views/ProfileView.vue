<template>
  <div class="container">
    <h1 class="text-center mb-4">Мій профіль</h1>
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
              <label for="bio">Коментар</label>
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
              <select
                class="form-control"
                id="favorite-genre"
                v-model="store.favGenres"
                multiple
              >
                <option
                  v-for="genre in store.genres"
                  :key="genre.id"
                  :value="genre"
                >
                  {{ genre.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="favorite-genre">Роль</label>
              <div style="display: flex; flex-direction: row">
                <input
                  disabled
                  type="text"
                  class="form-control"
                  id="favorite-genre"
                  v-model="store.mode"
                />
                <toggle-mode-button />
              </div>
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
import api from "@/api";
import { store } from "@/store/Store";
import { onMounted } from "vue";
import toggleModeButton from "@/features/toggleModeButton.vue";
export default {
  components: {
    toggleModeButton,
  },
  setup() {
    onMounted(() => {
      api.getGenres().then((data) => (store.genres = data));
    });
    return { store };
  },
  data() {
    return {
      user: {
        name: "Animal",
        username: "math_analysis_enjoyer_228",
        bio: "те саме звірятко з лісу",
        favoriteMovie: "Лекція 4(2). Послідовності. Границі послідовності",
        email: "animal@example.com",
        phone: "555-555-5555",
      },
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

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
