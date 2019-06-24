import { selectedListState } from '../initialState';
import { HANDLE_EDITOR_TAB_CHANGE, CHANGE_PROJECT_FIGURE_TAB } from '../actionTypes';
import { updateObject } from './utils';

export default function (state = selectedListState, action) {
    switch (action.type) {
        case HANDLE_EDITOR_TAB_CHANGE: {
            return updateObject(state, { ifAnimationEditionMode: action.payload.flag });
        }
        case CHANGE_PROJECT_FIGURE_TAB: {
            return updateObject(state, { ifProjectCreationMode: action.payload.flag });
        }
        default:
            return state;
    }

}

