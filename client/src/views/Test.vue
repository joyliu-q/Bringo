<template>
    <wrapper>
        <div>
            <v-content>
                <v-container>
                    <!--Header-->
                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="1000"
                        height = "auto"
                    >
                        <v-card-title>
                            Create New Blog Entry
                            <v-spacer></v-spacer>
                        </v-card-title>
                        <v-card-text>
                            <v-chip-group
                                v-model="selection"
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                                <v-row align="center">
                                    <v-card-title>Topics: </v-card-title>
                                    <v-chip v-for="interest in interests" :key="interest"
                                    >
                                        {{interest}}
                                    </v-chip>
                                    <v-fab-transition>
                                    <v-chip 
                                        v-if="editProfile"
                                        id="newChipButton"
                                        @click="displayNewChip()"
                                    >
                                        <input 
                                            type="text" 
                                            id="newChipInput" 
                                            placeholder="Add New Label Here" 
                                            style="display:none"
                                            @keydown.enter="addNewChip()"
                                        >
                                        <v-icon>mdi-plus</v-icon>
                                    </v-chip>
                                    </v-fab-transition>
                                </v-row>
                            </v-chip-group>
                            <!--Speech to Text Button-->
                            <v-btn 
                                flat color="deep-purple accent-4 white--text" 
                                @click="toggleSpeech()"
                                style="float: left"
                            >
                                <v-icon>{{ speechOn ? 'mdi-microphone-outline' : 'mdi-microphone'}}</v-icon>
                                {{ speechOn ? 'Pause/Stop: I\'m Finished' : 'Speech to Text: Too Tired to Type? Tell Your Story' }}
                            </v-btn>
                        </v-card-text>
                    </v-card>
                    <!--Blog Input Area-->
                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="1000"
                        height = "auto"
                    >
                        <speech-to-text :text.sync="text" @speechend="speechEnd"></speech-to-text>
                        <v-textarea
                            solo
                            name="input-7-4"
                            label="Write your story here or tell it using our speech-to-text button above."
                            rows="10"
                            auto-grow
                            counter
                            v-model="text"
                            :value="comment"
                        ></v-textarea>
                    </v-card>
                    <!--Publish Button-->
                    <v-btn large 
                        flat color="deep-purple accent-4 white--text" 
                        style="float: right"
                    >
                        Publish Blog Entry
                    </v-btn>
                </v-container>
            </v-content>
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