<template>
  <div class="container-home">
    <el-row>这是首页</el-row>
    <el-row>
      <el-col :span="16">
        <div class="grid-content">
          <router-link to="/ingoods">
            <el-button type="primary" plain>登记入货</el-button>
          </router-link>
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
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    Search: Search
  }
}
</script>

<style>
@import url('../style/page/common.css');
@import url('../style/page/home.css');
</style>
