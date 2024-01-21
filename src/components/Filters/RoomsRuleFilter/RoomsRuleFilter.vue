<script setup lang="ts">
import { ref, watch } from "vue";
import CheckboxGroup from '@/components/ui/CheckboxGroup.vue';
import RoomsRuleFilter from "./RoomsRuleFilter";

const roomsRule = ref([
    {
        id: 'smokeAllowed',
        name: 'Можно курить',
        isChecked: false
    },
    {
        id: 'petsAllowed',
        name: 'Можно с питомцами',
        isChecked: false
    },
    {
        id: 'guestsAllowed',
        name: 'Можно пригласить гостей (до 10 человек)',
        isChecked: false
    }
])

const roomsRuleFilter = ref(new RoomsRuleFilter())

watch(roomsRule, () => {
    const filtredIsCheckedTrueRommsRule = roomsRule.value.filter((rule) => rule.isChecked)

    roomsRuleFilter.value.rules = filtredIsCheckedTrueRommsRule.map((rule) => {
        const { isChecked, ...ruleWithOutIsCheckedField } = rule
        return ruleWithOutIsCheckedField
    })
})
</script>

<template>
    <CheckboxGroup v-model:checkbox-items="roomsRule" :header="'правила дома'"></CheckboxGroup>
</template>