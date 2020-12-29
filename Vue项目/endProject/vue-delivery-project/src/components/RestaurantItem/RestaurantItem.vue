<template>
  <div>
    <div
      class="rest-box"
      @click="jumpdetail"
    >
      <div class="titleText">
        {{ name }}
      </div>
      <div class="subTitleText">
        <div
          v-for="restTags in tags"
          :key="restTags.id"
        >
          {{ restTags.tag }}
        </div>
      </div>
      <div class="img-box">
        <div class="img-box1">
          <div class="rest-food-name">
            <!-- {{ item.items[0].name[`${lang}`] }} -->
            {{ imageName0 }}
          </div>
          <div class="rest-image-box">
            <img
              src="../../assets/dark-dish.png"
              class="dish-image"
            >
            <img
              class="food-image"
              :src="imageUrl0"
              style="width :100%"
            >
          </div>
        </div>
        <div
          class="
              img-box2"
        >
          <div class="rest-food-name">
            <!-- 由于延迟页面刚进时可能取不到item数值 控制台会报错 所以进行非空判断 -->
            {{ imageName1 }}
          </div>
          <div class="rest-image-box">
            <img
              src="../../assets/dark-dish.png"
              class="dish-image1"
            >
            <img
              class="food-image"
              :src="imageUrl1"
              style="width :100%"
            >
          </div>
        </div>
        <div class="img-box3">
          <div class="rest-food-name">
            <!-- {{ item && item.items[2] && item.items[2].name[`${lang}`] }} -->
            {{ imageName2 }}
          </div>
          <div class="rest-image-box">
            <img
              src="../../assets/dark-dish.png"
              class="dish-image1"
            >
            <img
              class="food-image"
              :src="imageUrl2"
              style="width :100%"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './RestaurantItem.scss';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { mapActions,mapState } from 'vuex';
import { cleanStorage,setStorage }from '@/common/utils.js';

export default {
   name:'RestaurantAssembly',

   props:{
      item:{
         type:Object,
         required:true
      }
   },
   data (){
      return{
         /* 默认数组 */
         defaultItems: [
            {
               name: {
                  'zh-CN': '红烧狮子头',
                  'en-US': 'Stewed Lion Head Chinese Meatballs'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-3r7hnd04jyk7nbn3.png'
            },
            {
               name:  {
                  'zh-CN': '三杯鸡',
                  'en-US': 'Three Cups Chicken'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-5b7jxyy2jvu95frk.png'
            },
            {
               name: {
                  'zh-CN': '番茄鸡蛋面',
                  'en-US': 'Tomato Egg Noodle'
               },
               image:     'https://s3.amazonaws.com/ricepo-food/image-o1bt3qsjz0fhei4.png'
            }
         ]
      };
   },
   computed:{
      ...mapState({
         lang:state=>state.language.lang,
         restName:state=>state.restTitle.name
      }),

      /* 用lodash重新计算值 否则由于请求是异步操作页面进来取不到item的值会报错 */
      name (){
         return _.get(this.$props.item,`name[${this.lang}]`,'');
      },
      tags (){
         let restTags = [];
         /* tags是一个数组 遍历tags 根据语言变化 */
         _.forEach(this.$props.item.tags,(item)=>{
            restTags.push({
               tag: this.$t(`tags.${item}`),
               id: uuidv4()
            });
         });
         return restTags;

      },

      /* 菜品名 */
      imageName0 (){

         return _.get(this.$props.item,`items[0].name[${this.lang}]`,this.defaultItems[0].name[`${this.lang}`]);
      },
      imageName1 (){

         return _.get(this.$props.item,`items[1].name[${this.lang}]`,this.defaultItems[1].name[`${this.lang}`]);
      },
      imageName2 (){

         return _.get(this.$props.item,`items[2].name[${this.lang}]`,this.defaultItems[2].name[`${this.lang}`]);
      },
      /* 菜品图片地址 */
      imageUrl0 (){
         return _.get(this.$props.item,'items[0].image.url',this.defaultItems[0].image);
      },
      imageUrl1 (){
         return _.get(this.$props.item,'items[1].image.url',this.defaultItems[1].image);
      },
      imageUrl2 (){
         return _.get(this.$props.item,'items[2].image.url',this.defaultItems[2].image);
      },
   },
   methods: {
      ...mapActions([ 'setTitle' ,'clearCountArray' ]),
      /* 利用路由跳转到menu页面 并传入每个商店id和name到menu 到menu页面时rul就带上了商店id */
      jumpdetail () {
         setStorage('cartId',this.item._id);
         this.$router.push({
            name: 'Menu',
            params: {
               /* restId要和router里menu的path后面跟的参数一致才行 */
               restId: this.item._id,
               /* 将点击的item传到item‘页面 */
               //  restItem:this.item
            }
         });
         if(this.item._id !== this.restName.restId){
            cleanStorage('cart');
            this.clearCountArray();
         }
         let data = {
            title:this.$props.item.name,
            tags : this.$props.item.tags,
            restId:this.item._id
         };
         this.setTitle(data);

      }
   }

};
</script>

