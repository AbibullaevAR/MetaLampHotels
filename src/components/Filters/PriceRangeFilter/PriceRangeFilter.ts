import type { IHotel } from "@/models/hotel/types";
import { AbstractFilter } from "../types";


class PriceRangeFilter extends AbstractFilter {

    priceRange = [] as number[];

    constructor(priceRange: number[]) {
        super()
        this.priceRange = priceRange
    }

    getFilteredHotel(hotels: IHotel[]): IHotel[] {
        return hotels.filter((hotel) =>{
            const isHotelInPriceRange = (hotel.price >= this.priceRange[0]) && (hotel.price <= this.priceRange[1]);

            return isHotelInPriceRange;
        })
    }
}

export default PriceRangeFilter;