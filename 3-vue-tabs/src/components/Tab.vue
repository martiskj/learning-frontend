<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tab extends Vue {

    @Prop({required: true}) name: string
    @Prop({default: false}) selected: boolean;

    isActive: boolean = false;

    get href() {
        return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }

    mounted() {
        this.isActive = this.selected;
    }

}
</script>