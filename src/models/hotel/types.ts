
export interface IHotelRule {
    id: string,
    name: string
}

export interface IHotelGuests {
    id: string,
    name: string,
    count: number
}

export interface IHotelRooms {
    id: string,
    name: string,
    count: number
}

export interface IHotel {
    id: number,
    rate: number,
    reviewsCount: number,
    price: number,
    rooms: IHotelRooms[],
    guests: IHotelGuests[],
    rules: IHotelRule[],
    image: string
}