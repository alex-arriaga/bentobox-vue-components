<template>
    <div id="app">
        <HelloWorld msg="Component Demo"/>
        <BentoBulletsList :title="jsonDataBulletsList.settings.title"
                          :items="jsonDataBulletsList.data.items"
                          :show-summary="jsonDataBulletsList.settings.showSummary" />
    </div>
</template>

<script>
// Importing Nova components
import HelloWorld from './components/hello-world/HelloWorld.vue';
import BentoBulletsList from './components/bento-bullets-list/BentoBulletsList.vue';

// Importing JSON data
const jsonDataBulletsList = require('./components/bento-bullets-list/sample-data.json');

export default {
  name: 'app',
  components: {
    HelloWorld,
    BentoBulletsList,
  },
  data() {
    return {
      jsonDataBulletsList,
    };
  },
};
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
