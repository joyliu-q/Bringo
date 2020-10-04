
<template>
  <wrapper>
    <v-app>
      <v-content>
        <v-container fluid>
          <v-row align="center" justify="center" class="mb-6">
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <p style=" color:#03a9f4; font-size:65px; font-weight:bold; text-align:center">
                Bringo
              </p>
              <v-img 
                class="title-img" 
                src="../assets/community1.png"
              ></v-img>
              <v-card
              >
                <v-tabs>
                  <v-tab>Log In</v-tab>
                  <v-tab>Sign Up</v-tab>
                </v-tabs>
                <v-spacer></v-spacer>
                <v-container>
                    <v-text-field
                  outlined
                  label="Username"
                  name="Username"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="userName"
                ></v-text-field>
                  <v-text-field
                    outlined
                    id="password"
                    label="Password"
                    name="password"
                    v-model="userInputPwd"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword? 'text': 'password'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                  <v-btn large to="dashboard" flat color="blue primary-1" @click="checkPassword">
                    <span class="white--text title">Continue</span>
                    <v-icon large color="white" right>mdi-login</v-icon>
                  </v-btn>
                </v-container>
                <v-spacer></v-spacer>
              </v-card>
            </v-col>
          </v-row>
          <!--CHANGE LATER-->
          <p style="color:#03a9f4; font-size:85px; font-weight:bold; text-align:left">
            Bored?
          </p>
          <p style="color:#03a9f4; font-size:85px; font-weight:bold; text-align:left"> Stuck at Home?</p>
          <p style = " font-size:40px;width:42.5%;">Bringo is a social platform for seniors. Our mission is to help you build a support system and bridge the generational gap in the community.</p>
          <p style = " font-size:40px;width:42.5%;"> Here, you can choose and schedule calls with volunteers across the nation, all eager to help, listen, and engage with you </p>
          <!--<v-img src="../assets/youngpeople.png"></v-img>-->
        </v-container>
      </v-content>
    </v-app>
  </wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper'
// import EventBus from '../../event-bus'

export default {
    name: 'Login',
    components: {
      Wrapper,
    },
    data: () =>({
        showPassword: false,
        userName: '',
        password: 'maria',
        userInputPwd:''
    }),
    methods: {
      checkPassword(){
        console.log("Hello?????")
        if(this.userInputPwd!=this.password){
          console.log("error!")
        }
      }
    }
}
</script>
<style scoped>
#Template1{
        font-family: Helvetica;
    }
    .title-img {
      float:center;
    }
</style>