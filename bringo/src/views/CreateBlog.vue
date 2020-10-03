<template>
    <wrapper>
        <div>
            <v-content>
                <v-container >
                    <!--Profile-->
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
                    <v-textarea
                        solo
                        name="input-7-4"
                        label="Write your story here or tell it using our speech-to-text button above."
                        rows="10"
                        auto-grow
                        counter
                        :value="comment"
                    ></v-textarea>
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
var IAM_access_token = 'eyJraWQiOiIyMDIwMDkyMjE4MzMiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWJlM2NlYTNjLTIyZDQtNGNhMS1iZTM2LWM1MmJmODYxZDExMiIsImlkIjoiaWFtLVNlcnZpY2VJZC1iZTNjZWEzYy0yMmQ0LTRjYTEtYmUzNi1jNTJiZjg2MWQxMTIiLCJyZWFsbWlkIjoiaWFtIiwianRpIjoiMjI1Zjg1NzktMGJkNS00YjIyLWJjYzMtNzdiMDJiZDUyNTMwIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1iZTNjZWEzYy0yMmQ0LTRjYTEtYmUzNi1jNTJiZjg2MWQxMTIiLCJuYW1lIjoiQXV0by1nZW5lcmF0ZWQgc2VydmljZSBjcmVkZW50aWFscyIsInN1YiI6IlNlcnZpY2VJZC1iZTNjZWEzYy0yMmQ0LTRjYTEtYmUzNi1jNTJiZjg2MWQxMTIiLCJzdWJfdHlwZSI6IlNlcnZpY2VJZCIsInVuaXF1ZV9pbnN0YW5jZV9jcm5zIjpbImNybjp2MTpibHVlbWl4OnB1YmxpYzpzcGVlY2gtdG8tdGV4dDp1cy1lYXN0OmEvZWE1ZTM1NWRlOWU0NGI5NDg1YzRhOGVkNGQ4NTc0ZGE6NGQxZDA2Y2EtN2M5Yy00MDkyLWI3YmItMmU5MjRhMDc3OTQ1OjoiXSwiYWNjb3VudCI6eyJ2YWxpZCI6dHJ1ZSwiYnNzIjoiZWE1ZTM1NWRlOWU0NGI5NDg1YzRhOGVkNGQ4NTc0ZGEiLCJmcm96ZW4iOnRydWV9LCJpYXQiOjE2MDE3MDAyNTIsImV4cCI6MTYwMTcwMzg1MiwiaXNzIjoiaHR0cHM6Ly9pYW0uYmx1ZW1peC5uZXQvaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.W8eJ0Rgh-fAqZBirRkDJNloEh2ls8bixgWE96BW5ZPKKomdM0NDEn2kc1HUYUIbT1XbJCJLxplESRTtB4LWMRc1RbLSe2muGarx_QS6qH8_SBpvtqcUEFqUHYJtfB5yJAgVvrAl1cjqar8F0u0ED_BCwDLuWfmC4fU4jymuSIjeHiigFdtBx2NZgn5sFZ9IYw4jlK-VzV4da2oOrtTg6EOOv6hkNT6Mx8Cx_43b1qBgx7ereDk3pz5UIUGmKblHFAcYSgXBR8rnzLsQWmqTy-x9FlQu7z06iPrP_76jTkD9U5zUiw2T2iuccPUPg-aAPjABAAaMLfv329uHh71tfzA';
const WatsonSpeech = require("watson-speech")
export default {
    name: 'Dashboard',
    components: {
      Wrapper,
    },
    data: function () {
        return {
            editProfile: false,
            speechOn: false,
            interests: ["Literature", "Book Illustration", "Roald Dahl"],
        }
    },
    methods: {
        toggleSpeech: async function() {
            var response = await fetch('http://localhost:3002/api/speech-to-text/token');
            var transcriptToken = await response.text();
            // If speech-to-text already on, then turn off
            if (this.speechOn) {
                this.speechOn = false;
                stream.stop();
                stream.setEncoding('utf8');
                stream.on('data', function(data) {
                    console.log(data);
                });
                stream.on('error', function(err) {
                    console.log(err);
                });
                console.log("speech done uwu");
            }
            // Otherwise, turn it on 
            else {
                this.speechOn = true
                var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({accessToken: transcriptToken});
                stream.setEncoding('utf8');
                stream.on('data', function(data) {
                    console.log(data);
                });
                stream.on('error', function(err) {
                    console.log(err);
                });
                console.log("speech uwu")
            }
        },
        //Profile Methods
        displayNewChip: function() {
            var input = document.getElementById('newChipInput');
            if (input.style.display == 'none') {
                input.style.display = 'block';
                input.focus();
            }
        },
        addNewChip: function() {
            var input = document.getElementById('newChipInput');
            // If no input value, give alert
            if (!input.value || this.interests.indexOf(input.value) != -1) {
                // We need a more user friendly message for seniors than this though
                alert("Cannot add a duplicate or blank interest. Please type something before pressing enter")
                input.focus();
            } 
            else {
                this.interests.push(input.value);
                input.value = "";
                input.style.display = 'none';
            }
        },
        // Schedule Methods
        alertCallRequests: function() {
            alert("No Incoming Call Requests");
        },
    }
}
</script>

<style>
    h1 {
        font-family: Helvetica;
    }
    .container {
        max-width: 1000px;
    }
    #newChipInput {
        color: #ffffff;
        outline: none;
    }
    #newChipInput::placeholder {
        color: #c099ff;
    }

</style>