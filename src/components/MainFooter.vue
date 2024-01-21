<script setup lang="ts">
import BaseInput from './ui/BaseInput.vue';
</script>

<template>
    <footer>
        <div class="footer__up-container">
            <div class="footer__up">
                <div class="footer__up-column">
                    <div class="footer__logo-name">
                        <img class="footer__logo" src="/src/assets/logo.svg" alt="">
                        <img class="footer__name" src="/src/assets/TOXIN.svg" alt="">
                    </div>
                    <p class="footer__text">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
                </div>
                <div class="footer__up-column">
                    <h3>навигация</h3>
                    <p>О нас</p>
                    <p>Новости</p>
                    <p>Служба поддержки</p>
                    <p>Услуги</p>
                </div>
                <div class="footer__up-column">
                    <h3>о нас</h3>
                    <p>О сервисе</p>
                    <p>Наша команда</p>
                    <p>Вакансии</p>
                    <p>Инвесторы</p>
                </div>
                <div class="footer__up-column">
                    <h3>Служба поддержки</h3>
                    <p>Соглашения</p>
                    <p>Сообщества</p>
                    <p>Связь с нами</p>
                </div>
                <div class="footer__up-column">
                    <h3>Подписка</h3>
                    <p class="footer__text">Получайте специальные предложения и новости сервиса</p>
                    <div class="footer__email">
                        <base-input :header="''" :is-readonly="false" :placeholder="'Email'"></base-input>
                        <img class="footer__email-arrow" src="/src/assets/arrow_email.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__below-container">
            <div class="footer__below">
                <div class="footer__below-name">
                    <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
                </div>
                <div class="footer__below-icons">
                    <img src="/src/assets/twitter_logo.svg" alt="">
                    <img src="/src/assets/facebook_logo.svg" alt="">
                    <img src="/src/assets/instagram_logo.svg" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #1F2041BF;

    border-top: 1px solid var(--vt-c-dark-shade-25);
}

.footer__below-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-height: 70px;

    border-top: 1px solid #E5E5E5;
}
.footer__below {
    display: flex;
    flex: 0 1 1160px;
    justify-content: space-between;
    align-items: center;
}
.footer__below-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 1 112px;
}

.footer__up-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-height: 372px;
}
.footer__up {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    flex: 0 1 1160px;
}
.footer__up-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 20px;
}
.footer__up-column:first-child , .footer__up-column:last-child {
    flex: 0 0 260px;
}

.footer__logo-name {
    display: flex;
    align-items: center;
}
.footer__logo {
    width: 40px;
    height: 40px;
}
.footer__name {
    padding-left: 10px;
    height: 13px;
}

.footer__text {
    line-height: 24px;
}
.footer__email {
    position: relative;
    min-height: 44px;
    width: 100%;
}
.footer__email-arrow {
    position: absolute;
    left: calc(100% - 31px);
    top: calc(50% - 7px);
}

</style>