import * as ActionType from './Redux/ActionType'

/* 将ActionType里的对象 封装成函数 */
export function userLogin(){
    
    // return {
    //     type:ActionType.USER_LOGIN
    // }

    /* 引进中间件包后 可以返回一个函数 */
    return (dispatch,getState) => {

        dispatch({ type: ActionType.USER_LOGIN })

        setTimeout(()=>{
            dispatch({ type:ActionType.USER_LOGOUT })
        },5000)
    }
}

export function userLogout(){
    
    return {
        type:ActionType.USER_LOGOUT
    }
}



// export function userA_Btn(){

//     return (dispatch,getState) => {
//         dispatch ({ type:ActionType.SHOW_LOADING,data:{ message:'A按钮' } })
//     }
// }

// export function userB_Btn(){

//     return (dispatch,getState) => {
//         dispatch ({ type:ActionType.SHOW_LOADING,data:{ message:'B按钮' } })
//     }
// }

/* 传值绑定按钮 */
export function user_Btn(name){

    return (dispatch,getState) => {
        dispatch ({ type:ActionType.SHOW_LOADING,data:{ message:name } })
    }
}

export function closeBtn(){

    return (dispatch,getState) => {
        dispatch ({ type:ActionType.HIDE_LOADING })
    }
}