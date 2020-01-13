import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Score from './components/Score'
import InstructionsPart1 from './components/InstructionsPart1';
import InstructionsPart2 from './components/InstructionsPart2';
import GameContainer from './components/GameContainer';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/score', component: Score },
    { path: '/instructions-1', component: InstructionsPart1 },
    { path: '/instructions-2', component: InstructionsPart2 },
    { path: '/game', component: GameContainer },
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
