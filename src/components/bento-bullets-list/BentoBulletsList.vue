<template>
    <section class="nova-component bc bc--bullets-list">
        <h2 class="bc__title bc--bullets-list__title" v-if="title">
            {{ title }}
        </h2>
        <ul>
            <li v-for="item in items" :key="item.id" class="bc--bullets-list__item">
                <span class="bc--bullets-list__item-title">{{item.title}}</span>
                <div class="bc--bullets-list__item-summary" v-if="showSummary">
                    {{ item.summary }}
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: 'BentoBulletsList',
  props: {
    title: String,
    items: Array,
    showSummary: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    .bc--bullets-list {
        text-align: left;
        margin: 0;
        padding: 0;

        &__item {
            display: block;
            margin: 0;
            padding: 0;
            list-style: disc;
        }

        &__item-summary {
            margin: 1em 0 0 0;
        }

        &__item-title {

        }
    }
</style>
