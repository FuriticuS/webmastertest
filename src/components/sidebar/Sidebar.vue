<template>
  <div class="nav-title">
    <BaseIcon name="bibi" class="nav-title-icon"/>
    <h2>Бибилька</h2>
  </div>
  <div class="nav-links">
    <router-link to="/" class="link-active">
      <BaseIcon name="tickets" class="nav-icon"/>
      <span>Билеты</span>
    </router-link>
    <router-link to="/news">
      <BaseIcon name="news" class="nav-icon"/>
      <span>Новости</span>
    </router-link>
    <router-link to="/video">
      <BaseIcon name="video" class="nav-icon"/>
      <span>Видео</span>
    </router-link>
    <router-link to="/auth">
      <BaseIcon name="exit" class="nav-icon"/>
      <span>Выход</span>
    </router-link>
  </div>
</template>

<script>
import BaseIcon from '@/components/baseicon/BaseIcon'

export default {
  name: 'Sidebar',
  components: { BaseIcon }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.nav-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 35px;
  margin: 25px 0;
  h2{
    font-family: "Raleway Bold", sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
  }
  img{
    margin-right: 8px;
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  width: 172px;
  margin-right: 8px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 32px;
    padding-left: 33px;
    margin-bottom: 20px;
    border-left: 2px solid $main-bg;
    img{
      margin-right: 11px;
    }
    span{
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $main-black;
    }
    &:hover{
      border-left: 2px solid $main-blue;
      transition: all .3s ease;
    }
  }
  .link-active {
    background: $link-active-bg;
    border-left: 2px solid $main-blue;
    border-radius: 0px 8px 8px 0px;
  }
}
</style>
