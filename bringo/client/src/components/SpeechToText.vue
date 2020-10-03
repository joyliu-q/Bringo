<template>
    <div class="speechtotext">
        <v-card>
            <v-card-text>
            <v-layout row wrap justify-space-around>
                <v-flex xs8 sm9 text-xs-center>
                <p v-if="error" class="grey--text">{{error}}</p>
                <p v-else class="mb-0">
                    <span v-if="sentences.length > 0" v-for="sentence in sentences key:">{{sentence}}. </span>
                    <span>{{runtimeTranscription}}</span>
                </p>
                </v-flex>
                <v-flex xs2 sm1 text-xs-center>
                <v-btn
                    dark
                    @click.stop="toggle ? endSpeechRecognition() : startSpeechRecognition()"
                    icon
                    :color="!toggle ? 'grey' : (speaking ? 'red' : 'red darken-3')"
                    :class="{'animated infinite pulse': toggle}"
                >
                    <v-icon>{{toggle ? 'mic_off' : 'mic'}}</v-icon>
                </v-btn>
                </v-flex>
            </v-layout>
            </v-card-text>
        </v-card>
  </div>
</template>


<script>
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = SpeechRecognition? new SpeechRecognition() : false

export default {
    name: 'speech-to-text',
    props: {
        lang: {
        type: String,
        default: 'en-US'
        },
        text: {
        type: [String, null],
        required: true
        }
    },
    data () {
        return {
            error: false,
            speaking: false,
            toggle: false,
            runtimeTranscription: '',
            sentences: []
        }
    },
    methods: {
        checkCompatibility () {
            if (!recognition) {
                this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox'
            }
        },
        endSpeechRecognition () {
            recognition.stop()
            this.toggle = false
            this.$emit('speechend', {
                sentences: this.sentences,
                text: this.sentences.join('. ')
            })
        },
        startSpeechRecognition () {
            if (!recognition) {
                this.error = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox'
                return false
            }
            this.toggle = true
            recognition.lang = this.lang
            recognition.interimResults = true

            recognition.addEventListener('speechstart', event => {
                this.speaking = true
            })

            recognition.addEventListener('speechend', event => {
                this.speaking = false
            })

            recognition.addEventListener('result', event => {
                const text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
                this.runtimeTranscription = text
            })

            recognition.addEventListener('end', () => {
                if (this.runtimeTranscription !== '') {
                this.sentences.push(this.capitalizeFirstLetter(this.runtimeTranscription))
                this.$emit('update:text', `${this.text}${this.sentences.slice(-1)[0]}. `)
                }
                this.runtimeTranscription = ''
                recognition.stop()
                if (this.toggle) {
                // keep it going.
                recognition.start()
                }
            })
            recognition.start()
        },
        capitalizeFirstLetter (string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    },
    mounted () {
        this.checkCompatibility()
    },
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
    height: 10px;
    width: auto;
    color: $default;
    font-weight: bold;
    font-size: .8em;
    cursor: default;
    align-items: center;
  }
  ul > li:not(:last-child)::after {
    content: '/';
    float: right;
    font-size: .8em;
    margin: 0 .5em;
    color: $light-default;
    cursor: default;
  }
  .linked {
    cursor: pointer;
    font-size: 1em;
    font-weight: normal;
  }
</style>