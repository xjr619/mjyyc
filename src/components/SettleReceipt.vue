<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" :sortable="true" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" :sortable="true" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" :resizable="true" width="150">
        <template slot-scope="scope">
          <el-button @click="handleSettleReceipt(scope.row)" type="text" size="small">打单</el-button>
          <el-button @click="handleSettleReceiptDetail(scope.row)" type="text" size="small">单据详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" :modal="true" :lock-scroll="true" :close-on-click-modal="false" :show-close="true">
      <pa-date-in-goods-list></pa-date-in-goods-list>
    </el-dialog>
  </div>
</template>

<script>
import PaDateInGoodsList from '../components/PaDateInGoodsList'
export default {
  name: 'SettleReceipt',
  props: {},
  components: {
    PaDateInGoodsList: PaDateInGoodsList
  },
  data() {
    return {
      dialogFormVisible: false,
      date: '2018年6月',
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  computed: {
    title() {
      return this.date + '单据列表'
    }
  },
  methods: {
    handleSettleReceipt(row) {},
    handleSettleReceiptDetail(row) {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
@import url('../style/components/SettleReceipt.css');
</style>