<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';
</script>

<template>
    <header>
        <div class="header__wrapper">
            <div class="header__left-side">
                <div class="header__logo-name">
                    <img class="header__logo" src="/src/assets/logo.svg" alt="">
                    <img class="header__name" src="/src/assets/TOXIN.svg" alt="">
                </div>
            </div>
            <div class="header__center">
                <nav class="header__nav">
                    <div class="header__nav-item">
                        <p>О нас</p>
                    </div>
                    <div class="header__nav-item">
                        <p>Услуги</p>
                        <div class="header__arrow">
                        </div>
                    </div>
                    <div class="header__nav-item">
                        <p>Вакансии</p>
                    </div>
                    <div class="header__nav-item">
                        <p>Новости</p>
                    </div>
                    <div class="header__nav-item">
                        <p>Соглашения</p>
                        <div class="header__arrow">
                        </div>
                    </div>
                </nav>
            </div>
            <div class="header__right-side">
                <div class="header__access">
                    <BaseButton class="header__sign-in" :button-type="'drain'" :button-text="'войти'"></BaseButton>
                    <BaseButton class="header__sign-up" :button-type="'fill'" :button-text="'зарегистрироваться'"></BaseButton>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 20px 0px var(--vt-c-dark-shade-05);
}
.header__wrapper{
    display: flex;
    min-height: 70px;
    flex-basis: 1200px;
}
.header__left-side {
    display: flex;
    flex: 0 1 247px;
    justify-content: flex-start;
    align-items: center;
}
.header__logo-name {
    display: flex;
    flex: 0 1 107px;
    justify-content: space-between;
}
.header__logo {
    height: 40px;
    width: 40px;
}
.header__right-side {
    display: flex;
    flex: 0 1 443px;
    justify-content: flex-end;
}
.header__access {
    display: flex;
    flex: 0 1 303px;
    justify-content: space-between;
    align-items: center;
}
.header__sign-in {
    width: 87px;
    height: 34px;
}
.header__sign-up {
    width: 196px;
    height: 34px;
}
.header__center {
    display: flex;
    flex: 0 2 752px;
    margin-right: 20px;
    justify-content: flex-end;
}
.header__nav {
    display: flex;
    flex: 0 1 404px;
    justify-content: space-between;
    align-items: center;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--vt-c-dark-shade-50);
}
.header__nav-item:first-child {
    font-weight: 700;
}
.header__arrow {
    width: 0.3em;
    height: 0.3em;
    border-top: 2px solid var(--vt-c-dark-shade-50);
    border-right: 2px solid var(--vt-c-dark-shade-50);
    transform: rotate(135deg);
    line-height: 20px;

    margin-left: 3px;
    margin-bottom: 2px;
}
.header__nav-item {
    display: flex;
    align-items: center;
}
</style>