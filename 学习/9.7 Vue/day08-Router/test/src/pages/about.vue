<template>
    <div>
        about
        <h1>{{ name }}</h1>
        <h1>{{id}}</h1>
    </div>
</template>

<script>
export default {
    name:'about',
    data(){
        return{
            name:'',
            id:null
        }
    },
    created() {  // 接受参数时是route 不是router
        console.log(this.$route) 
        console.log(this.$route.params)
        // this.name = this.$route.params.b.name
        this.name = this.$route.query.name
        this.id = this.$route.params.id
    },
}
</script>