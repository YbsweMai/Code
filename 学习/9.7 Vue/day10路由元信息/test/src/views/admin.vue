<template>
    <div class="container">
        <div class="top">
            <el-input v-model="input" placeholder="关键字查询"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button icon="el-icon-edit" @click="dialogTableVisible = true">添加</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="ID">
                    <el-input v-model="form.ID"></el-input>
                </el-form-item>
                <el-form-item label="课程分类">
                    <el-input v-model="form.class"></el-input>
                </el-form-item>
                <el-form-item label="课程名称">
                    <el-input v-model="form.className"></el-input>
                </el-form-item>
                <el-form-item label="课程简介">
                    <el-input v-model="form.a"></el-input>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="form.b"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>    
        </el-dialog>
        </div>

        <div class="content">
            <template>
                <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%
                    ">
                    <el-table-column 
                    prop="ID"
                    label="ID"
                    width="80">
                    </el-table-column>

                    <el-table-column
                    prop="class"
                    label="课程分类"
                    width="180">
                    </el-table-column>

                    <el-table-column
                    prop="className"
                    label="课程名称"
                    width="120">
                    </el-table-column>

                    <el-table-column
                    prop="a"
                    label="课程简介">
                    </el-table-column>

                    <el-table-column
                    prop="b"
                    label="排序值"
                    width="80">
                    </el-table-column>

                        <el-table-column
                            prop="address"
                            label="操作">
                            <template slot-scope="scope">

                                <el-button type="primary">编辑</el-button>
                                <el-button @click="del(scope.$index, tableData)" type="danger">删除</el-button>
                                <el-button type="success">配置</el-button>  
                            </template>
                 
                        </el-table-column>
                    
                </el-table>
            </template>
        </div>

        <div class="footer">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage1"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        dialogTableVisible: false,
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4,
        tableData: [{
          ID: '1',
          class: '第二专业',
          className: 'web2',
          a:'简介111',
          b:'1'
        }, {
          ID: '2',
          class: '第二专业',
          className: 'web2',
          a:'简介111',
          b:'2'
        }, 
        {
          ID: '2',
          class: '第二专业',
          className: 'web2',
          a:'简介111',
          b:'2'
        },{
          ID: '3',
          class: '第二专业',
          className: 'web2',
          a:'简介111',
          b:'3'
        }],
        form:{
            ID: '',
            class: '',
            className: '',
            a:'',
            b:''
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      del( index, rows ){   
          rows.splice(index, 1);
      },
      onSubmit(){
          console.log(this.form)
          this.tableData.push(this.form)
          this.dialogTableVisible = false
      }
    }
}
</script>

<style lang="scss">

.container{
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    .top{
        display: flex;
        width: 350px;
        margin-top: 20px;
        .el-input{
            margin-right: 10px;
        }
    }
    .content{
        margin-top: 20px;
    }
    .footer{
        display: flex;
        flex-direction: row-reverse;
    }
}

</style>