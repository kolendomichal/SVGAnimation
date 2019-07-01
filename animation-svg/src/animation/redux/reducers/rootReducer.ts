import { combineReducers } from "redux";
import figuresProjects from "./figuresProjects/figuresProjects";
import selectedList from "./selectedList/selectedList";

export const rootReducer =  combineReducers({ figuresProjects,selectedList });
