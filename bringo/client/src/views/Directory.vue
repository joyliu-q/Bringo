<template>
<wrapper>
    <v-app class="indigo lighten-5">
        <v-main>
        <v-container>
        <v-row>
            <v-col>
                <h5 id="Header">Schedule a Videocall with another!</h5>
            </v-col>
        </v-row>
        
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <v-select :items="items" v-model="selection" outlined label="Filter/Sort By" dense ></v-select>
            </v-col>
            <v-col cols="2">
                <v-btn color="primary" @click="updateUsers" >Go!
                <v-icon>search</v-icon>
                </v-btn>
            </v-col>
        </v-row>
            <v-row  no-gutters>
                <template v-for="(user,i) in filteredUsers">
                <v-container :key="i">
                    <v-card class="mx-auto" max-width="450" align="center"  width="450" blue lighten-1>

                        <v-avatar size="72" center>
                            <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>

                        <v-card-title>
                            {{user.name}} (Age: {{user.age}})
                        </v-card-title>
                        <v-card-subtitle>
                            Hi! I'm a {{user.title}}! {{user.self_intro}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="primary" to="/calendar">
                                Schedule a meeting
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>

                    </v-card>
                </v-container>
                </template>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
</wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper'
import usersJson from './users.json'


export default {
    name: 'Directory',
    components: {
      Wrapper,
    },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
      items: ['Age(from high to low)', 'Age(from low to high)', 'Volunteer', 'Peers'],
      selection:'',
      users: usersJson,
      filteredUsers:[],
    }),

    methods:{
        updateUsers: function(){
            this.filteredUsers=[];
            var usersNum = this.users.users.length;
            if(this.selection=='Age(from high to low)'){
                console.log("Age!!!!");
                for(var i=0; i<usersNum; i++){
                        this.filteredUsers.push(this.users.users[i]);
                }
                this.filteredUsers.sort(function(a, b){return b.age-a.age});
                return this.filteredUsers;
            }
            if(this.selection=='Age(from low to high)'){
                console.log("Age!!!!");
                for(i=0; i<usersNum; i++){
                        this.filteredUsers.push(this.users.users[i]);
                }
                this.filteredUsers.sort(function(a, b){return a.age-b.age});
                return this.filteredUsers;
            }
            if(this.selection=='Volunteer'){
                console.log("Volunteer!!!");
                for(i=0; i<usersNum; i++){
                    if(this.users.users[i].title=='Volunteer'){
                        this.filteredUsers.push(this.users.users[i]);
                    }
                }
                return this.filteredUsers;
            }
            if(this.selection=='Peers'){
                console.log("Peers!!!");
                for(var j=0; j<usersNum; j++){
                    if(this.users.users[j].title=='peer'){
                        this.filteredUsers.push(this.users.users[j]);
                    }
                }
                return this.filteredUsers;
            }
            if(this .selection==''){
                for(i=0; i<usersNum; i++){
                    this.filteredUsers.push(this.users.users[i]);
                }
                return this.filteredUsers;
            }
        },
        showUsers(){
            this.filteredUsers=[];
            var usersNum = this.users.users.length;
            for(var i=0; i<usersNum; i++){
                this.filteredUsers.push(this.users.users[i]);
            }
            return this.filteredUsers;
        }
    },
    created(){
        console.log("created at once!!")
        this.showUsers();
    }
}
</script>

<style scoped>
    #Header{
        display: block;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        text-align: center;
        width: 1258px;
        height: 67px;
        left: 91px;
        top: 106px;

        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 59px;
        display: flex;
        color: #000000;
    }
</style>
