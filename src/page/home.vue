<template>
  <div class="container-home">
    <div class="home-title">美嘉誉义齿</div>
    <div class="home-menu">
      <el-row>
        <el-col :span="15">
          <div class="grid-content">
            <el-button  @click="showInGoodsDialog" type="info" plain>登记入货</el-button>
            <router-link to="/outgoods">
              <el-button  @click="showSearch"  type="info" plain>出货打单</el-button>
            </router-link>
            <el-button  @click="showSettle" type="info" plain>结算打单</el-button>
            <router-link to="/customer">
              <el-button  @click="showSearch"  type="info" plain>客户信息</el-button>
            </router-link>
            <router-link to="/staff">
              <el-button  @click="showSearch"  type="info" plain>员工信息</el-button>
            </router-link>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <search v-show="isSearch" :queryString.sync="queryString" @search-list="searchForList"></search>
            <settle-search  v-show="!isSearch"></settle-search>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-view">
      <router-view></router-view>
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
import Search from '../components/Search'
import SettleSearch from '../components/SettleSearch'
import RegitsterInGoods from '../components/RegitsterInGoods'
import AddStaff from '../components/AddStaff'
import Vue from 'vue';
export default {
  data() {
    return {
      dialogFormVisible: false,
      isSearch:true,
      queryString:'',
      bus:new Vue
    }
  },
  components: {
    Search: Search,
    RegitsterInGoods: RegitsterInGoods,
    AddStaff: AddStaff,
    SettleSearch: SettleSearch
  },
  methods: {
    searchForList(queryObj){
      
       this.$router.push({ path: queryObj.path,query: {queryString:queryObj.query}})
    },
    showInGoodsDialog(activeIndex) {
      this.isSearch = true
      this.$router.push({ path: '/' })
      this.dialogFormVisible = true
    },
    showSearch(){
      this.isSearch=true
    },
    showSettle(){
      this.isSearch=false
      this.$router.push({ path: '/settle' })
    }
  }
}
</script>

<style>
@import url('../style/page/common.css');
@import url('../style/page/home.css');
</style>
