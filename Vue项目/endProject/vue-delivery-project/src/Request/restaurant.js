import request from '../common/request';
import { host } from '../common/config';

export async function rest (){

   const result = await request({
      url:`${host}/restaurant/location/-74.0059413,40.7127837`,
      method:  'get',

   });

   return result;
}