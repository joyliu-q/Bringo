<template>
  <v-app>
    <Navigator/>
    <div class="wrapper">
      <slot/>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Navigator from './Navigator.vue'
import Footer from './Footer.vue'

export default {
  name: 'Wrapper',
  components: {
    Navigator,
    Footer
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>>