import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueDraggableResizable from 'vue-draggable-resizable'

// 可选择导入默认样式
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
