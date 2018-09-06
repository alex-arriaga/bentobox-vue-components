import HelloWorld from './components/HelloWorld.vue';

const NovaVue = {
  install(Vue) {
    Vue.component('hello-world', HelloWorld);
  },
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NovaVue);
}
export default NovaVue;
