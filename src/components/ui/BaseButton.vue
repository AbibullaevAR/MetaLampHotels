<script setup lang="ts">
import type { PropType } from "vue"


type TButtonType = 'fill' | 'drain'

const props = defineProps({
    buttonText: {
        type: String,
        required: true
    },
    buttonType: {
        type: String as PropType<TButtonType>,
        required: true
    }
})

const emit = defineEmits<{
    (e: 'click'): void
}>()

</script>
<template>
    <input class="button" :class="buttonType === 'fill' ? 'button_fill' : 'button_drain'" type="button" :value="buttonText"
        @click="emit('click')">
</template>

<style scoped>
.button {
    border-radius: 22px;
    cursor: pointer;
    padding: 14px;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
}

.button:hover {
    opacity: 50%;
}

.button_fill {
    color: var(--vt-c-white);
    background: var(--vt-c-primary-gradient);
    border: none;
}

.button_drain {
    color: var(--vt-c-purple);
    background: linear-gradient(white, white) padding-box, var(--vt-c-primary-gradient);
    border: 2px solid transparent;
}
</style>