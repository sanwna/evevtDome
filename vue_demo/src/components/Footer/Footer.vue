<template>
<div class="footer">
  <Zaocan/>
  <span>|</span>
  <Yexiao/>
  <span>|</span>
  <Xiawucha/>
  <span>|</span>
  <Wucan/>
  <span>|</span>
  <Wancan/>
  <router-view/>
</div>

</template>
<script>
  //引入组件
  import vue from 'vue';
  import VueRouter from 'vue-router'
  import Zaocan from './Zaocan/Zaocan.vue'
  import Yexiao from './Yexiao/Yexiao.vue'
  import Xiawucha from './Xiawucha/Xiawucha.vue'
  import Wucan from './Wucan/Wucan.vue'
  import Wancan from './Wancan/Wancan.vue'

  //注册成组件标签
  export default{
    data(){
        return{

        }

    },
    components:{
      Zaocan ,
      Yexiao,
      Xiawucha,
      Wucan,
      Wancan,
  }

  }

</script>
<style scoped="less">
.footer{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 42.19px;
  background-color: red;
  color: white;;
}

</style>
