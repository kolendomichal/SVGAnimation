import {ENABLE_ANIMATION } from '../actionTypes'
import { initialState } from './initialState';

const startState = initialState;

export default function(state = startState, action) {
    const selectedFigure = state.selectedFigure;

    switch (action.type) {
        case ENABLE_ANIMATION: {
            const { flag } = action.payload;
            selectedFigure.animationEnabled = flag;
            return {
                ...state,
                selectedFigure: selectedFigure
            }
        }
        default:
            return state;
    };
    
}