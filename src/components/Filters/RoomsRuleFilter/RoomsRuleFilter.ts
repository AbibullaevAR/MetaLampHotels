import type { IHotel, IHotelRule } from "@/models/hotel/types";
import { AbstractFilter } from "../types";
import _ from 'lodash'


class RoomsRuleFilter extends AbstractFilter {

    rules: IHotelRule[] = []

    constructor () {
        super()
    }

    getFilteredHotel(hotels: IHotel[]): IHotel[] {

        if (!this.rules.length) return hotels

        return hotels.filter((hotel) => {
            const t = _.differenceWith(this.rules, hotel.rules, (first, second) => {
                if (first.id === second.id) return true
                return false
            })

            return !t.length
        })
    }
}

export default RoomsRuleFilter;