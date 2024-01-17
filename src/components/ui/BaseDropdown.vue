<script setup lang="ts">
import { computed, ref, unref } from "vue";
import { cloneDeep } from 'lodash';
import type { PropType, Ref } from 'vue';

export type TMenuItem = {
    name: String,
    count: Number
}

const { menuItems: initMenuItems, isDrawControlButtons } = defineProps({
    menuItems: {
        type: Object as PropType<TMenuItem[]>,
        require: true
    },
    isDrawControlButtons: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        default: 'dropdown'
    }
})
const emit = defineEmits<{
    (e: 'update:menuItems', value: TMenuItem[]): void,
    (e: 'apply'): void
}>()

const menuItems = ref(cloneDeep(initMenuItems)) as Ref<TMenuItem[]>
const isMenuOpen = ref(false)
const isClearButtonDisabled = computed(()=>{
    return !unref(menuItems).reduce((acc, menuItem)=>menuItem.count+acc, 0)
})

function add(menuItem: TMenuItem){
    menuItem.count += 1;

    emit('update:menuItems', cloneDeep(unref(menuItems)))
}

function minus(menuItem: TMenuItem){
    menuItem.count = menuItem.count? menuItem.count-1: 0;

    emit('update:menuItems', cloneDeep(unref(menuItems)))
}

function clear(){
    unref(menuItems).forEach((item)=>{
        item.count = 0;
    })

    emit('update:menuItems', cloneDeep(unref(menuItems)))
}

function apply(){
    isMenuOpen.value = false
    emit('apply')
}
</script>

<template>
    <div class="dropdown">
        <span class="dropdown__name"><h3>{{ label }}</h3></span>
        <div class="dropdown__selected-item-wrapper">
            <div class="dropdown__selected-item" @click="isMenuOpen = !isMenuOpen">
                <span class="dropdown__selected-item-name">
                    <slot :menuItems="menuItems"></slot>
                </span>
                <img src="/src/assets/arrow.svg" alt="">
            </div>
        </div>
        <div class="dropdown__menu-wrapper" :class="{ 'dropdown__menu-wrapper_visibility_visible': isMenuOpen }">
            <div class="dropdown__menu">
                <div class="dropdown__menu-items">
                    <div class="dropdown__menu-item" v-for="menuItem of menuItems" :key="menuItem">
                        <span class="dropdown__menu-item-name"><h3>{{ menuItem.name }}</h3></span>
                        <div class="dropdown__menu-item-control">
                            <span class="dropdown__minus dropdown__plus-and-minus"
                                :class="{ 'dropdown__minus-disabled': !menuItem.count }" @click="minus(menuItem)">-</span>
                            <span class="dropdown__menu-item-count">{{ menuItem.count }}</span>
                            <span class="dropdown__plus dropdown__plus-and-minus" @click="add(menuItem)">+</span>
                        </div>
                    </div>
                </div>
                <div v-if="isDrawControlButtons" class="dropdown__menu-footer">
                    <span class="dropdown__clear" :class="{'dropdown__clear_visibility_hidden': isClearButtonDisabled}" @click="clear">очистить</span>
                    <span class="dropdown__apply" @click="apply">применить</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #1F2041;

    max-width: 345px;
    position: relative;
}

.dropdown__selected-item-name{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.dropdown__selected-item-wrapper {
    display: flex;
    justify-content: center;

    padding: 12px 15px;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: none;
    border: 1px solid rgba(31, 32, 65, 0.5);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #1F2041BF;
}

.dropdown__selected-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 0 1 320px;

    cursor: pointer;
    overflow: hidden;
}

.dropdown__menu-wrapper {
    display: flex;
    justify-content: center;

    transition: opacity 0.4s, visibility 0.4s;

    opacity: 0;
    visibility: hidden;

    z-index: 10;
    position: absolute;
    top: 100%;
    width: 100%;

    border: 1px solid rgba(31, 32, 65, 0.5);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
    background: var(--vt-c-white);
    padding-left: 7px;
    padding-right: 7px;
}

.dropdown__menu {
    display: flex;
    flex-direction: column;

    flex: 0 1 320px;
}

.dropdown__menu-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 47px;
    color: #BC9CFF;
}

.dropdown__menu-items {
    display: flex;
    flex-direction: column;

    flex-grow: 0;

}

.dropdown__menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 44px;
}

.dropdown__minus {
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 22px;
}

.dropdown__plus {
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 22px;
}

.dropdown__menu-item-control {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 0 0 92px;
}

.dropdown__plus-and-minus {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    flex: 0 0 30px;

    cursor: pointer;
}

.dropdown__menu-wrapper_visibility_visible {
    opacity: 1;
    visibility: visible;
}

.dropdown__clear,
.dropdown__apply {
    cursor: pointer;
}

.dropdown__clear_visibility_hidden {
    visibility: hidden;
}

.dropdown__minus-disabled {
    opacity: 0.25;
    cursor: default;
}
</style>