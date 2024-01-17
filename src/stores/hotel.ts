import { initStoreFunc } from "@/models/hotel";
import { defineStore } from 'pinia'


export const useHotelStore = defineStore('hotel', initStoreFunc)
