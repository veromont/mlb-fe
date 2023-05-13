import { genre } from "@/types/genre";
import { movie } from "@/types/movie";
import { session } from "@/types/session";
import { reactive } from "vue";

type Store = {
  movies: movie[];
  genres: genre[];
  sessions: session[];
  mode: string;
  favGenre: string;
};

export const store = reactive<Store>({
  movies: [],
  genres: [],
  sessions: [],
  mode: "user",
  favGenre: "",
});
