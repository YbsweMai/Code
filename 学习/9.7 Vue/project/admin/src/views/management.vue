<template>
  <div class="manage-container">
    <div class="manage-slide">  

    </div>

    <div class="manage-main">
      <h3>商品管理
        <span>
          <el-popconfirm
              title="确认退出嘛" @onConfirm="confirmQuit">
              <el-button slot="reference" round>退出</el-button>
          </el-popconfirm>
        </span>
      </h3>
      <div class="manage-warpper">
          <el-button @click="handelAdd" class="add-btn" type="primary" icon="el-icon-edit">增加</el-button>
          <div class="table-box">
            <el-table  :data="list" border style="width: 100%">
              <!-- v-if="isDeleted == true" -->
              <el-table-column prop="_id" label="id" width="280"> </el-table-column>
              <el-table-column prop="name" label="商品名称" width="410"> </el-table-column>
              <el-table-column prop="image" label="商品图片" width="180"> 
                <template slot-scope="scope" >
                  <img class="pro-image" :src="scope.row.image"  alt="">
                </template>
              </el-table-column>
              <!-- <el-table-column prop="createdAt" label="商品图片" width="180"> </el-table-column> -->

              <!-- 操作按钮 -->
               <el-table-column label="操作"  width="280">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)" class="edit-btn">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)" class="delete-btn">删除</el-button>
                  </template>
                </el-table-column>              
            </el-table>
          </div>           
      </div>
    </div>

    <!-- 新增商品弹框 -->
    <el-dialog :title="dialogStatus == 'create' ? '新增商品' : '编辑商品'" :visible.sync="dialogFormVisible" @close="closeModel">
      <el-form :model="proObj" ref="modelForm" :rules="rules">
        <el-form-item label="商品名称" :label-width="'100px'" prop="name">
          <el-input v-model="proObj.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="商品图片链接" :label-width="'100px'" prop="image">
          <el-input v-model="proObj.image" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="兑换所需积分" :label-width="'100px'" prop="price">
          <el-input v-model.number="proObj.price" autocomplete="off"></el-input>
        </el-form-item>
       
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkData">确 定</el-button>

        <!-- <el-button @click="toggleModel(false)">取 消</el-button>
        <el-button type="primary" @click="toggleModel(false)">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'management',
  data() {
    return {
      list:[ ], // 商品列表
      dialogFormVisible:false , //编辑/新增的弹框
      // modelTitle:'新增', // 弹框标题
      proObj:{}, // 增加或编辑的每一条商品数据
      // 验证
      rules:{
        name:[ // 失去焦点后验证 必填 否则弹出message 
          {required: true, message:'请输入商品名称',trigger: 'blur'}
        ],
        image:[
          {required: true, message:'请输入商品图片地址',trigger: 'blur'}
        ],
        price:[
          {required: true, message:'请输入商品兑换所需积分',trigger: 'blur'},
          {type:'number', message:'积分必须为数字值'}

        ]
      },
      dialogStatus:'create'  // 编辑商品
    }
  },
  created() {
    this.getList()
  },
  methods: {

    /* 获取商品数据 */
    async getList (){
      const data = await this.yGet('admin/shopList')
      if(data){
        console.log('data',data)
        this.list = data
      }
    },

    /* 控制弹框显示隐藏 */
    toggleModel(bool){
      this.dialogFormVisible = bool
    },

    /* 点击新增显示弹框，并且修改弹框标题 */
    handelAdd(){
      this.dialogStatus = 'create';
      this.toggleModel(true)
      this.proObj = {} // 编辑后再次新增会显示编辑内容 所以每次点开新增按钮时再一次清空弹框内内容

    },
    
    /* 新增创建商品 */
    async create() {
      // console.log('proObj',this.proObj)
      const data = this.yPost('/admin/shopItem',this.proObj)
      if(data){
        this.$message({
          message:'添加成功',
          type:'success'
        })
        this.proObj = {} // 添加成功后清空表单信息
        this.toggleModel(false) // 关闭弹框
        this.getList() // 重新请求商品列表
      }
    },

    /* 对新增或编辑商品数据格式校验 */
    checkData(){
            this.$refs.modelForm.validate((valid) => {
                console.log('valid',valid)
                if (this.dialogStatus==='create') {
                  
                  this.create()
                } else if(this.dialogStatus==='update'){
                  this.update()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
    },

    /* 编辑商品按钮*/
    handleEdit(index,row) {
      console.log('row======>', row);
      this.toggleModel(true)
      this.dialogStatus = 'update';
      this.proObj = JSON.parse(JSON.stringify(row))  // 深拷贝 防止编辑时v-model双向绑定

    },

    /*  编辑商品接口 */
    async update(){
      let params = {
        data:{
          _id:this.proObj._id,
          name:this.proObj.name,
          price:this.proObj.price,
          image:this.proObj.image
        }
      }
      const res = await this.yPut('/admin/shopItem',params)
      if(res){
        console.log('修改成功',res)
        this.proObj = {} // 编辑成功后清空表单信息
        this.toggleModel(false) // 关闭弹框
        this.getList() // 重新请求商品列表
        this.$message ({
          message: '恭喜你,修改成功',
          type:'success'
        })
      }
    },
        

    /* 删除商品 */
    async handleDelete(index, row) {
      console.log('index==>',index);
      console.log('row==>',row._id)

            // let params = {
            //     id : JSON.stringify(this.list[index]._id)
            // }
            // console.log('params',params)
            // console.log('params',JSON.stringify(this.list[index]._id))
            const data = await this.yDel('/admin/shopItem',{id:row._id})
            // console.log('data',data)
            if(data){               
                console.log('删除成功')
                this.getList()
            }

      },

      /* 检测关闭弹窗 */
      closeModel(){
        this.proObj = {}
        console.log('关闭了弹窗')
        this.$refs.modelForm.clearValidate() // 清除验证规则
      },

      /* 退出登陆 */
      confirmQuit(){
        console.log(1)
        localStorage.removeItem("userid")  // 清空登陆信息
        this.$router.replace({  // 如果使用push还可以返回退出前的页面 所以用replace来替换
          name:'login'
        })
      }
  } 
}
</script>

<style scope lang="scss">
  .manage-container{
    // position: relative;
    padding-left: 36px;
    .manage-slide{
      position: fixed;
      width: 36px;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: #505050;
    }
    .manage-main{
      margin:  15px;
      
      h3{
        font-size: 20px;
        padding: 18px 30px;
        margin: 0;
        // border-bottom: 1px solid #dcdcdc;
        box-shadow: 0 2px 4px #eeeeee;
        span{
        float: right;
      }
      }
      .manage-warpper{
        .add-btn{
          margin: 15px 0;
          width: 89px;
          height: 39px;
          line-height: 1;
        }
        .table-box{
          .pro-image{
            width: 100px;
            height: 100px;
          }
          .edit-btn{
            width: 80px;
            height: 30px;
          }
          .delete-btn{
            width: 80px;
            height: 30px;
          }
        }
      }
    }
  }
.cell{
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss">
  // .el-button{
  //   padding: 0 !important;
  // }
</style>
