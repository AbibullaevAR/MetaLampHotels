<script setup lang="ts">
import IconStarHollow from '@/components/icons/IconStarHollow.vue'

const { readonly } = defineProps({
    readonly: {
        type: Boolean
    },
    value: {
        type: Number
    }
})

const cursorType = readonly? 'default': 'pointer'

</script>

<template>
    <rate class="viaSlot" :length="5" :value="value" :readonly="readonly">
        <IconStarHollow class="icon"></IconStarHollow>
    </rate>
</template>

<style>
.Rate.viaSlot .icon {
    margin: 0 3px;
}

.Rate.viaSlot .Rate__star.filled {
    background: url('@/assets/star_filled.svg') center no-repeat;
}

.Rate.viaSlot .Rate__star.hover {
    background: url('@/assets/star_filled.svg') center no-repeat;
}

.Rate__star {
    padding: 0;
    cursor: v-bind(cursorType);
}
</style>
