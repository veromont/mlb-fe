import { reactive } from "vue";

type Store = {
  movies: movie[];
  genres: genre[];
};

export const store = reactive<Store>({
  movies: [],
  genres: [],
});
