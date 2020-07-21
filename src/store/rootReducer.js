import userReducer from "./user/reducer";
import resourcesReducer from "./resources/reducer";
import developersReducer from "./developers/reducer";

import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  developers: developersReducer,
  resources: resourcesReducer,
});
