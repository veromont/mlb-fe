import { genre } from "./types/genre";
import { movie } from "./types/movie";
import { session } from "./types/session";

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
export default {
  getMovies,
  getGenres,
  getSessions,
  bookTicket,
  getPdf,
};
