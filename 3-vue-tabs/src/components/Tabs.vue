<template>

    <div>

        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>

    </div>


</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import Tab from './Tab.vue';

@Component
export default class Tabs extends Vue {

    tabs: Tab[] = [];

    created() {
        this.tabs = this.$children as Tab[];
    }

    selectTab(selectedTab: Tab) {
        this.tabs.forEach(tab => {
            tab.isActive = (tab.name == selectedTab.name);
        })
    }

}

</script>