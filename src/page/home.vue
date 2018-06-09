<template>
  <div class="container-home">
    <el-row>这是首页123342r532 </el-row>
    <el-row>
      <el-col :span="16">
        <div class="grid-content">
          <el-button type="primary" @click="showDialog(0)" plain>登记入货</el-button>
          <router-link to="/outgoods">
            <el-button type="success" plain>出货打单</el-button>
          </router-link>
          <router-link to="/settle">
            <el-button type="info" plain>结算打单</el-button>
          </router-link>
          <el-button type="warning" @click="showDialog(1)" plain>客户信息</el-button>
          <el-button type="danger" @click="showDialog(2)" plain>员工信息</el-button>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <search></search>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>
    12345432
    <el-dialog :title="titles[activeIndex]" :visible.sync="dialogFormVisible" modal="true" lock-scroll="true" close-on-click-modal="false" show-close="false">
      <regitster-in-goods v-show="activeIndex==0"></regitster-in-goods>
      <add-customer v-show="activeIndex==1"></add-customer>
      <add-staff v-show="activeIndex==2"></add-staff>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Search from '../components/Search'
import RegitsterInGoods from '../components/RegitsterInGoods'
import AddCustomer from '../components/AddCustomer'
import AddStaff from '../components/AddStaff'
export default {
  data() {
    return {
      dialogFormVisible: false,
      activeIndex: 0,
      titles: ['登记入货', '新增客户', '新增员工'],
      sonRouters: ['/', '/customer', '/staff']
    }
  },
  components: {
    Search: Search,
    RegitsterInGoods: RegitsterInGoods,
    AddCustomer: AddCustomer,
    AddStaff: AddStaff
  },
  methods: {
    showDialog(activeIndex) {
      this.activeIndex = activeIndex
      this.$router.push({ path: this.sonRouters[activeIndex] })
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
@import url('../style/page/common.css');
@import url('../style/page/home.css');
</style>
