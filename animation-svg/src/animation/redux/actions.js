import { ENABLE_ANIMATION } from "./actionTypes";

export const enableAnimation = (flag) => ({
    type: ENABLE_ANIMATION,
    payload: { flag : flag } 
});
