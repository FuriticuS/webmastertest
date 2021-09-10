<template>
  <div class="description">
    <div class="description-group">
      <div class="description-organizer">
        <div class="description-organizer-img">
          <img src="@/assets/img/events/event/1.png" alt="event">
        </div>
        <div class="description-organizer-text">
          <span>Организатор</span>
          <p class="description-organizer-name">MediaGroup</p>
        </div>
      </div>
      <div class="description-organizer-img">
        <img src="@/assets/img/description/des1.png" alt="desc">
      </div>
      <div class="description-organizer-text">
        <h1>Об исполнителе Gorillaz</h1>
        <p class="description-organizer-text-section">Gorillaz (МФА: [ɡəˈrɪləz]) — британская виртуальная группа, созданная в 1998 году Деймоном Албарном и Джейми Хьюлеттом. Проект включает в себя обширную вымышленную вселенную, окружающую саму «виртуальную группу», состоящую из четырёх анимационных участников: 2-D (лидер-вокалист, клавишные), Мёрдока Никкалса (бас-гитара, драм-машина), Нудл (гитара, мелодика, вокал) и Рассела Хоббса[en] (ударные, перкуссия).</p>
      </div>
    </div>
    <Order />
  </div>
</template>

<script>
import Order from '@/components/order/TheOrder'

export default {
  name: 'Description',
  components: { Order }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.description {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 33px 32px;
  .description-group{
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }
  .description-organizer{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 142px;
    height: 48px;
    padding: 8px;
    margin-bottom: 32px;
    background: $link-active-bg;
    border-radius: 8px;
    .description-organizer-img{
      display: flex;
      width: 32px;
      height: 32px;
      margin-right: 11px;
      margin-bottom: 0;
      border-radius: 8px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .description-organizer-text {
      display: flex;
      flex-direction: column;
      span{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $main-black;
        opacity: 0.33;
      }
      .description-organizer-name{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $main-blue;
      }
    }
    &:hover .description-organizer-name{
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .description-organizer-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    border-radius: 32px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .description-organizer-text{
    display: flex;
    flex-direction: column;
    h1{
      margin-bottom: 8px;
      font-family: "Raleway Bold", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color:$main-black;
    }
    .description-organizer-text-section{
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color:$main-black;
    }
  }
}
</style>
