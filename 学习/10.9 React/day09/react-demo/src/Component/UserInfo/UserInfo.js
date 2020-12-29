import React,{ useEffect } from 'react';

import { useDispatch,useSelector } from 'react-redux';

/* actions */
import { getUser } from '../../Feature/User/state/action';

import './UserInfo.css';

export default function UserInfo () {

   const dispatch = useDispatch();

   const user = useSelector(state=>state.user);

   useEffect(() => {

      dispatch(getUser());

   }, []);

   return (

      <div className="center">
         <img src={ user.user.avatar } alt="" />
         <div className="userInfo">
            <div className="info">
               <span className="info1">姓名:</span>
               <span className="info2">{ user.user.username }</span>
            </div>
            <div className="info">
               <span className="info1">昵称:</span>
               <span className="info2">{ user.user.nickname }</span>
            </div>
            <div className="info">
               <span className="info1">密码:</span>
               <span className="info2"
               >******
                  <span  className="change">修改</span>
               </span>

            </div>
         </div>
         <div className="userInfo">
            <div className="info">
               <span className="info1">学校:</span>
               <span className="info2">{ user.user.school }</span>
            </div>
            <div className="info">
               <span className="info1">性别:</span>
               { user.user.gender === 1 ? <span>男</span> : <span>女</span>}
            </div>
         </div>
      </div>
   );
}
