//引入路径
import vue from 'vue'
import VueRouter from 'vue-router'
import Zaocan from '../components/Footer/Zaocan/Zaocan.vue'
import Yexiao from '../components/Footer/Yexiao/Yexiao.vue'
import Xiawucha from '../components/Footer/Xiawucha/Xiawucha.vue'
import Wucan from '../components/Footer/Wucan/Wucan.vue'
import Wancan from '../components/Footer/Wancan/Wancan.vue'
//声明使用vuerouter
vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
    path: './Zaocan',
    components:Zaocan,
  },
    {
      path: './Yexiao',
      components:Yexiao,
    },
    {
      path: './Xiawucha',
      components:Xiawucha,
    },
    {
      path: './Wucan',
      components:Wucan,
    },
    {
      path: './Wancan',
      components:Wancan,
    },

  ]

})
