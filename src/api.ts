const apiBaseUrl = "https://localhost:7043/api";

const getMovies = async () =>
  fetch(`${apiBaseUrl}/Movies/get-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then(async (response) => response.json());

export default {
  getMovies,
};
