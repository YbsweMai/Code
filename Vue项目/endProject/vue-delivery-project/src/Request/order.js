import request from '../common/request';
import { host } from '../common/config';

export async function order (id){

   const result = await request({
      url:`${host}/order/${id}`,
      method:  'get'
   });

   return result;
}