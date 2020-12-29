<template>
  <div>
    <div class="menu-box">
      <div class="titleText">
        <!-- {{ restItem.name[`${lang}`] }} -->
        {{ name.title[`${lang}`] }}
      </div>
      <div class="sub-titleText">
        <!-- {{ $t(`tags.${restItem.tags}`) }} -->
        <div
          v-for="i in restTags"
          :key="i.id"
        >
          {{ i.tag }}
        </div>
      </div>
      <div class="all-category-box">
        <div
          v-for="item in menuList "
          :key="item.id"
          class="category-box"
        >
          <div>
            <div class="titleText">
              {{ item.category.name[`${lang}`] }}
            </div>
            <div
              class="rectangle"
              style="position : relative; left : 0px;"
            ></div>
          </div>

          <div
            v-for="i in item.foods "
            :key="i.id"
            class="menu-food-item cursor"
          >
            <div>
              <div
                v-show=" i.count>0 "
                class="menu-count"
              >
                <div class="menu-count-text">
                  {{ i.count }}
                </div>
              </div>
            </div>
            <div
              class="containerBetween cursor"
              @click="addCount(i)"
            >
              <div
                class="menu-text cursor"
                :style="{ opacity : i.available ? 1 : 0.2}"
              >
                {{ i.name[`${lang}`] }}
              </div>
              <div
                class="menu-price cursor"
                :style="{ opacity : i.available ? 1 : 0.2}"
              >
                {{ i.price|formatPrice }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart>123</Cart>
  </div>
</template>

<script>
import Cart from './component/Cart';
import {  mapActions ,mapState } from 'vuex';
import { setStorage  } from '@/common/utils.js';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import './menu.scss';

export default {
   name:'Menu',
   filters: {
      formatPrice (value) {
         return '$' + value / 100;
      }
   },
   components:{
      Cart
   },
   data (){
      return{
         menu:{},
         //  id:this.$route.params.id,
         restItem:this.$route.params.restItem,
         id:this.$route.params.restId,
         //  name: this.restItem.name
      };
   },
   computed:{
      ...mapState({
         menuList: state=>state.menu.menuList,
         lang:state=>state.language.lang,
         count:state=>state.menu.count,
         name:state=>state.restTitle.name
      }),
      /* 用lodash重新计算值 否则由于请求是异步操作页面进来取不到item的值会报错 */
      restName (){
         //  console.log('this.name.title=====>',this.name.title);
         return _.get(this.name.title,`name[${this.lang}]`,'');
      },
      restTags (){
         let restTags = [];
         /* tags是一个数组 遍历tags 根据语言变化 */
         _.forEach(this.name.tags,(item)=>{
            restTags.push({
               tag: this.$t(`tags.${item}`),
               id: uuidv4()
            });
         });
         return restTags;

      },

   },
   created (){
      /* 由restaurantItem传来的商店id */
      // console.log('restaurant传值 item', this.$route.params.restItem);
      // console.log('restaurant传值 id', this.$route.params.restId);
      // console.log('restaurant传值 id123131', this.restItem);
      /* 将id传入actions中 */
      // this.getMenu(this.restItem._id);
      this.getMenu(this.id);
   },

   methods:{
      ...mapActions([ 'getMenu' , 'setCountArray' ]),
      addCount (i){
         setStorage('cart',this.count);
         setStorage('menuList',this.menuList);
         if(i.available === true){
            i.count += 1;
            this.setCountArray(i);
         }

      }

   }
};

</script>

