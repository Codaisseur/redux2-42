export const getLoggedInUser = state => {
  // user id from user reducer
  const userId = state.user.id;
  return state.developers.find(dev => dev.id === userId);
  // the list of developers
};
