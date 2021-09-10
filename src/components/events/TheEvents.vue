<template>
  <div class="events">
    <h2>События 2021 года</h2>
    <div class="events-items">
      <TheEvent v-for='event in events'
                :key="event.label"
                :label="event.label"
                :day="event.day"
                :numb="event.numb"
                :src="event.src"
                :group="event.group"
                :address="event.address"
                :index="event.id"
                :active="event.active === true"
                :activeImg="event.activeImg === true"/>
    </div>
  </div>
</template>

<script>
import TheEvent from '@/components/events/TheEvent'
export default {
  name: 'Events',
  components: { TheEvent },
  data () {
    return {
      events: [
        {
          id: 1,
          label: 'Концерт Gorillaz',
          day: 'Пн',
          numb: 10,
          src: require('@/assets/img/events/event/1.png'),
          address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
          active: true,
          activeImg: false
        },
        {
          id: 2,
          label: 'Bruce Springsteen and the E Street...',
          day: 'Вт',
          numb: 11,
          src: require('@/assets/img/events/event/2.png'),
          address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
          active: false,
          activeImg: true
        },
        {
          id: 3,
          label: 'Hootie & the Blowfish',
          day: 'Ср',
          numb: 12,
          src: require('@/assets/img/events/event/3.png'),
          address: '8502 Preston Rd. Inglewood, Maine 98380',
          active: false,
          activeImg: false
        },
        {
          id: 4,
          label: 'Simple Minds',
          day: 'Чт',
          numb: 13,
          src: require('@/assets/img/events/event/4.png'),
          address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
          active: false,
          activeImg: true
        },
        {
          id: 5,
          label: 'Red Hot Chili Peppers',
          day: 'Пт',
          numb: 14,
          src: require('@/assets/img/events/event/5.png'),
          address: '3517 W. Gray St. Utica, Pennsylvania 57867',
          active: false,
          activeImg: true
        },
        {
          id: 6,
          label: 'Bob Marley and the Wailers',
          day: 'Сб',
          numb: 15,
          src: require('@/assets/img/events/event/6.png'),
          address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
          active: false,
          activeImg: false
        },
        {
          id: 7,
          label: 'Rolling Stones',
          day: 'Вс',
          numb: 16,
          src: require('@/assets/img/events/event/7.png'),
          address: '8502 Preston Rd. Inglewood, Maine 98380',
          active: false,
          activeImg: false
        },
        {
          id: 8,
          label: 'Backstreet Boys',
          day: 'Пн',
          numb: 17,
          src: require('@/assets/img/events/event/8.png'),
          address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
          active: false,
          activeImg: false
        },
        {
          id: 9,
          label: 'Guns N` Roses',
          day: 'Вт',
          numb: 18,
          src: require('@/assets/img/events/event/9.png'),
          address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
          active: false,
          activeImg: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.events {
  display: flex;
  flex-direction: column;
  padding: 33px 16px;
  width: 400px;
  background: $link-active-bg;
  h2{
    font-family: "Raleway Bold", sans-serif;
    font-weight: 800;
    margin-bottom: 16px;
  }
}

</style>
