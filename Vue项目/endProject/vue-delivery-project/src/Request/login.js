import request from '../common/request';
import { host } from '../common/config';

export async function login (data){

   const result = await request({
      url:`${host}/user/login`,
      method:  'post',
      data
   });

   return result;
}