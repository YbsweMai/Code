import { USER_LOGIN,USER_LOGOUT } from '../ActionType'

const initialState = { isLogin:false,test:123 }

export default ( state = initialState, payload ) =>{

    switch (payload.type) { // payload是自定义 type固定
        case USER_LOGIN:
            console.log('USER_LOGIN')
            return{
                ...state,
                isLogin:true
            }
            
        case USER_LOGOUT:
            console.log('USER_LOGOUT')
            return{
                ...state,
                isLogin:false
            }
        
        default:
            return state
    }
}