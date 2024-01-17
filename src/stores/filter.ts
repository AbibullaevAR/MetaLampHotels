import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { AbstractFilter } from "@/components/Filters/types";

export const useFilterStore = defineStore('filter', () => {
  const filters = ref([]) as Ref<AbstractFilter[]>
  
  return { filters }
})
