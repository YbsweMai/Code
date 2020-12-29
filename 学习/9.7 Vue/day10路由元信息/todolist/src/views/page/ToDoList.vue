<template>
    <div class="container">
        <h4 class="title">任务列表</h4>
        
        <div class="content">
            <div class="input">
                <span>添加任务:</span>
                <input v-model="inputValue" @keyup.enter="addTask" type="text" placeholder="输入任务名称">
            </div>

            <div class="task">
                 <div class="left">
                    <p @click="jump('unfinished')">未完成任务({{this.list.length}})</p>
                    <p @click="jump('finish')">已完成任务</p>
                    <p @click="jump('all')">全部任务</p>
                    <!-- <div v-for="(nav,index) in nav" :key="index">

                        <p@click="jump('all')">{{nav.title}}({{nav.length}})</p@click=>
                    </div> -->
                        
                </div>
                <div class="right">
                    <div>
                        <div v-for="(item, index) in list" :key="index" >
                            <div v-if="nowClick === item.type "  class="tasks">
                    <!-- `checked` 为 true 或 false -->
                                <div >
                                    <el-checkbox  v-model="checked" @change="chanceType(item)"></el-checkbox> 
                                </div>
                                <div class="word">{{item.task}}</div>
                            </div>
                        </div>
                    </div>
                    <router-view></router-view>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ToDoList',
    data() {
      return {
        inputValue:'',
        // nav:[
        //     { title:'未完成任务', type:'unfinished'},
        //     { title:'已完成任务', type:'finish'},
        //     { title:'全部任务', type:'all'}
        // ],
        list:[ ],
        task:'',
        type:'',
        nowClick :'unfinished',
        checked: true
      };
    },
    methods: {
        addTask(){

            if(!this.inputValue) return
            this.list.push({ task:this.inputValue, type:'unfinished' })
            console.log(this.list[0].type)
            // this.list.length = this.list.length + 1
            return  this.inputValue = ''
        },
        jump(type){
            this.nowClick = type
            console.log(this.nowClick)
            this.list.forEach(item => {
                if(item.type == this.nowClick){
                    console.log('11', item.type)
                }
            });
        },
        chanceType(item){
            // this.list.tpye = 'finish'
            // console.log(item.type)
            // console.log('index',item.index)
            console.log(this.checked)
            item.type = 'finish'
        }
    },
    computed: {
        notFinish(){

        }
    },
}
</script>

<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px 100px;
        .title{
            text-align: center;
            color: white;
            background-color: skyblue;
            font-weight: 400;
            border-radius: 10px 10px 0 0;
        }

        .content{
            display: flex;
            flex-direction: column;
            background-color: gray;
            padding: 50px 50px;

            .input{
            display: flex;
            height: 30px;
            padding-bottom: 50px;
                span {
                    width: 80px;  
                    line-height: 30px;
                    font-size: 14px;
                }
                input{
                    width: 100%;
                    padding: 0 10px;
                }
            }
            .task{
                display: flex;
                margin: 20px 0;

                .left{

                    p{
                        font-size: 14px;
                        margin-bottom: 20px;
                        width: 100px;
                        background-color: white;
                        text-align: center;
                    }
                }

                .right{
                    background-color: white;
                    width: 100%;
                    margin: 0 20px;
                }
            }
        }
    }
</style>