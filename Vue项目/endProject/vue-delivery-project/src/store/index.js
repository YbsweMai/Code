import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import loading from './loading';

/* login */
import login from '../views/Login/module';

/* order */
import order from '../views/Order/module';

/* regist */
import regist from '../components/modal/registModal/module';

/* restaurant */
import restList from '../views/Restaurant/module';

import restTitle from './restaurantTitle';

/* menu */
import menu from '@/views/Menu/module/index';

/* submit */
import submit from '@/views/Menu/component/module/index';

/* language */
import language from './language';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
      loading,
      login,
      menu,
      submit,
      language,
      order,
      regist,
      restList,
      restTitle

   }
});
