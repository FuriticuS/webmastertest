<template>
  <div :class="classes">
    <div class="event-date">
      <div class="event-date-time">
        <div class="event-day">
          <span>{{ day }}</span>
        </div>
        <div class="event-numb">
          <span>{{ numb }}</span>
        </div>
      </div>
      <div class="event-img">
        <img :src="`${{ src }}`" alt="event">
      </div>
    </div>
    <div class="event-name">
      <h3>{{ group }}</h3>
      <div class="event-coord">
        <BaseIcon name="coord"/>
        <div class="event-coord-text">
          <p>{{ address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/baseicon/BaseIcon'

export default {
  name: 'TheEvent',
  components: { BaseIcon },
  props: {
    label: String,
    day: String,
    numb: Number,
    src: String,
    group: String,
    address: String,
    index: Number
  },
  computed: {
    classes () {
      const classes = [
        'event'
      ]
      console.log(this)
      return this.isActive
        ? [...classes, 'event-active']
        : [...classes]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.events-items {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;

  .event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 17px 16px;
    margin-bottom: 16px;
    border-radius: 16px;

    .event-date {
      display: flex;
      flex-direction: row;
      align-items: center;

      .event-date-time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 24px;

        .event-day {
          display: flex;
          justify-content: center;

          span {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            text-transform: uppercase;
            color: #000000;
            opacity: 0.33;
          }
        }

        .event-numb {
          display: flex;
          justify-content: center;

          span {
            font-family: "Raleway Bold", sans-serif;
            font-weight: 900;
            font-size: 24px;
            line-height: 28px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #000000;
          }
        }
      }

      .event-img {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;

        img {
          width: 100%;
        }
      }
    }

    .event-img-active {
      position: relative;
      z-index: 1;

      &:after {
        content: 'Выгодно';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 18px;
        padding-top: 2px;
        background: $main-yellow;
        border-radius: 0px 0px 4px 0px;
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        text-align: center;
        color: $main-black;
        z-index: 2;
      }
    }

    .event-name {
      display: flex;
      flex-direction: column;
      width: 160px;

      h3 {
        height: 38px;
        margin-bottom: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $main-black;
      }

      .event-coord {
        display: flex;
        flex-direction: row;
        .event-coord-text {
          p {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: $main-black;
            opacity: 0.33;
          }
        }
      }
    }
  }
}

.event-active {
  background: $main-bg;
}
</style>
