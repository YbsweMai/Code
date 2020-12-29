import request from '../common/request';
import { host } from '../common/config';

export async function submit (data){

   const result = await request({
      url:`${host}/order`,
      method:  'put',
      data

   });

   return result;
}