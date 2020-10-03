<template id = "Template1">
<wrapper>
  <v-app class="indigo lighten-5">
    <v-content>
      <v-container
        fluid
      >

        <v-row
          align="center"
          justify="center"
          class="mb-6"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
          <template>


    <v-container>
      </v-container>
          <v-container>
      </v-container>
          <v-container>
      </v-container>
        
          <p style="font-size:40px; font-weight:bold; text-align:center">
          Bridge
          </p>
       <img src="../assets/community1.png">

          <v-container>
      </v-container>
          <v-container>
      </v-container>
          <v-container>
      </v-container>


</template>
          <router-link to="dashboard"> To dashboard(for draft use)</router-link>
          <router-link to="calendar"> To calendar(for draft use)</router-link>
          <router-link to="directory"> To directory(for draft use)</router-link>
          <router-link to="calling"> To calling(for draft use)</router-link>
            <v-card class="elevation-12 blue lighten-5 mx-40">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="Username"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword? 'text': 'password'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn to="dashboard" flat color="indigo primary-1">
                    <span class="white--text title">Log in</span>
                    <v-icon right class="white">mdi-login</v-icon>
                    </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-3">
            <v-spacer></v-spacer>
            <span class="font-italic font-weight-bold">Welcome!</span>
            <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper'

export default {
    name: 'Login',
    components: {
      Wrapper,
    },
    data: () =>({
        showPassword: false
    })
}
</script>
<style scoped>
#Template1{
        font-family: Open-Sans;
    }
</style>