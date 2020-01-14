import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Score from './components/Score'
import Instructions from './components/Instructions';
import Guide from './components/Guide';
import UserForm from './components/UserForm';
import GameContainer from './components/GameContainer';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/score', component: Score },
    { path: '/instructions', component: Instructions },
    { path: '/guide', component: Guide },
    { path: '/userform', component: UserForm },
    { path: '/game', component: GameContainer },
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
