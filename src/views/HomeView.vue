<script setup lang="ts">
import FiltersPanel from '@/components/FiltersPanel.vue';
import MainFiltredHotels from '@/components/MainFiltredHotels.vue';
import MainHeader from '@/components/MainHeader.vue';
import { ref, watch } from 'vue';
import { useHotelStore } from '@/stores/hotel';
</script>

<template>
  <MainHeader class="main-header"></MainHeader>
  <main class="main-page">
    <FiltersPanel class="main-page__filter-panel"></FiltersPanel>
    <MainFiltredHotels class="main-page__hotels"></MainFiltredHotels>
  </main>
</template>

<style scoped>
.main-header{
  margin-bottom: 30px;
}
.main-page {
  display: flex;
  justify-content: center;
  column-gap: 50px;
}
.main-page__filter-panel{
  flex-shrink: 0;
}
.main-page__hotels{
  flex-shrink: 0;
  flex-basis: 835px;
}
</style>

<style>
body {
  overflow-y: scroll;
}
</style>
