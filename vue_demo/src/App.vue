<template>
   <div id="app">
     <Footer/>
    <router-view/>
  </div>
</template>

<script>
  import vue from 'vue'
  import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  data(){
      return{

      }
  },
  components:{
Footer,
  }
}
</script>

<style scoped lang="less">


</style>
