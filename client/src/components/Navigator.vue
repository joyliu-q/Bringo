<template>
  <div class="navigator" role="navigation">
    <v-app-bar app align="center" class="light-blue white--text font-weight-bold">
      <v-icon large left color="white">mdi-sprout</v-icon>  
      <v-header>Bringo</v-header>  
      <v-spacer></v-spacer><v-spacer></v-spacer>
      <!--Breadcrumb-->
      <span class="breadcrumb light-blue font-weight-bold" style="vertical-align: middle">
        <ul>
          <li 
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            style="vertical-align: middle"
            :class="{'linked': !!breadcrumb.link}">
            {{ breadcrumb.name }}
          </li>
        </ul>
      </span>
      <v-btn v-if="this.$route.name!='Login'" to="/">Log out</v-btn>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>

<style scoped>
  .breadcrumb {}
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul > li {
    display: flex;
    float: left;
    width: auto;
    color: $default;
    font-weight: bold;
    cursor: default;
    align-items: center;
  }
  ul > li:not(:last-child)::after {
    content: '/';
    float: right;
    margin: 0 .5em;
    color: $light-default;
    cursor: default;
  }
  .linked {
    cursor: pointer;
    font-weight: normal;
  }
</style>