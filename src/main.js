import Vue from 'vue'
import App from './App.vue'
import DirectiveSticky from '@/directives/sticky';
import DirectiveColor from '@/directives/color';

Vue.config.productionTip = false
Vue.directive('sticky', DirectiveSticky);
Vue.directive('color', DirectiveColor);

new Vue({
  render: h => h(App),
}).$mount('#app')
