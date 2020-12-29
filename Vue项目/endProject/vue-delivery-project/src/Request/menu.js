import request from '../common/request';
import { host } from '../common/config';

export async function menu (data){

   // console.log('aaa', data);
   const result = await request({
      url:`${host}/menu/restaurantId/${data}`,
      method:  'get',
      data

   });

   return result;
}