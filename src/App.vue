<template>
  <div id="app">
    <!-- <i class="icon iconfont icon-huiyuanqia"></i>
    <i class="icon iconfont icon-31dianpu"></i>
    <i class="icon iconfont icon-gongnengjianyi"></i>
    <i class="icon iconfont icon-goumai"></i>
    <i class="icon iconfont icon-hanbao"></i>
    <i class="icon iconfont icon-shouji"></i>
    <i class="icon iconfont icon-zuanshi"></i> -->

    <!-- 侧边栏 -->
    <leftNave></leftNave>
    <!-- 操作区 -->
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import leftNave from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNave,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
 
}
</style>
