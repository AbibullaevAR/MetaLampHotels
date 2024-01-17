<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    header: {
        type: String,
        default: 'Base Input'
    },
    placeholder: {
        type: String,
        default: 'placeholder'
    },
    isReadonly: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        default: ''
    }
})

const { header, placeholder, isReadonly, value } = toRefs(props);

</script>

<template>
    <div class="base-input">
        <h3>{{ header }}</h3>
        <input type="text" :placeholder="placeholder" :readonly="isReadonly" :value="value">
    </div>
</template>

<style scoped>
input {
    border: 1px solid var(--vt-c-dark-shade-25);
    border-radius: 2px;
    padding: 13px;
    color: var(--vt-c-dark-shade-75);
}

input:focus {
    outline-color: var(--vt-c-dark-shade-50);
    color: var(--vt-c-dark-shade-75);
}

.base-input {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}
.base-input h3 {
    text-transform: uppercase;
}
</style>