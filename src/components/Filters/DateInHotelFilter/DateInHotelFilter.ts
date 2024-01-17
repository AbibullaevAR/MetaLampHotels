import type { IHotel } from "@/models/hotel/types";
import { AbstractFilter } from "../types";
import { useResevationStore } from "@/stores/reservation";
import isWithinInterval from "date-fns/isWithinInterval";

class DateInHotelFilter extends AbstractFilter {

    dateRange: Date[] = []
    resevationStore = useResevationStore()

    constructor(dateRange: Date[]){
        super()
        this.dateRange = dateRange
    }

    getFilteredHotel(hotels: IHotel[]): IHotel[] {
        
        if (!this.dateRange.length) return hotels

        const reservationWithinDateRange = this.resevationStore.reservationHotels.filter((reservation) => {
            const isStartReservationDateInDateRange = isWithinInterval(reservation.startDate, {start: this.dateRange[0], end: this.dateRange[1]})
            const isEndReservationDateInDateRange = isWithinInterval(reservation.endDate, {start: this.dateRange[0], end: this.dateRange[1]})

            return isStartReservationDateInDateRange || isEndReservationDateInDateRange
        })

        const reservationHotelsId = reservationWithinDateRange.map((item) => item.hotelId)

        return hotels.filter((hotel) => !reservationHotelsId.includes(hotel.id))
    }
}

export default DateInHotelFilter;