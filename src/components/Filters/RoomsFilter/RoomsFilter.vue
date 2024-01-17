<script setup lang="ts">
import RoomsCounter from '@/components/RoomsCounter.vue';
import { ref } from 'vue';

const rooms = ref([
    {
        name: 'спальни',
        count: 0
    },
    {
        name: 'кровати',
        count: 0
    },
    {
        name: 'ванные комнаты',
        count: 0
    }
])
</script>


<template>
    <RoomsCounter v-model:rooms-items="rooms" :lable="'удобства номера'"></RoomsCounter>
</template>