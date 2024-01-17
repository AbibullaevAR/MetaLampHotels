<script setup lang="ts">
import { ref, unref, toRefs, computed } from 'vue';
import type { PropType } from 'vue';
import { cloneDeep } from 'lodash';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import BaseInput from '../ui/BaseInput.vue';

const props = defineProps({
    dateRange: {
        type: Object as PropType<Date[]>,
        default: new Array()
    },
    lable: {
        type: String,
        default: 'filter date dropdown'
    }
})

const emit = defineEmits<{
    (e: 'update:dateRange', value: Date[]): void
}>()

const { dateRange: initDateRange } = toRefs(props)

const inputDateRange = ref(cloneDeep(initDateRange))
const dp = ref()
const stringRangeWithDayAndMonth = computed(() => {

    const isDateRangeNotChoose = !unref(initDateRange)[0] && !unref(initDateRange)[1];

    if (isDateRangeNotChoose) return 'Select date'

    const startDayAndMonth = format(unref(initDateRange)[0], 'd MMM', { locale: ru })
    const endDayAndMonth = format(unref(initDateRange)[1], 'd MMM', { locale: ru })

    return `${startDayAndMonth} - ${endDayAndMonth}`
})

const selectDate = () => {
    unref(dp).selectDate();
    emit('update:dateRange', cloneDeep(unref(inputDateRange)))
}

const clearDate = () => {
    inputDateRange.value = []
    emit('update:dateRange', cloneDeep(unref(inputDateRange)))
}

</script>

<template>
    <Datepicker class="data-picker-menu" v-model="inputDateRange" ref="dp" locale="ru-RU" :enable-time-picker="false" range
        clearable>
        <template #trigger>
            <BaseInput :header="lable" :is-readonly="true" :placeholder="''"
                :value="stringRangeWithDayAndMonth">
            </BaseInput>
        </template>
        <template #action-buttons>
            <p class="data-picker-menu__control-button" @click="clearDate">Очистить</p>
            <p class="data-picker-menu__control-button" @click="selectDate">применить</p>
        </template>
        <template #action-preview="">

        </template>
    </Datepicker>
</template>

<style>
.dp__theme_light {
    --dp-cell-border-radius: 22px;
    --dp-range-between-dates-background-color: rgba(238, 230, 255, 1);
    --dp-range-between-dates-text-color: var(--vt-c-dark-shade-50);
    --dp-range-between-border-color: rgba(238, 230, 255, 1);
    --dp-text-color: var(--vt-c-dark-shade-50);
    --dp-primary-color: var(--vt-c-primary-gradient);
    --dp-hover-color: var(--vt-c-primary-gradient);
    --dp-hover-text-color: var(--vt-c-white);
    --dp-border-color: var(--vt-c-white);
    --dp-secondary-color: var(--vt-c-dark-shade-25);
}

.dp__today {
    background: var(--vt-c-secondary-gradient);
    border: none;
    color: var(--vt-c-white);
}

.dp__calendar_header {
    color: var(--vt-c-purple);
}

.dp__action_buttons {
    flex-grow: 2;
    justify-content: space-between;
}

.data-picker-menu__control-button {
    text-transform: uppercase;
    cursor: pointer;
    color: var(--vt-c-purple);
}

.data-picker-menu__control-button:hover {
    color: var(--vt-c-dark-shade-50);
}
</style>