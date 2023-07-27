import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import activitysReducer from "./Activity/activityReducer";
import airlinesReducer from "./Airlines/airlinesReducer";
import citiesReducer from "./Cities/citiesReducer";
import commentsReducer from "./Comments/commentsReducer";
import continentsReducer from "./Continent/continentReducer";
import countriesReducer from "./Country/countriesReducer";
import hotelsReducer from "./Hotels/hotelsReducer";
import packagesReducer from "./Packages/packagesReducer";
import usersReducer from "./Users/usersReducer";
import shoppingCartReducer from "./ShoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
  packages: packagesReducer,
  comments: commentsReducer,
  cities: citiesReducer,
  countries: countriesReducer,
  continents: continentsReducer,
  airlines: airlinesReducer,
  hotels: hotelsReducer,
  activitys: activitysReducer,
  users: usersReducer,
  carrito: shoppingCartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
