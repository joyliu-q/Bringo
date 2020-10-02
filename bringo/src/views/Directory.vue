<template>
<wrapper>

    <v-app class="indigo lighten-5">
        <v-main>
        <v-container>
        <v-card>
        <v-card-title id="Header">Schedule a videoChat!
            <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
          ></v-text-field>
        </v-card-title>
            <v-row  no-gutters>
                <v-col v-for="n in 4" :key="n">
                    <v-card class="mx-auto" max-width="434" tile>
                        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                        <v-row align="end" class="fill-height">
                            <v-col align-self="start" class="pa-0" cols="12">
                                <v-avatar class="profile" color="grey" size="164" tile>
                                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col class="py-0">
                                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                                    <v-list-item-content>
                                    <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                                    <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        </v-container>
        </v-main>
    </v-app>
</wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper'

export default {
    name: 'Directory',
    components: {
      Wrapper,
    },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
}
</script>

<style scoped>
    #Header{
        align-items: center;
        text-align: center;
        width: 1258px;
        height: 67px;
        left: 91px;
        top: 106px;
        bottom: 106px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 59px;
        display: flex;
        color: #000000;
    }
</style>
