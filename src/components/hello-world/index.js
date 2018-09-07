// export { default as HelloWorld } from './HelloWorld.vue';

import HelloWorld from './HelloWorld.vue';

// Export for allowing register as global component
export { HelloWorld };

// Export for allowing plugin register
const VuePlugin = {
  install(Vue) {
    Vue.component('hello-world', HelloWorld);
  },
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlugin);
}
export default VuePlugin;
