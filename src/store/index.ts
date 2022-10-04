import { messageReducer } from "./messages/reducer";
import { combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/reducer";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mixReducer = combineReducers({
  profile: profileReducer,
  messages: messageReducer,
});
export const store = createStore(mixReducer, composeEnhancers());
export type StoreOfState = ReturnType<typeof mixReducer>;
