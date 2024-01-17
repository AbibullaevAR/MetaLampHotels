<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { ref } from 'vue';
import type { PropType, Ref } from 'vue';
import BaseDropdown from './ui/BaseDropdown.vue';
import type { TMenuItem } from './ui/BaseDropdown.vue';

type TGuestItem = TMenuItem

const { guestItems: initGuestItems } = defineProps({
    guestItems: {
        type: Object as PropType<TGuestItem[]>,
        require: true
    },
    lable: {
        type: String
    }
})

const emit = defineEmits<{
    (e: 'update:guestItems', value: TGuestItem[]): void
}>()

const guestItems = ref(cloneDeep(initGuestItems)) as Ref<TGuestItem[]>

function getStringWithGuestCount(menuItems: TMenuItem[]){
    const guestCount = menuItems.reduce((acc, item)=>item.count+acc, 0);

    return guestCount? `${guestCount} гостей`: `Сколько гостей`
}

</script>

<template>
    <div>
        <BaseDropdown v-model:menu-items="guestItems" :is-draw-control-buttons="true" v-slot="slotProps" :label="lable"
            @apply="emit('update:guestItems', cloneDeep(guestItems))">
            {{ getStringWithGuestCount(slotProps.menuItems) }}
        </BaseDropdown>
    </div>
</template>