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
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>
                    <v-card-title>Your Profile</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn ripple=True>Edit</v-btn>
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
                            <v-chip>Literature</v-chip>
                            <v-chip>Book Illustration</v-chip>
                            <v-chip>Roald Dahl</v-chip>
                            <v-chip>+</v-chip>
                        </v-chip-group>
                    </v-card-text>
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