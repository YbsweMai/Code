import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Exchangerecord } from './state/action';
import { getUser } from '../../Feature/User/state/action';
import _ from 'lodash';
import moment from 'moment';

import './ExchangeRecord.css';

export default function ExchangeRecord () {

   const dispatch = useDispatch();

   /*  获取个人信息 */
   const user = useSelector(state=>state.user);

   useEffect(() => {
      dispatch(getUser());
      console.log('user',user);

   }, []);

   const getRecord = useSelector(state=>state.getRecord);

   useEffect(() => {
      dispatch(Exchangerecord(user.user._id));
      console.log('getRecord',getRecord.getRecord);

   }, []);

   function renderExchangRecord (){
      return _.map(getRecord.getRecord,(item)=>{
         return (
            <div className="ex-box" key={ Math.random() }>
               <h4>{ item.name }</h4>
               <span>{ moment(item.exchangeDate).format('YYYY-MM-DD  H:mm')  }</span>
            </div>
         );
      });
   }

   return (
      <div className="exContent">
         {renderExchangRecord()}
      </div>
   );
}
