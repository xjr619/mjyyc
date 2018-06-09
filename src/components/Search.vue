<template>
  <div>
    <el-input :placeholder="placeholder" v-model="queryObj.query" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option v-for="(item, index) in labels" :key="index" :label="item" :value="index+1"></el-option>
      </el-select>
      <el-button style="width:112px;" slot="append" icon="el-icon-search" @click="search">搜索</el-button>
    </el-input>
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
      select: '',
      queryObj:{query:'',path:''},
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
    }
  },
  components: {}
}
</script>

<style>
@import url('../style/components/Search.css');
</style>