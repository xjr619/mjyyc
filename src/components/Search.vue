<template>
  <div>
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search">搜索</el-button>
  </el-input>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {

  },
  data() {
    return {
      select: ''
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>
    @import url('../style/components/Search.css');
</style>