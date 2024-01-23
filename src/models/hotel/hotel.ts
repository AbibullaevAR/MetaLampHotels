import { ref, computed, unref } from 'vue'
import type { Ref } from 'vue'
import type { IHotel } from "./types";
import { useFilterStore } from '@/stores/filter'

const initStoreFunc = () => {
  const hotels = ref([
    {
      id: 851,
      rate: 5,
      reviewsCount: 145,
      price: 9900,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 3
        },
        {
          id: 'kids',
          name: 'дети',
          count: 1
        },
        {
          id: 'baby',
          name: 'младенцы',
          count: 1
        }
      ],
      rules: [
        {
          id: 'petsAllowed',
          name: ''
        },
        {
          id: 'guestsAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image1.jpg'
    },
    {
      id: 852,
      rate: 4,
      reviewsCount: 65,
      price: 9900,
      rooms: [],
      guests: [{
        id: 'adults',
        name: 'взрослые',
        count: 3
      },
      {
        id: 'kids',
        name: 'дети',
        count: 2
      }
    ],
      rules: [
        {
          id: 'guestsAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image2.jpg'
    },
    {
      id: 853,
      rate: 3,
      reviewsCount: 35,
      price: 8500,
      rooms: [],
      guests: [
      {
        id: 'adults',
        name: 'взрослые',
        count: 2
      },
      {
        id: 'baby',
        name: 'младенцы',
        count: 1
      }
    ],
      rules: [
        {
          id: 'guestsAllowed',
          name: ''
        },
        {
          id: 'smokeAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image3.jpg'
    },
    {
      id: 854,
      rate: 5,
      reviewsCount: 19,
      price: 7300,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 3
        },
        {
          id: 'kids',
          name: 'дети',
          count: 3
        }
      ],
      rules: [
        {
          id: 'smokeAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image4.jpg'
    },
    {
      id: 855,
      rate: 4,
      reviewsCount: 44,
      price: 6000,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 3
        },
        {
          id: 'kids',
          name: 'дети',
          count: 1
        }
      ],
      rules: [
        {
          id: 'smokeAllowed',
          name: ''
        },
        {
          id: 'petsAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image5.jpg'
    },
    {
      id: 856,
      rate: 3,
      reviewsCount: 56,
      price: 5800,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 1
        }
      ],
      rules: [],
      image: '/MetaLampHotels/assets/hotelsImage/image6.jpg'
    },
    {
      id: 857,
      rate: 5,
      reviewsCount: 45,
      price: 5500,
      rooms: [],
      guests: [],
      rules: [
        {
          id: 'smokeAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image7.jpg'
    },
    {
      id: 858,
      rate: 4,
      reviewsCount: 39,
      price: 5300,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 2
        },
        {
          id: 'baby',
          name: 'младенцы',
          count: 1
        }
      ],
      rules: [],
      image: '/MetaLampHotels/assets/hotelsImage/image8.jpg'
    },
    {
      id: 859,
      rate: 3,
      reviewsCount: 77,
      price: 5000,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 3
        },
        {
          id: 'baby',
          name: 'младенцы',
          count: 1
        }
      ],
      rules: [
        {
          id: 'petsAllowed',
          name: ''
        },
        {
          id: 'smokeAllowed',
          name: ''
        },
        {
          id: 'guestsAllowed',
          name: ''
        }
      ],
      image: '/MetaLampHotels/assets/hotelsImage/image9.jpg'
    },
    {
      id: 860,
      rate: 5,
      reviewsCount: 25,
      price: 5000,
      rooms: [],
      guests: [],
      rules: [],
      image: '/MetaLampHotels/assets/hotelsImage/image10.jpg'
    },
    {
      id: 861,
      rate: 3,
      reviewsCount: 15,
      price: 5000,
      rooms: [],
      guests: [
        {
          id: 'adults',
          name: 'взрослые',
          count: 2
        },
        {
          id: 'kids',
          name: 'дети',
          count: 2
        },
        {
          id: 'baby',
          name: 'младенцы',
          count: 1
        }
      ],
      rules: [],
      image: '/MetaLampHotels/assets/hotelsImage/image11.jpg'
    },
    {
      id: 862,
      rate: 3,
      reviewsCount: 55,
      price: 5000,
      rooms: [],
      guests: [],
      rules: [],
      image: '/MetaLampHotels/assets/hotelsImage/image12.jpg'
    },
  ]) as Ref<IHotel[]>

  const filterStore = useFilterStore()

  const filtredHotels = computed(() => {

    let filterHotels = unref(hotels);
    
    filterStore.filters.forEach((filter) => {
        filterHotels = filter.getFilteredHotel(filterHotels)
    })

    return filterHotels
  })
  
  return { hotels, filtredHotels }
}

export default initStoreFunc;
