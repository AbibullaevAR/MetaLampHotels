import type { IHotel, IHotelGuests } from "@/models/hotel/types";
import { AbstractFilter } from "../types";
import _ from 'lodash'

class GuestsFilter extends AbstractFilter {

    guests: IHotelGuests[] = []

    constructor(guests: IHotelGuests[]){
        super()
        this.setGuests(guests)
    }

    setGuests(guests: IHotelGuests[]){
        this.guests = guests.filter((guest) => guest.count)
    }

    getFilteredHotel(hotels: IHotel[]): IHotel[] {
        return hotels.filter((hotel) => {

            const isNoOneGuestsFilterChose = !this.guests.length
            if (isNoOneGuestsFilterChose) return true

            const t = _.differenceWith(this.guests, hotel.guests, (filterGuest, hotelGuest) => {

                const isHotelGuestFitsFilterGuest = (filterGuest.id === hotelGuest.id) && (filterGuest.count <= hotelGuest.count)

                if (isHotelGuestFitsFilterGuest) return true

                return false
            })

            return !t.length
        })
    }
}

export default GuestsFilter;