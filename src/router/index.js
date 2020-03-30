import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //给路由命名
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   // 登录的路由
   {
    path:'/signIn',
    name:'signIn',
    component:() => import('../views/SignIn.vue')

  },
  {
    name:'Argu',
    path:'/argu/:name',
    component:() => import('../views/Argu.vue')
  },
  // 嵌套路由的方式
  {
    path:'/parent',
    component:() => import('../views/Parent.vue'),
    children:[
      {
        path:'child',
        component:() => import('../views/Child.vue')
      }
     
    ]
  },
  // 命名路由，加载多个组件
  {
    path:'/named_view',
    components:{
      //加载多个组件
      default:() => import('../views/Child.vue'),
      email:() => import('../views/Email.vue'),
      tel:() => import('../views/Tel.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router