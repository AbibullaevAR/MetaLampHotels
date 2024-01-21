<script setup lang="ts">
import RangeSlider from '@/components/ui/RangeSlider.vue';
import { ref, unref, watch } from 'vue';
import { debounce } from 'lodash';
import PriceRangeFilter from './PriceRangeFilter';

const MAX_PRICE_FOR_HOTEL = 10000;
const MIN_PRICE_FOR_HOTEL = 4000;
const priceRange = ref([5000, 9000]);
const priceRangeFilter = ref(new PriceRangeFilter(unref(priceRange)));


watch(priceRange, debounce(() => {
    priceRangeFilter.value.priceRange = unref(priceRange)
}, 700))
</script>

<template>
    <RangeSlider v-model:range="priceRange" :min="MIN_PRICE_FOR_HOTEL"
        :max="MAX_PRICE_FOR_HOTEL" :label="'диапазон цены'"></RangeSlider>
</template>