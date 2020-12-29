import React from 'react';
import {
  BrowserRouter as Router, // hash router 与 browser router
  Switch,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

import { useSelector,useDispatch } from 'react-redux'
import { USER_LOGIN,USER_LOGOUT } from './Redux/ActionType'  // import * as ActionType from '../ActionType' 获取所有

/* 在action里将 USER_LOGIN,USER_LOGOUT 封装成userLogin,userLogout函数 */
import { userLogin, userLogout, userA_Btn, userB_Btn, user_Btn } from './action'

/* component */
import Loading from './Component/Loading/Loading';

function App(){

  /* 1.Reducer/login  2. ActionType  3.action 封装函数 4.Reducer/index  5.store  6.最外层index  */

  // let isLogin = useSelector(state => state)
  let isLogin = useSelector(state => state.login.isLogin)
  let dispatch = useDispatch()

  console.log('isLogin===>',isLogin)
  return (
    <div className='App'>
      { isLogin ? 'app':'' }
      <div>
        <button onClick={()=>{
          
          // dispatch({ type: USER_LOGIN }) // 获取所有时 ActionType.USER_LOGIN
          dispatch(userLogin()) // 将USER_LOGIN拆开后 引进userLogin
          // setTimeout(()=>{
          //   dispatch(userLogout())
          // },5000)
          // /* 5秒后消失 封装到了action里*/
          
          /* 抽成公共的  因为异步操作不建议使用*/
          // publicShow(dispatch)
        }}>dispatch-login</button>

        <button onClick={()=>{
          
          // dispatch({ type: USER_LOGOUT })
          dispatch(userLogout())
        }}>dispatch-logout</button>

      {/* --------------------- */}
        <div className='btn'>

          <button onClick={()=>{
            
            dispatch(user_Btn('A按钮'))
          }}>Button-A</button>

          <button onClick={()=>{
            
            dispatch(user_Btn('B按钮'))
          }}>Button-B</button>
          
        </div>
        
      </div>
      <Loading></Loading>
    </div>
  )
}

/* 路由配置 */
// function App() {
//   return (

//     <Router>
//       <div className="App">
//           <ul>

//             <li>

//               <Link to='/a/'>A</Link>
//             </li>
//           </ul>

//           <Switch>
//               {/* exact 只匹配加上这个配置的路由 如有嵌套路由就不会显示 所以嵌套路由不加exact */}
//               {/* strict 严格的 匹配  / */}
//               <Route path='/a/'exact={true} strict={true}>

//                   <div>
//                     <div>A</div>

//                     {/* <Link to='/a/index'>nest</Link>

//                     <Switch>

//                       <Route path='/a/index'>

//                         <div>  这是嵌套 </div>
//                       </Route>
//                     </Switch> */}
//                   </div>

//               </Route>
//           </Switch>
         
//       </div>
//     </Router>
  
//   );
// }

export default App;
