<template>
  <div class="order">
    <h1>Оставить предзаказ</h1>
    <div class="order-table">
      <table>
        <tr class="order-table-title">
          <th>Трибуна</th>
          <th>Доступно мест</th>
          <th>Количество</th>
        </tr>
        <tr class="order-table-str"><td>12</td><td>485</td><td><div class="order-table-str-quant">0</div></td><td>
          <button class="btn-pre-order">Предзаказ</button></td></tr>
        <tr class="order-table-str"><td>12</td><td>485</td><td><div class="order-table-str-quant">0</div></td><td>
          <button class="btn-pre-order">Предзаказ</button></td></tr>
        <tr class="order-table-str"><td>12</td><td>485</td><td><div class="order-table-str-quant">0</div></td><td>
          <button class="btn-pre-order">Предзаказ</button></td></tr>
        <tr class="order-table-str"><td>12</td><td>485</td><td><div class="order-table-str-quant">0</div></td><td>
          <button class="btn-pre-order">Предзаказ</button></td></tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order'
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.order{
  display: flex;
  flex-direction: column;
  width: 100%;
  h1{
    margin-bottom: 16px;
    font-family: "Raleway Bold", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color:$main-black;
  }
  .order-table{
    display: flex;
    table{
      width: 100%;
      .order-table-title{
        th{
          text-align: left;
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: $main-black;
          opacity: 0.5;
          padding-bottom: 24px;
        }
      }
      .order-table-str{
        td{
          font-family: "Raleway Bold", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: $main-black;
          padding-bottom: 16px;
        }
      }
    }
    .order-table-str-quant{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 48px;
      height: 40px;
      background: $link-active-bg;
      border-radius: 8px;
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: rgba(0, 0, 0, .3);;
    }
  }
}
</style>
