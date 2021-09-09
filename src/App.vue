<template>
  <div class="wrapper">
    <TheSidebar />
    <TheEvents />
    <TheDescription />
  </div>
    <router-view/>
</template>

<script>
import TheEvents from '@/components/events/TheEvents'
import TheDescription from '@/components/description/TheDescription'
import TheSidebar from '@/components/sidebar/TheSidebar'

export default {
  components: { TheSidebar, TheDescription, TheEvents }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>
