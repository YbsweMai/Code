import request from '../Common/request';

export async function exchangerecord (id){

   const result = await request({
      url:     'http://49.235.98.65:3000/shop/exchangedRecord',
      method:  'get',
      data:{
         id
      }
   });

   return result;
}