<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { ref, watch, unref } from 'vue';
import type { PropType, Ref } from 'vue';
import BaseDropdown from './ui/BaseDropdown.vue';
import type { TMenuItem } from './ui/BaseDropdown.vue';

type TRoomsItem = TMenuItem

const { roomsItems: initRoomsItems } = defineProps({
    roomsItems: {
        type: Object as PropType<TRoomsItem[]>,
        require: true
    },
    lable: {
        type: String
    }
})

const emit = defineEmits<{
    (e: 'update:roomsItems', value: TRoomsItem[]): void
}>()

const roomsItems = ref(cloneDeep(initRoomsItems)) as Ref<TRoomsItem[]>

watch(roomsItems, ()=>{
    emit('update:roomsItems', cloneDeep(unref(roomsItems)))
})

function getStringWithRoomsNameAndCount(roomsItems: TRoomsItem[]){
    return roomsItems.filter((item)=>item.count).map((item)=>`${item.count} ${item.name}`).join(', ')
}

</script>

<template>
    <BaseDropdown v-model:menu-items="roomsItems" :is-draw-control-buttons="false" v-slot="slotProps" :label="lable">
        {{ getStringWithRoomsNameAndCount(slotProps.menuItems) }}
    </BaseDropdown>
</template>