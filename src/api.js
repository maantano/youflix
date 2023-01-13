/* eslint-disable no-unused-expressions */
export const API_Key = "fea2b17df637d4f3a55228d4c0ef6c3d";
export const BASE_URL = "https://api.themoviedb.org/3";

export const NOWPLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1&region=KR`;

export const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`;
export const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_Key}`;
// export const BASE_URL = `https://image.tmdb.org/t/p/`;

export const makeImgPath = (img, width) =>
  `https://image.tmdb.org/t/p/${width}${img}`;

export const fetchMore = (hasNext, fetchNext) => (hasNext ? fetchNext() : null);

// export const moviesApi = {
//   //   trending: ({ pageParam }) =>
//   //     fetch(
//   //       `${BASE_URL}/trending/movie/week?api_key=${API_Key}&language=en-US&page=${
//   //         pageParam ?? 1
//   //       }`
//   //     ).then((res) => res.json()),
//   trending: ({ pageParam }) => {
//     typeof pageParam !== "number" ? "1" : pageParam;
//     return fetch(
//       `${BASE_URL}/trending/movie/week?api_key=${API_Key}&language=en-US&page=${pageParam}`
//     ).then((res) => res.json());
//   },
//   upcoming: ({ pageParam }) =>
//     fetch(
//       `${BASE_URL}/movie/upcoming?api_key=${API_Key}&language=en-US&page=${
//         pageParam ?? 1
//       }`
//     ).then((res) => res.json()),
//   nowPlaying: () =>
//     fetch(
//       `${BASE_URL}/movie/now_playing?api_key=${API_Key}&language=en-US&page=1&region=KR`
//     ).then((res) => res.json()),
//   search: ({ info, queryKey }) => {
//     const [_, query] = queryKey;
//     return fetch(
//       `${BASE_URL}/search/movie?api_key=${API_Key}&language=en-US&page=1&region=KR&query=${query}`
//     ).then((res) => res.json());
//   },
//   detail: ({ queryKey }) => {
//     const [_, id] = queryKey;

//     return fetch(
//       `${BASE_URL}/movie/${id}?api_key=${API_Key}&append_to_response=videos,images`
//     ).then((res) => res.json());
//   },
//   similar: ({ queryKey }) => {
//     const [_, id] = queryKey;
//     return fetch(
//       `${BASE_URL}/movie/${id}/similar?api_key=${API_Key}&language=en-US&page=1&region=KR`
//     ).then((res) => res.json());
//   },
// };

// // export const tvApi = {
// //   trending: () =>
// //     fetch(`${BASE_URL}/trending/tv/week?api_key=${API_Key}`).then(res =>
// //       res.json(),
// //     ),
// //   airingToday: () =>
// //     fetch(
// //       `${BASE_URL}/tv/airing_today?api_key=${API_Key}&language=en-US&page=1`,
// //     ).then(res => res.json()),
// //   topRated: () =>
// //     fetch(
// //       `${BASE_URL}/tv/top_rated?api_key=${API_Key}&language=en-US&page=1&region=KR`,
// //     ).then(res => res.json()),
// // };

// export const tvApi = {
//   trending: ({ pageParam }) =>
//     fetch(
//       `${BASE_URL}/trending/tv/week?api_key=${API_Key}&page=${pageParam ?? 1}`
//     ).then((res) => res.json()),
//   airingToday: ({ pageParam }) =>
//     fetch(
//       `${BASE_URL}/tv/airing_today?api_key=${API_Key}&page=${pageParam ?? 1}`
//     ).then((res) => res.json()),
//   topRated: ({ pageParam }) =>
//     fetch(
//       `${BASE_URL}/tv/top_rated?api_key=${API_Key}&page=${pageParam ?? 1}`
//     ).then((res) => res.json()),
//   search: ({ info, queryKey }) => {
//     const [_, query] = queryKey;
//     return fetch(
//       `${BASE_URL}/search/tv?api_key=${API_Key}&language=en-US&page=1&region=KR&query=${query}`
//     ).then((res) => res.json());
//   },
//   detail: ({ queryKey }) => {
//     const [_, id] = queryKey;
//     return fetch(
//       `${BASE_URL}/tv/${id}?api_key=${API_Key}&append_to_response=videos,images`
//     ).then((res) => res.json());
//   },
//   similar: ({ queryKey }) => {
//     const [_, id] = queryKey;
//     return fetch(
//       `${BASE_URL}/tv/${id}/similar?api_key=${API_Key}&language=en-US&page=1&region=KR`
//     ).then((res) => res.json());
//   },
// };
export const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_Key}`).then((res) =>
    res.json()
  );
export const moviesApi = { trending };
