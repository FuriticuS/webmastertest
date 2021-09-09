<template>
  <div :class="$attrs.class || 'event-coord-img'">
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-html="path"
    >
    </svg>
  </div>
</template>

<script>
import icons from '../icons'

export default {
  name: 'BaseIcon',
  props: ['name'],
  data () {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.event-coord-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  svg{
    width: 14px;
    height: 14px;
  }
}

.nav-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 11px;
  svg{
    width: 24px;
    height: 24px;
  }
}

.nav-title-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 16px;
  margin-right: 11px;
  svg{
    width: 22px;
    height: 16px;
  }
}

.btn-active-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  svg{
    width: 100%;
    height: 100%;
  }
}

</style>
