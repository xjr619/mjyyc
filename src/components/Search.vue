<template>
  <div>
    <el-autocomplete :placeholder="placeholder" :clearable="true"  v-model="queryObj.query"  :fetch-suggestions="queryList"  @select="handleSelectItem" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option v-for="(item, index) in labels" :key="index" :label="item" :value="index+1"></el-option>
      </el-select>
      <el-button class="search-btn" slot="append" icon="el-icon-search" @click="search">搜索</el-button>
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    queryString:{
      type:String,
      default:''
    }
  },
  computed:{
    placeholder() {
      if (this.select) {
        return '请输入' + this.labels[this.select-1]
      } else {
        return '请输入内容'
      }
    }
  },
  data() {
    return {
      labels: ['加工单号', '客户姓名', '医生姓名', '患者姓名', '加工项目', '业务员'],
      select: 1,
      queryObj:{query:'',path:''},
      list:[]
    }
  },
  watch:{
    queryString(){
      this.queryObj.query=this.queryString
    }
  },
  methods: {
    search(){
      this.queryObj.path=this.$route.path
      this.$emit("search-list",this.queryObj)
    },
    queryList(queryString, cb){
      var list = this.list;
        var results = queryString ? list.filter(this.createStateFilter(queryString)) : list;
        cb(results);
    },
    createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    handleSelectItem(){

    },
    getList(){
      return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" }]
    }
  },
  mounted() {
      this.list = this.getList();
  }
}
</script>

<style>
@import url('../style/components/Search.css');
</style>