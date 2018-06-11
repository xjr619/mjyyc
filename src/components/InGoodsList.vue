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
      <div class="component-box-btn-box">
        <el-button type="info" @click="showAddDialog"  size="small" icon="el-icon-plus" plain>登记入货</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" icon="el-icon-edit"  size="small" plain>编辑单据</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" icon="el-icon-check"  size="small" plain>保存单据</el-button>
      </div>
      <div class="component-box-btn-box">
        <el-button type="info" icon="el-icon-delete"  size="small" plain>删除单据</el-button>
      </div>
    </div>
    <el-dialog title="登记入货" :visible.sync="dialogFormVisible" :modal="true" :lock-scroll="true" :close-on-click-modal="false" :show-close="false">
      <regitster-in-goods></regitster-in-goods>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import RegitsterInGoods from '../components/RegitsterInGoods'
export default {
  name: 'InGoodsList',
  props: {},
  components: {
    RegitsterInGoods: RegitsterInGoods
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
  watch: {
    $route: function(val, oldVal) {
      console.log(val)
      if (val.query.queryString) {
        this.$set(this.tableData, this.tableData.length, {
          date: '2016-05-03',
          name: val.query.queryString,
          address: '上海市普陀区金沙江路 1516 弄'
        })
      }
    }
  },
  computed: {},
  created() {},
  methods: {
    showAddDialog() {
      this.dialogFormVisible = true
    }
  },
}
</script>

<style>
@import url('../style/components/common.css');
@import url('../style/components/InGoodsList.css');
</style>
