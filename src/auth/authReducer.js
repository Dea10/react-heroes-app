import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case types.login:
            return {
                ...payload,
                logged: true
            };
        
        case types.logout:
            return {
                logged: false
            };
    
        default:
            return state;
    }
}