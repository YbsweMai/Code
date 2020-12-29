<template>
  <div>
    <div class="center-box">
      <div>
        <div class="input-box login-input-box">
          <div class="input-Title">
            用户名
          </div>
          <div>
            <input
              v-model="username"
              class="input"
            />
          </div>
        </div>
        <div class="input-box login-input-box">
          <div class="input-Title">
            密码
          </div>
          <div>
            <input
              v-model="password"
              class="input"
              type="password"
            />
          </div>
        </div>
        <div class="login-btn-box container-col vertical">
          <button
            class="normal-btn login-btn"
            @click="login"
          >
            登陆
          </button>
          <button
            class="normal-btn sign-up-btn"
            @click="showModal"
          >
            注册
          </button>
        </div>
      </div>
    </div>

    <regisModal></regisModal>
    <errorModal></errorModal>
  </div>
</template>

<script>

/* modal */
import regisModal from '../../components/modal/registModal/registModal';
import errorModal from '../../components/errorModal/ErrorModal';

/* style */
import './Login.scss';

import { mapActions } from 'vuex';

/* 引入正则 */
import { checkName,checkPassword } from '../../common/utils';

export default {
   name: 'Login',
   components:{
      regisModal,
      errorModal,

   },

   data (){
      return{
         username:'',
         password:''
      };
   },
   methods:{
      ...mapActions([ 'sendLogin' ]),
      showModal (){
         this.$modal.show('regist',{
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false,
         });
      },
      login (){
         if(!checkName(this.username)){
            this.$modal.show('errorshow',{ message:this.$t('login.error.name') });
         }else if(!checkPassword(this.password)){
            this.$modal.show('errorshow',{ message:this.$t('login.error.password') });
            this.password = '';
         }else {
            let data = {
               username:this.username,
               password:this.password
            };
            this.sendLogin(data);

         }

      }
   }

};

</script>

