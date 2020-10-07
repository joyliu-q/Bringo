<template>
    <wrapper>
        <v-content>
            <v-hover>
                <template v-slot:default="{ hover }">
                    <v-card
                        class="mx-auto"
                        max-width="100%"
                    >
                        <v-img src="../assets/404.svg"></v-img>
                        <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                color="none"
                            >
                                <v-card-actions class="justify-center" style="height:300px">
                                    <v-btn x-large class="returnButton" @click="returnPage">Return to Main</v-btn>
                                </v-card-actions>
                            </v-overlay>
                        </v-fade-transition>
                    </v-card>
                </template>
            </v-hover>
        </v-content>
    </wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper'
export default {
    name: '404 Error',
    components: {
      Wrapper,
    },
    data: function () {
        return {
            loggedIn: true,
        }
    },
    methods: {
        returnPage () {
            if (this.loggedIn == true) {
                this.$router.push('dashboard');
            }
            else {
                this.$router.push('/');
            }
        }
    },
}
</script>

<style>
    .returnButton{
        width: 500px;
        margin-top: 100px;
    }
</style>