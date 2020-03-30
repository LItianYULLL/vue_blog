import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui';
import vueQuillEditor from 'vue-quill-editor';

//需要导入quill的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//element-ui css
import 'element-ui/lib/theme-chalk/index.css'
//element中的一些动画效果
import 'element-ui/lib/theme-chalk/base.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueQuillEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
