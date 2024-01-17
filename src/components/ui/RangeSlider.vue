<script setup lang="ts">
import Slider from '@vueform/slider';
import { ref, watch, unref } from 'vue';
import type { PropType, Ref } from 'vue';

const { range: initRange, min, max, label } = defineProps({
    range: {
        type: Object as PropType<Number[]>,
        default: new Array([0, 100])
    },
    min: {
        type: Number,
        default: 30
    },
    max: {
        type: Number,
        default: 100
    },
    label: {
        type: String,
        defaul: 'Range Slider'
    }
})

const emit = defineEmits<{
    (e: 'update:range', value: Number[]): void
}>()

const range = ref(initRange) as Ref<Number[]>

watch(range, () => {
    emit('update:range', unref(range))
})

</script>

<template>
    <div class="range-slider">
        <div class="range-slider__upper">
            <h3>{{ label }}</h3>
            <span class="range-slider__input">{{ range[0] }}₽ - {{ range[1] }}₽</span>
        </div>
        <Slider v-model="range" :tooltips="false" :lazy="false" :min="min" :max="max"
        ></Slider>
    </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style>
:root{
    --slider-radius: 3px;
    --slider-bg: var(--vt-c-white);
    --slider-handle-border: 2px solid var(--vt-c-white);
    --slider-connect-bg: var(--vt-c-secondary-gradient);
    --slider-handle-bg: var(--vt-c-secondary-gradient);
    --slider-handle-shadow: none;
}
.slider-base{
    border: 1px solid var(--vt-c-dark-shade-25);
}
</style>

<style scoped>
.range-slider{
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 15px;
}
.range-slider__input{
    color: var(--vt-c-dark-shade-50);
    font-size: 12px;
}
.range-slider__upper{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>