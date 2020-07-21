const initialState = [
  {
    id: 1,
    name: "Kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [1, 2],
  },
  {
    id: 2,
    name: "Danny",
    website: null,
    favorites: [1],
  },
];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
