import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash';

/* actions */
import { loadShop } from './state/action';
import { getUser } from '../User/state/action';
import { Exchangeshop } from './state/action';

/* image */
import img5 from '../../Assets/img5.png';

import './shopMall.css';

export default function ShopMall () {

   const dispatch = useDispatch();

   const shopMall = useSelector(state=>state.shopMall);

   useEffect(() => {

      dispatch(loadShop());
      console.log('shopList',shopMall);
   }, []);

   const user = useSelector(state=>state.user);

   useEffect(() => {

      dispatch(getUser());

   }, []);

   // const exchange = useSelector(state=>state.exchange);

   function renderMenu (){

      return _.map(shopMall.shopMall,(item)=>{

         return (
            <div className="shop-box" key={ item._id } >
               <img src={ item.image } alt="" />
               <span className="shopName"> {item.name} </span>
               <div className="point">
                  <div className="point-left">
                     <img src={ img5 } alt="" />
                     <span> {item.price} 积分</span>
                  </div>
                  <div className="point-right">
                     <button onClick={ ()=>{
                        dispatch(Exchangeshop(item._id));
                        dispatch(getUser());
                        // console.log(exchange.exchange.message);
                     } }>兑换</button>
                  </div>
               </div>
            </div>
         );
      });
   }
   return (
      <div className="mall-container">
         <div className="mall-header">
            <h2>商城</h2>
         </div>
         <div className="bcg">
            <h3>当前积分</h3>
            <h2> {user.user.integration} </h2>
         </div>
         <div className="shop">
            <h4>商品列表</h4>
            <div className="shop-container">
               {renderMenu()}
            </div>
            <div>{shopMall._id}</div>
         </div>
      </div>
   );
}
