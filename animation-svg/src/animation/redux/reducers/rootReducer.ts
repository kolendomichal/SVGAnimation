import { combineReducers } from "redux";
import figuresProjects from "./figuresProjects/figuresProjectsReducer";
import selectedList from "./selectedList/selectedListReducer";

export const rootReducer =  combineReducers({ figuresProjects,selectedList });
