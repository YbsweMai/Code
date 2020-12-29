import React,{ useEffect } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
} from 'react-router-dom';

import './User.css';

import { useDispatch,useSelector } from 'react-redux';

/* actions */
import { getUser } from './state/action';

/* page */
import userCenter from '../UserCenter/UserCenter';
import shopMall from '../ShopMall/ShopMall';

export default function User () {

   const dispatch = useDispatch();

   const user = useSelector(state=>state.user);

   useEffect(() => {
      dispatch(getUser());
      console.log('user',user);

   }, [  ]);

   function renderUser (){
      return(
         <div className="container-left">
            <img src={ user.user.avatar } />
            <h3>{ user.user.nickname }</h3>
            <h2><Link to='/user/userCenter'>个人中心</Link></h2>
            <h2><Link to='/user/shopMall'>积分商城</Link></h2>
         </div>

      );
   }
   return (
      <Router>
         <div className='container'>
            { renderUser() }
            <div className="container-right">
               <Switch>

                  <Route path='/user/userCenter' component={ userCenter }>
                  </Route>

                  <Route path='/user/shopMall' component={ shopMall }>
                  </Route>

               </Switch>
            </div>
         </div>
      </Router>

   );
}

