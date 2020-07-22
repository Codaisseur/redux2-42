export const getDevelopers = state => state.developers;

export const getDeveloperById = id => state =>
  state.developers.find(dev => dev.id === id);

export const getDevelopersAndResourcers = state => ({
  developers: state.developers,
  resources: state.resources,
});

export const developersFilterFavourites = selectedResource => state => {
  return state.developers.filter(dev =>
    dev.favorites.includes(selectedResource)
  );
};

export const selectDeveloperResources = developerId => state => {
  const selectedDeveloper = state.developers.find(
    dev => dev.id === developerId
  );

  // [2, 4, 6]
  const fullFavorites = state.resources.filter(r =>
    selectedDeveloper.favorites.includes(r.id)
  );
  return fullFavorites;
};

// src/store/developers/selectors.js

function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export const selectDeveloperStatistics = state => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter(dev => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      dev => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map(dev => dev.favorites.length)
    ),
  };
};
