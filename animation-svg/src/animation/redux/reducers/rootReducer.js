import { combineReducers } from "redux";
import reduxAnimationSwitch from "./reduxAnimationSwitch"
import svgAnimation from "./svgAnimation";

export const rootReducer =  combineReducers({ reduxAnimationSwitch, svgAnimation });
