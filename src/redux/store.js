import {applyMiddleWare,createStore} from "redux";
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";

const store=createStore(cakeReducer,applyMiddleWare(logger));
export default store;