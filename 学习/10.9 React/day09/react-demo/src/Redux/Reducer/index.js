import { combineReducers } from 'redux';

/* global */
import loading from './loading';
import modal from './modal';

/* page */
import login from '../../Feature/Login/state/reducer';
import menu from '../../Feature/Menu/state/reducer';
import user from '../../Feature/User/state/reducer';
import shopMall from '../../Feature/ShopMall/state/reducer';
import getRecord from '../../Component/ExchangeRecord/state/reducer';

const rootReducer = combineReducers({
   login,
   menu,
   modal,
   loading,
   user,
   shopMall,
   getRecord
});

export default rootReducer;