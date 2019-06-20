import { combineReducers } from "redux";
import figuresProjects from "./figuresProjects";
import selectedList from "./selectedList";

export const rootReducer =  combineReducers({ figuresProjects,selectedList });
