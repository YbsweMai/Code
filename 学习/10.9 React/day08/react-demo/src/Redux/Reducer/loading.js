import * as ActionType from '../ActionType';

const initialState = { isLoading: false,data: { message:'' } };

export default ( state = initialState, abc ) => {

    switch (abc.type) {
        
        case ActionType.SHOW_LOADING:
            console.log(abc);
            return {
                ...state,
                isLoading: true,
                data:abc.data,
            }
        case ActionType.HIDE_LOADING:
            
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
};