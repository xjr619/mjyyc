<template>
  <div id="app">
    <router-view keep-alive transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
   @import url("./style/app.css");
</style>