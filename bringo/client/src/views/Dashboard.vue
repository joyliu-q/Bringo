<template>
    <wrapper>
        <v-content>
            <v-overlay :value="overlay">
                <v-card v-if="overlay_page==0" max-width="500">
                    <v-card-title>Hi! Welcome to Bringo.</v-card-title>
                    <v-card-text>Before we start, let me give you a rundown of how our platform works!</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==1" max-width="500">
                    <v-card-title>Dashboard</v-card-title>
                    <v-card-text>This is the dashboard page. This is the page you will see after logging on. On the dashboard page, there are 3 main sections: profile, blog, and social.</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==2" max-width="500">
                    <v-card-title>Profile</v-card-title>
                    <v-card-text>In profile, you can view and edit your information, such as your name, age, and interests.</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==3" max-width="500">
                    <v-card-title>Profile</v-card-title>
                    <v-card-text>With this information, other people can find you through the directory and we can better pair you up with others for calls and social events.</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==4" max-width="500">
                    <v-card-title>Blog</v-card-title>
                    <v-card-text>In Blog, you can share your personal stories and experiences. Our blog postings are designed to be user friendly: you can either type it or use the speech-to-text function!</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==5" max-width="500">
                    <v-card-title>Blog</v-card-title>
                    <v-card-text>Similarly, you can read others' blogs as well.</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==6" max-width="500">
                    <v-card-title>Social</v-card-title>
                    <v-card-text>In the social session, you can schedule calls and socialize with others, as well as viewing upcoming events. </v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==7" max-width="500">
                    <v-card-title>Bingo</v-card-title>
                    <v-card-text>Lastly, our favourite section: Bingo!</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==8" max-width="500">
                    <v-card-title>Bingo</v-card-title>
                    <v-card-text>Once you finish a call, you can add a mark on your social Bingo sheet. (The goal is to meet all sorts of people and share all sorts of experiences, so you can reach a Bingo!)</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==9" max-width="500">
                    <v-card-title>Bingo</v-card-title>
                    <v-card-text>This Bingo sheet will also be updated monthly, so try to get them completed!</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==10" max-width="500">
                    <v-card-title>Conclusion</v-card-title>
                    <v-card-text>These all may sound like a lot of features: take your time to figure it out! For each page, we will have a tutorial where we can guide you through how to use this platform. You can find it by clicking "Help" on the top right.</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay_page+=1">Okay</v-btn>
                    </v-row>
                </v-card>
                <v-card v-if="overlay_page==11" max-width="500">
                    <v-card-title>Conclusion</v-card-title>
                    <v-card-text>Thank you for using Bringo! Enjoy :D</v-card-text>
                    <v-row justify="center">
                        <v-btn large @click="overlay=false">Okay</v-btn>
                    </v-row>
                </v-card>
            </v-overlay>
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
                    <v-col cols="5">
                        <v-card class="mx-auto my-12" height="350px">
                            <v-card-title>
                                <v-icon>mdi-pen</v-icon>
                                Blog
                            </v-card-title>
                            <v-card-text>My Stories</v-card-text>
                            <v-spacer></v-spacer>
                            <v-row class="ma-5">
                                <v-btn>My Blog</v-btn>
                                <v-btn to="create_blog">Write New Entry</v-btn>
                            </v-row>
                            <v-spacer></v-spacer>
                            <v-card-text>Community Highlights</v-card-text>
                            <v-spacer></v-spacer>
                            <v-row class="ma-5">
                                <v-btn>Browse Blogs</v-btn>
                                <v-btn>Surprise Me</v-btn>
                            </v-row>
                        </v-card>
                    </v-col>
                    <!--Sessions-->
                    <v-col cols="7">
                        <v-card class="mx-auto my-12" height="350px">
                            <v-card-title>
                                <v-icon>mdi-calendar-account</v-icon>
                                Schedule Discussion Sessions
                            </v-card-title>
                            <v-list rounded>
                                <v-subheader>
                                    Upcoming Events
                                </v-subheader>
                                <v-list-item-group>
                                    <v-list-item
                                    v-for="event in events"
                                    :key="event"
                                    @mouseover="attendHover=true"
                                    @mouseleave="attendHover=false" 
                                    @click="attendMeeting()"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>mdi-clock</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="event"></v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-fab-transition>
                                                <v-button v-if="attendHover">Attend</v-button>
                                            </v-fab-transition>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <v-row class="ma-5">
                                <v-btn @click="alertCallRequests()">View Upcoming Calls</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn to="directory">Book New Social Call</v-btn>
                            </v-row>
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
            overlay: false,
            overlay_page: 0,
            editProfile: false,
            attendHover: false,
            interests: ["Literature", "Book Illustration", "Roald Dahl"],
            events: ["7:30PM EST Sept 30 - Maria Li", 
                    "10:00AM EST Oct 02 - Daniel Callaway"],
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
        attendMeeting: function() {
            alert("The meeting hasn't started yet: please wait until the specified date and time!");
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