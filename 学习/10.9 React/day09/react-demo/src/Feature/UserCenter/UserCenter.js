import React, { useState } from 'react';

import './userCenter.css';

/* Component */
import UserInfo from '../../Component/UserInfo/UserInfo';
import ExchangeRecord from '../../Component/ExchangeRecord/ExchangeRecord';

export default function UserCenter () {

   let [ activeName,setName ] = useState('UserInfo');
   return (
      <div className="right-container">
         <div className="header">
            <h2 onClick={ ()=>{
               setName('UserInfo');
            } }>
        个人信息
            </h2>
            <h2 onClick={ ()=>{
               setName('ExchangeRecord');
            } }>
        兑换记录
            </h2>
         </div>
         <div className="content">
            { activeName === 'UserInfo' ? <UserInfo></UserInfo> :
               <ExchangeRecord></ExchangeRecord>}
         </div>
      </div>
   );
}
