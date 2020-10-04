<template>
  <div id="app" role="main">
    <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),

  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }
};
</script>

<style lang="scss">
  #app{
    background-color:rgb(215, 238, 245);
        font-family: Helvetica;
    
  }
</style>