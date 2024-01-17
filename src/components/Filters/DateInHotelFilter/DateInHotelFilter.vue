<script setup lang="ts">
import RangeDatePicker from '@/components/DatePicker';
import DateInHotelFilter from './DateInHotelFilter';
import { ref, unref, watch } from 'vue';

const dateRange = ref([])
const dateInHotelFilter = ref(new DateInHotelFilter(unref(dateRange)))

watch(dateRange, () => {
    dateInHotelFilter.value.dateRange = unref(dateRange)
})
</script>

<template>
    <RangeDatePicker v-model:date-range="dateRange" :lable="'даты пребывания в отеле'"></RangeDatePicker>
</template>