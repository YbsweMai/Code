<template>
    <div>
        <button @click="deleP">删除商品</button>
        <button @click="updatePassword">修改密码</button>
    </div>
</template>

<script>
export default {
    name:'dele',
    data(){
        return{

        }
    },
    created() {
     },
    methods: {
        async deleP (){
            let params = {
                id: '5f69cd1b0023164a8b9f3ee3'
            }
            const data = await this.abcDel('/admin/shopItem',params)
            console.log('data',data)
            if(data){               
                console.log('删除成功')
            }
        },

        async updatePassword (){
            let params = {
                oldPassword:'alalal',
                newPassword:'abcabc',
            }
            const data = await this.abcPut('/user/changePassword',params)
            console.log('updatePassword data',data)
             if(data){               
                console.log('更改成功')
            }
        }
    },
}
</script>