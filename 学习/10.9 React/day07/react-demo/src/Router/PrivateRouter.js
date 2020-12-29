import React from 'react'

import {  
    Route,
    Redirect,
    useHistory
} from 'react-router-dom'

export default function PrivateRouter({ component:Component, ...rest }) {

    let history = useHistory()
    
    // let user = localStorage.getItem('user')

    let auth = false

    // if(user){
    //     auth = true
    // }

    /* 自己写的 */
    // if(rest.path === '/c'){
    //     let user = localStorage.getItem('user')
    //     if(user){
    //         auth = true
    //     }else{
    //         alert('请登录')
    //     }
    //     if(rest.path === '/d'){
    //         auth = false
    //     }
    // }
    
    

    return (
        <div>
            <Route { ...rest } render={ ()=>{
                return(
                    auth ? <Component/> : <Redirect to='/a'></Redirect>
                )
            }}>

            </Route>
        </div>
    )
}


