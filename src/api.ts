import { genre } from "./types/genre";
import { movie } from "./types/movie";
import { session } from "./types/session";
import { format } from "date-fns";

const apiBaseUrl = "https://localhost:7043/api";

const getMovies = async (): Promise<movie[]> =>
  fetch(`${apiBaseUrl}/Movies/get-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.json());

const getGenres = async (): Promise<genre[]> =>
  fetch(`${apiBaseUrl}/Genres/get-genres`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.json());

const getSessions = async (): Promise<session[]> =>
  fetch(`${apiBaseUrl}/Sessions/get-served-sessions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.json());
const bookTicket = async (sessionId: string): Promise<string> =>
  fetch(`${apiBaseUrl}/Tickets/book-ticket?sessionId=${sessionId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.json());
const getPdf = async (ticketId: string) =>
  fetch(`${apiBaseUrl}/Tickets/get-pdf-ticket?ticketId=${ticketId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.blob());
const getMoviesByGenres = async (genres: number[]): Promise<movie[]> =>
  fetch(`${apiBaseUrl}/Movies/genres`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify([...genres, null]),
  }).then(async (response) => response.json());
const addMovie = async (m: movie) => {
  const response = await fetch(`${apiBaseUrl}/Movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(m),
  });
  return response.ok ? "Успішно збережено" : response.text();
};
const deleteMovie = async (id: string) =>
  fetch(`${apiBaseUrl}/Movies?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
const addSession = async (m: session) => {
  const response = await fetch(`${apiBaseUrl}/Sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(m),
  });
  return response.ok ? "Успішно збережено" : response.text();
};
const getPremieres = async () =>
  fetch(`${apiBaseUrl}/Movies/date-interval`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      dateFrom: format(new Date(), "yyyy-MM-dd"),
      dateTo: "2999-12-12",
    }),
  }).then(async (response) => response.json());
export default {
  getMovies,
  getGenres,
  getSessions,
  bookTicket,
  getPdf,
  getMoviesByGenres,
  addMovie,
  deleteMovie,
  addSession,
  getPremieres,
};
