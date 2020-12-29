import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '../src/common/I18n/language';
import Moment from 'moment';

import VModal from 'vue-js-modal';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, injectModalsContainer: true, dynamicDefaults: { clickToClose: true } });

Vue.filter('globalFormatTime', value => {

   let time = Moment(value).format('YYYY-MM-DD  H:mm');
   return time;
});

new Vue({
   router,
   store,
   i18n,
   render: h => h(App)
}).$mount('#app');
