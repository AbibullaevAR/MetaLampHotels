import type { IHotel } from "@/models/hotel/types";
import { useFilterStore } from "@/stores/filter";

export abstract class AbstractFilter {

    constructor() {
        const filterStore = useFilterStore();
        filterStore.filters.push(this)
    }

    abstract getFilteredHotel(hotels: IHotel[]): IHotel[];
}