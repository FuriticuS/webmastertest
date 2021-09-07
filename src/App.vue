<template>
  <div class="wrapper">
    <Menu />
    <Events/>
    <About />
  </div>
    <router-view/>
</template>

<script>
import Menu from "@/components/menu/Menu";
import Events from "@/components/events/Events";
import About from "@/components/about/About";

export default {
  components: {About, Events, Menu}
}
</script>

<style lang="scss">
.wrapper{
  display: flex;
  flex-direction: row;
}
</style>
