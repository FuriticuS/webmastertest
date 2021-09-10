<template>
  <div class="navigation">
    <div id="nav">
      <button v-on:click="hideblock" class="btn-active">
        <BaseIcon name="burger" class="btn-active-icon"/>
      </button>
      <Sidebar v-if="isElVisible"/>
      <SidebarMobile v-if="isElPhoneVisible"/>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/baseicon/BaseIcon'
import Sidebar from '@/components/sidebar/Sidebar'
import SidebarMobile from '@/components/sidebar/SidebarMobile'

export default {
  name: 'TheSidebar',
  components: { SidebarMobile, BaseIcon, Sidebar },
  props: {
    label: String,
    icon: String
  },
  data: () => {
    return {
      isElVisible: true,
      isElPhoneVisible: false
    }
  },
  methods: {
    hideblock: function () {
      const events = document.querySelector('.events')
      const event = document.querySelectorAll('.event')
      if (this.isElVisible) {
        this.isElVisible = false
        this.isElPhoneVisible = true
        events.style.width = '212px'
        event.forEach(n => n.classList.add('block-column'))
      } else {
        this.isElVisible = true
        this.isElPhoneVisible = false
        events.style.width = '400px'
        event.forEach(n => n.classList.remove('block-column'))
      }
    }
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
  }
}

.hide {
  display: none;
}
</style>
