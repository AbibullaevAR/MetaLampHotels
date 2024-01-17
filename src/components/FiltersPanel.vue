<script setup lang="ts">
import { DateInHotelFilter, PriceRangeFilter, RoomsRuleFilter, GuestsFilter, RoomsFilter } from '@/components/Filters';

</script>

<template>
    <div class="filters-panel">
        <DateInHotelFilter></DateInHotelFilter>
        <GuestsFilter></GuestsFilter>
        <PriceRangeFilter></PriceRangeFilter>
        <RoomsRuleFilter></RoomsRuleFilter>
        <RoomsFilter></RoomsFilter>
    </div>
</template>

<style scoped>
.filters-panel {
    display: flex;
    flex-direction: column;
    row-gap: 21px;
}
</style>