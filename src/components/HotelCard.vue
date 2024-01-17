<script setup lang="ts">
import StarRateing from './ui/StarRateing.vue';
import type { IHotel } from '@/models/hotel/types';
import type { PropType } from 'vue';

defineProps({
    hotel: {
        type: Object as PropType<IHotel>,
        required: true
    }
})

</script>

<template>
    <div class="hotel-card">
        <slot></slot>
        <div class="hotel-card__lower">
            <div class="hotel-card__number-price">
                <h1 class="hotel-card__number">№ {{ hotel.id }}</h1>
                <span class="hotel-card__price">{{ hotel?.price }}₽ в сутки</span>
            </div>
            <div class="hotel-card__rate-reviews">
                <StarRateing class="hotel-card__rate" :readonly="true" :value="hotel.rate"></StarRateing>
                <span class="hotel-card__reviews">{{ hotel?.reviewsCount }} Отзывов</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hotel-card {
    border-radius: 15px;
    border: 1px solid var(--vt-c-white);
    box-shadow: 0px 10px 20px 0px var(--vt-c-dark-shade-05);
}

.hotel-card__number-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(31, 32, 65, 0.1);
}

.hotel-card__rate-reviews {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
}

.hotel-card__lower {
    padding: 18px;
}

.hotel-card__rate {
    flex-basis: 120px;
}</style>