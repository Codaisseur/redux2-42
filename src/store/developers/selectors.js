export const getDevelopers = state => state.developers;

export const getDeveloperById = id => state =>
  state.developers.find(dev => dev.id === id);

export const getDevelopersAndResourcers = state => ({
  developers: state.developers,
  resources: state.resources,
});
