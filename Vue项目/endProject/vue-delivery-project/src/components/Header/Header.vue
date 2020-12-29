<template>
  <div class="header">
    <div class="left container-between vertical">
      <a href="http://localhost:8080/restaurant">
        <img
          class="logo"
          src="../../assets/logo.png"
          alt=""
        ></a>
    </div>
    <div
      class="profile"

      @click="handleProfile()"
    >
      <img
        class="profile-logo"
        src="../../assets/profile-icon.png"
        alt=""
      >
    </div>

    <!-- 显示profile -->
    <div
      ref="dropBox"
      class="profile-drop-down"
      :style="{display:isShow ? 'block' : 'none'}"
    >
      <button
        v-if="isLogin === false"
        class="profile-button order-btn"
        :style="{backgroundColor: '#fff',color: '#797979'}"
        @click="login"
      >
        {{ $t("login.login") }}
      </button>

      <button
        v-if="orderLogin === true"
        class="profile-button order-btn"
        @click="order"
      >
        {{ $t("order.title") }}
      </button>

      <div
        class="language-button"
      >
        <button
          :class="language === 'zh-CN' ? 'on-choose' : ' '"
          @click="changeLanguage('zh-CN')"
        >
          中
        </button>
        <button
          :class="language === 'en-US' ? 'on-choose' : ' '"
          @click="changeLanguage('en-US')"
        >
          En
        </button>
      </div>
      <button
        v-if="isLogout === true"
        class="profile-button log-out"
        @click="logout"
      >
        {{ $t("logout") }}
      </button>
    </div>
  </div>
</template>

<script>

import './Header.scss';
import { getStorage  } from '../../common/utils';
import { mapActions }from'vuex';

export default {
   name:'Header',
   data (){
      return{
         isShow:false,
         language:getStorage('language') || 'zh-CN',
         /* 设置是否登陆状态属性 分别显示profile */
         isLogin:true,
         isLogout:false,
         /* 登陆后进入页面显示历史菜单 进入order隐藏历史菜单 */
         orderLogin:false
      };
   },
   created (){

   },
   methods:{
      ...mapActions([ 'setLanguage' ]),
      /* 显示profile */
      handleProfile (){
         /* 取消事件默认行为 */
         //  e.preventDefault();
         this.isShow = true;
         /* 添加handleOut鼠标事件 */
         document.addEventListener('click', this.handleOut, true);
         //  console.log('isShow',this.isShow);
         //  console.log(this.$route.name);

         this.changeBox();

      },
      /* 鼠标移出操作元素外改变changestyle状态 */
      handleOut (e){

         const ref = this.$refs.dropBox;
         if (ref && !ref.contains(e.target)) {
            // console.log('123');
            this.isShow = false;
            document.removeEventListener('click',this.handleOut,true);
         }
      },

      /* 根据路由名称改变drop down样式 */
      changeBox (){
         //  console.log('$route',this.$route);

         if(getStorage('user')){
            if(this.$route.name === 'Login' ){
               this.isLogin = true;
            }else if(this.$route.name === 'Restaurant'){
               this.isLogin = true;
               this.orderLogin = true;
               this.isLogout = true;
            }else if(this.$route.name === 'Order'){
               this.orderLogin = false;
               this.isLogout = true;
            }else if(this.$route.name !== 'Login' || this.$route.name !== 'Restaurant' || this.$route.name !== 'Order'){
               //  this.orderLogin = true;
               this.isLogout = true;
            }
         }else{
            this.isLogin = false;
         }
      },
      /* 切换语言按钮 */
      changeLanguage (v){
         this.$i18n.locale = v;
         this.language = v;
         this.setLanguage(v);
      },

      login (){
         this.$router.push({
            name:'Login'
         });
      },
      order (){
         this.$router.push({
            name:'Order'
         });
      },
      logout (){
         /* 清除localStorage所有值 */
         localStorage.clear();

         /* 移除后 改变状态 */
         this.isLogin = false;
         this.isLogout = false;
         this.orderLogin = false;
      }
   }
};
</script>