<template>
    <wrapper>
        <div>
            <v-content>
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
                            v-if="!edit_profile"
                            flat color="deep-purple accent-4 white--text" 
                            click="edit_profile=true"
                            
                        >
                            Edit Profile Info
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
                        <div>Author of 3 children's books and Victorian Classic fanatic. Cover artist for Roald Dahl's Matilda.</div>
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
                                >
                                    +
                                </v-chip>
                            </v-row>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
                <v-spacer></v-spacer>
                <!--Forum or Whatever-->
                <v-card class="mx-auto my-12" max-width="500">
                    <v-card-title>Forum/Bingo/Other Community Thing</v-card-title>
                </v-card>
                <!--Sessions-->
                <v-card class="mx-auto my-12" max-width="500">
                    <v-card-title>Schedule Discussion Sessions</v-card-title>
                    <v-card-actions class="justify-center">
                        <!--View Incoming Session Requests-->
                        <v-btn ripple=True>View Incoming Call Requests</v-btn>
                        <v-spacer></v-spacer>
                        <!--Book New Call Session-->
                        <v-btn ripple=True>Go to Directory: Book New Call</v-btn>
                    </v-card-actions>
                </v-card>
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
}
</script>

<style>
    h1 {
        font-family: Helvetica
    }
</style>