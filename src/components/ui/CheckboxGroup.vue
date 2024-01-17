<script setup lang="ts">
import { ref, unref, watchEffect } from 'vue';
import type { PropType } from 'vue';
import { cloneDeep } from 'lodash';

interface ICheckboxItem {
    id: string,
    name: string,
    isChecked: boolean
}

const { header, checkboxItems: initCheckboxItems } = defineProps({
    header: {
        type: String,
        default: 'Checkbox Buttons'
    },
    checkboxItems: {
        type: Object as PropType<ICheckboxItem[]>,
        required: true
    }
})

const emit = defineEmits<{
    (e: 'update:checkboxItems', value: ICheckboxItem[]): void
}>()

const checkboxItems = ref(cloneDeep(initCheckboxItems))

watchEffect(() => {
    emit('update:checkboxItems', cloneDeep(unref(checkboxItems)))
})

</script>

<template>
    <div class="checkbox-group">
        <h3>{{ header }}</h3>
        <div class="checkbox-group__item" v-for="checkboxItem of checkboxItems" :key="checkboxItem.id">
            <input type="checkbox" :id="checkboxItem.id" v-model="checkboxItem.isChecked">
            <label :for="checkboxItem.id">{{ checkboxItem.name }}</label>
        </div>
    </div>
</template>

<style scoped>
input[type="checkbox"] {
    height: 20px;
    width: 20px;
    border: 1px solid var(--vt-c-dark-shade-25);
    border-radius: 4px;

    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    flex-shrink: 0;
}

input:checked {
    content: url('@/assets/checkboxArrow.svg');
    padding: 5px;
    border: 1px solid var(--vt-c-purple);
}

.checkbox-group {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.checkbox-group__item {
    display: flex;
    align-items: center;
    column-gap: 10px;
}
</style>