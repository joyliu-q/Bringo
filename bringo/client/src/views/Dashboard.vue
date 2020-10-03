
<template>
    <wrapper>
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
                            color="deep-purple accent-4 white--text" 
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
                    </v-card-text>
                </v-card>
                <v-row justify="center">
                    <!--Blog-->
                    <v-col cols="7">
                        <v-card class="mx-auto my-12" height="300px">
                            <v-card-title>Blog</v-card-title>
                            <v-card-text>My Stories</v-card-text>
                            <v-spacer></v-spacer>
                            <v-btn>See Previous Blogs</v-btn>
                            <v-btn to="create_blog">Write a New Entry</v-btn>
                            <v-spacer></v-spacer>
                            <v-card-text>Community Highlights</v-card-text>
                            <v-spacer></v-spacer>
                            <v-btn>Browse Other Blogs</v-btn>
                            <v-btn>Random Suggestion: Surprise Me</v-btn>
                        </v-card>
                    </v-col>
                    <!--Sessions-->
                    <v-col cols="5">
                        <v-card class="mx-auto my-12" height="300px">
                            <v-card-title>Schedule Discussion Sessions</v-card-title>
                            <v-btn @click="alertCallRequests()">View Incoming Call Requests</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn to="directory">Go to Directory: Book New Call</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
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
            editProfile: false,
            interests: ["Literature", "Book Illustration", "Roald Dahl"],
        }
    },
    methods: {
        toggleEdit: function() {
            if (this.editProfile) {
                this.editProfile = false
            }
            else {
                this.editProfile = true
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