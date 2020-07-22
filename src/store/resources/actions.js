// action => { type, payload }

export const addResourceAction = newResource => ({
  type: "NEW_RESOURCE",
  payload: newResource,
});
