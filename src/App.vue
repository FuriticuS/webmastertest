<template>
  <div class="wrapper">
    <Sidebar />
    <Events />
    <Description />
  </div>
    <router-view/>
</template>

<script>
import Events from '@/components/events/Events'
import Description from '@/components/description/Description'
import Sidebar from '@/components/sidebar/Sidebar'

export default {
  components: { Sidebar, Description, Events }
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
