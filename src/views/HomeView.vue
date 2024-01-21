<script setup lang="ts">
import FiltersPanel from '@/components/FiltersPanel.vue';
import MainFiltredHotels from '@/components/MainFiltredHotels.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

</script>

<template>
  <MainHeader class="main-header"></MainHeader>
  <main class="main-page">
    <FiltersPanel class="main-page__filter-panel"></FiltersPanel>
    <MainFiltredHotels class="main-page__hotels"></MainFiltredHotels>
  </main>
  <MainFooter class="main-footer"></MainFooter>
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
.main-footer {
  margin-top: 50px;
}
</style>

<style>
body {
  overflow-y: scroll;
}
</style>
