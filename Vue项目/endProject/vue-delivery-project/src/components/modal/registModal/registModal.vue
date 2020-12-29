
<template>
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <!-- <div class="container"> -->
    <div class="sign-up-modal container-col vertical space-between">
      <div class="sign-up-type-in">
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            用户名
          </div>
          <input
            v-model="username"
            class="input"
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            密码
          </div>
          <input
            v-model="password"
            class="input"
            type="password"
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            确认
          </div>
          <input
            v-model="confirmPassword"
            class="input"
            type="password"
          />
        </div>
        <div class="container-col vertical space-between sign-up-btn-box">
          <button
            class="normal-btn login-btn"
            @click="regist"
          >
            注册
          </button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </modal>
</template>

<script>

import { checkName,checkPassword } from '../../../common/utils.js';
import { mapActions } from 'vuex';

import './registModal.scss';
export default {
   name:'RegistModal',
   data (){
      return{
         username:'',
         password:'',
         confirmPassword:''
      };
   },

   methods:{
      ...mapActions([ 'sendRegist' ]),
      errorModal (){
         this.$modal.show('errorshow',{
            text: 'This text is passed as a property',
         }, {
            draggable: true,
            clickToClose: false,
         });
      },

      regist (){
         /* 前端正则验证完成后 发送请求 */
         if(!checkName(this.username)){
            this.$modal.show('errorshow',{ message:this.$t('login.error.name') });
         }else if(!checkPassword(this.password)){
            this.$modal.show('errorshow',{ message:this.$t('login.error.password') });
            this.password = '';
         }

         else if(this.confirmPassword != this.password){
            this.$modal.show('errorshow',{ message:this.$t('login.error.comfirmPassword') });
            this.confirmPassword = '';

         }
         else {
            let data = {
               username:this.username,
               password:this.password
            };

            this.sendRegist(data);
            this.$modal.show('errorshow',{ message:this.$t('login.signUpSuccess') });
            this.$modal.hide('regist');
            this.username = '';
            this.password = '';
            this.confirmPassword = '';
         }

      }

   },

};
</script>
