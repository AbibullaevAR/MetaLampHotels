import { ref } from "vue"
import type { Ref } from "vue"
import type { IReservation } from "./types"

const initStoreFunc = () => {
    const reservationHotels = ref([
        {
            startDate: new Date('2024-01-17'),
            endDate: new Date('2024-01-24'),
            hotelId: 851
        }
    ]) as Ref<IReservation[]>

    return { reservationHotels }
}

export default initStoreFunc;