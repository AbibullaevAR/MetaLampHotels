<script setup lang="ts">
import { ref, unref, watch } from "vue";
import GuestCounter from '@/components/GuestCounter.vue';
import GuestsFilter from "./GuestsFilter";

const guestItems = ref([
    {   
        id: 'adults',
        name: 'взрослые',
        count: 0
    },
    {
        id: 'kids',
        name: 'дети',
        count: 0
    },
    {
        id: 'baby',
        name: 'младенцы',
        count: 0
    },
])

const guestsFilter = ref(new GuestsFilter(unref(guestItems)))

watch(guestItems, () => {
    guestsFilter.value.setGuests(unref(guestItems))
})

</script>

<template>
    <GuestCounter v-model:guest-items="guestItems" :lable="'гости'"></GuestCounter>
</template>