<template>
    <wrapper>
        <div>
            LOL
            <div id="app">
                <v-app id="inspire">
                    <v-container fluid>
                    <v-layout row wrap justify-center class="mt-4">
                        <v-flex xs12 sm10 text-xs-center>
                        <v-text-field
                            label="The text"
                            v-model="text"
                            textarea
                        ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm8 md4 text-xs-center>
                        <speech-to-text :text.sync="text" @speechend="speechEnd"></speech-to-text>
                        </v-flex>
                        <v-flex xs12 text-xs-center class="mt-4">
                        {{sentences}}
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-app>
            </div>
        </div>
    </wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper'
import SpeechToText from '../components/SpeechToText'

export default {
    name: 'Dashboard',
    components: {
      Wrapper,
      SpeechToText,
    },
    data: function () {
        return {
            text: '',
            sentences: null,
            editProfile: false,
            speechOn: false,
            interests: ["Literature", "Book Illustration", "Roald Dahl"],
        }
    },
    methods: {
        speechEnd ({sentences, text}) {
            console.log('text', text)
            console.log('sentences', sentences)
            this.sentences = sentences
        },
    }
}
</script>