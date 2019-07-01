import { selectedListState, SelectedListState } from '../../initialState';
import { updateObject } from '../utils';
import { HANDLE_EDITOR_TAB_CHANGE, CHANGE_PROJECT_FIGURE_TAB } from './actionTypes';
import { SelectedListActionTypes } from './actions';

export default function (state: SelectedListState = selectedListState, action: SelectedListActionTypes): SelectedListState {
    switch (action.type) {
        case HANDLE_EDITOR_TAB_CHANGE: {
            return updateObject<SelectedListState>(state, { ifAnimationEditionMode: action.payload.flag });
        }
        case CHANGE_PROJECT_FIGURE_TAB: {
            return updateObject<SelectedListState>(state, { ifProjectCreationMode: action.payload.flag });
        }
        default:
            return state;
    }

}

