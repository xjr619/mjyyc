<template>
  <div class="container-home">
    <el-row>这是首页123342r532 </el-row>
    <el-row>
      <el-col :span="16">
        <div class="grid-content">
          <el-button type="primary"  @click="dialogFormVisible = true" plain>登记入货</el-button>
          <router-link to="/outgoods">
            <el-button type="success" plain>出货打单</el-button>
          </router-link>
          <router-link to="/settle">
            <el-button type="info" plain>结算打单</el-button>
          </router-link>
          <router-link to="/customer">
            <el-button type="warning" plain>客户信息</el-button>
          </router-link>
          <router-link to="/staff">
            <el-button type="danger" plain>员工信息</el-button>
          </router-link>
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
    <el-dialog title="登记入货" :visible.sync="dialogFormVisible" modal="true" lock-scroll="true" close-on-click-modal="false" show-close="false">
      <regitster-in-goods></regitster-in-goods>
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
export default {
  data() {
    return {
        dialogFormVisible: false
    }
  },
  methods: {},
  components: {
    Search: Search,
    RegitsterInGoods:RegitsterInGoods
  }
}
</script>

<style>
@import url('../style/page/common.css');
@import url('../style/page/home.css');
</style>
