<template>
    <wrapper>
        <div>
            <v-content>
                <v-container>
                    <!--Profile-->
                    <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="1000"
                    >
                        <v-card-title>
                            Your Profile
                            <v-spacer></v-spacer>
                            <!--Edit button for Profile-->
                            <v-btn 
                                flat color="deep-purple accent-4 white--text" 
                                @click="toggleEdit()"
                            >
                                {{ editProfile ? 'Confirm Profile Changes' : 'Edit Profile Info' }}
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                            </v-row>
                            <div class="my-4 subtitle-1">
                                John Doe
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>
                            <v-chip-group
                                v-model="selection"
                                active-class="deep-purple accent-4 white--text"
                                column
                            >
                                <v-row align="center">
                                    <v-card-title>Interests: </v-card-title>
                                    <v-chip>Literature</v-chip>
                                    <v-chip>Book Illustration</v-chip>
                                    <v-chip>Roald Dahl</v-chip>
                                    <v-chip 
                                        v-if="editProfile"
                                    >
                                        +
                                    </v-chip>
                                </v-row>
                            </v-chip-group>
                        </v-card-text>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-row justify="center">
                        <!--Forum or Whatever-->
                        <v-col cols="7">
                            <v-card class="mx-auto my-12">
                                <v-card-title>Forum/Bingo/Other Community Thing</v-card-title>
                            </v-card>
                        </v-col>
                        <!--Sessions-->
                        <v-col cols="5">
                            <v-card class="mx-auto my-12">
                                <v-card-title>Schedule Discussion Sessions</v-card-title>
                                <v-btn>View Incoming Call Requests</v-btn>
                                <v-btn>Go to Directory: Book New Call</v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </div>
    </wrapper>
</template>

<script>
import Wrapper from '../components/Wrapper'

export default {
    name: 'Dashboard',
    components: {
      Wrapper,
    },
    data: function () {
        return {
            editProfile: false
        }
    },
    methods: {
        toggleEdit: function () {
            if (this.editProfile) {
                this.editProfile = false
            }
            else {
                this.editProfile = true
            }
        }
    }
}
</script>
<style>
    h1 {
        font-family: Helvetica
    }
    .container {
        max-width: 1000px
    }
</style>