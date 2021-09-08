<template>
  <div class="navigation">
    <div id="nav">
      <button class="btn-active">
        <img src="@/assets/img/nav/burger.svg" alt="burger">
      </button>
      <div class="nav-title">
        <img src="@/assets/img/nav/bibi.svg" alt="Бибилька">
        <h2>Бибилька</h2>
      </div>
      <div class="nav-links">
          <router-link to="/" class="link-active"><img src="@/assets/img/nav/tickets.svg" alt=""><span>Билеты</span></router-link>
          <router-link to="/news"><img src="@/assets/img/nav/news.svg" alt=""><span>Новости</span></router-link>
          <router-link to="/video"><img src="@/assets/img/nav/video.svg" alt=""><span>Видео</span></router-link>
          <router-link to="/auth"><img src="@/assets/img/nav/exit.svg" alt=""><span>Выход</span></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    label: String,
    icon: String
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.navigation{
  display: flex;
  flex-direction: column;
  min-width: 88px;
  background: $main-bg;
  #nav {
    display: flex;
    flex-direction: column;
    padding-top: 33px;
    button {
      padding-left: 43px;
    }
    .nav-title {
      display: flex;
      flex-direction: row;
      padding-left: 33px;
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
        img{
          margin-right: 11px;
        }
        span{
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: $main-black;
        }
      }
      .link-active {
        background: $link-active-bg;
        border-left: 2px solid $main-blue;
        border-radius: 0px 8px 8px 0px;
      }
    }
  }
}
</style>
