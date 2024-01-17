<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { storeToRefs } from 'pinia';
import HotelCard from './HotelCard.vue';

const hotelStore = useHotelStore()
const { filtredHotels } = storeToRefs(hotelStore)

</script>

<template>
    <div class="main-filtred-hotels">
        <H1>Номера, которые мы для вас подобрали</H1>
        <div class="main-filtred-hotels__wrapper">
            <HotelCard v-for="hotel of filtredHotels" :key="hotel.id" :hotel="hotel">
                <img :src="hotel.image" alt="">
            </HotelCard>
        </div>
    </div>
</template>

<style scoped>
.main-filtred-hotels__wrapper{
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    margin-top: 20px;
}
</style>