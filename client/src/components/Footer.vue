<template>
  <v-footer
    height="auto"
    color="primary lighten-1" 
  >
  <v-spacer></v-spacer>
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2020 — <strong>Bridge Developer Team</strong>

      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    name:"Footer",
}
</script>