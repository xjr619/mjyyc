<template>
  <div class="component-box">
    <div class="component-box-list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div class="component-box-menu">
      <div  class="component-box-btn-box">
        <el-button type="info" @click="showAddDialog" plain>新增客户</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" plain>编辑客户</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" plain>保存客户</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" plain>删除客户</el-button>
      </div>
    </div>
    <el-dialog title="新增客户" :visible.sync="dialogFormVisible" :modal="true"  :lock-scroll="true"  :close-on-click-modal="false" :show-close="false">
      <add-customer></add-customer>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AddCustomer from '../components/AddCustomer'
export default {
  name: 'CustomerInfo',
  props: {},
  components: {
    AddCustomer: AddCustomer
  },
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed:{},
  created() {
    
  },
  methods: {
    showAddDialog() {
      this.dialogFormVisible = true
    }
  },
  components: {}
}
</script>

<style>
@import url('../style/components/common.css');
@import url('../style/components/CustomerInfo.css');
</style>
