import { initStoreFunc } from "@/models/reservation";
import { defineStore } from 'pinia'


export const useResevationStore = defineStore('reservation', initStoreFunc)