<template>
  <div id="app">
    <!-- 头部 -->
    <Top></Top>
    <Index></Index>
  </div>
</template>

<script>
import Top from './components/01.top.vue'
import Index from './components/02.index.vue'


export default {
  name: 'App',
  components:{
    Top,
    Index
  }
}
</script>

<style>

</style>
