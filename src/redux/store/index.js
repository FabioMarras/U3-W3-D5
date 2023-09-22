import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "../reducers/SidebarReducer";
import HomeReducer from "../reducers/HomeReducer";

const rootReducer = combineReducers({
  sidebar: SidebarReducer,
  home: HomeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
