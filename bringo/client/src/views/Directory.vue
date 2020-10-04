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
            <v-select :items="items" v-model="selection" outlined label="Filter/Sort By" dense @click="updateUsers"></v-select>
            
            </v-col>
        </v-row>
            <v-row  no-gutters>
                <template v-for="(user,i) in filteredUsers">
                <v-container :key="i">
                    <v-card class="mx-auto" max-width="344" align="center"  width="350" blue lighten-3>
                        <v-avatar size="72" center>
                            <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                        </v-avatar>
                        <v-card-title>
                            {{user.name}} Age: {{user.age}}
                        </v-card-title>
                        <v-card-subtitle>
                            Hi! I'm a {{user.title}}! {{user.self_intro}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn depressed color="primary" to="/calendar">
                                Schedule a meeting
                            </v-btn>
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
      items: ['Age','Volunteer', 'Peers'],
      selection:'',
      users: usersJson,
    //   users: [
    //     {
    //         id: 1,
    //         name: 'Som Boudy',
    //         age: 50,
    //         self_intro: 'Hi! I’m Som, a recent high school graduate. I love playing and watching baseball and I love cats!',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"peer"
    //     },
    //     {
    //         id: 2,
    //         name: 'Andre Jones',
    //         age: 60,
    //         self_intro: 'Hi! I’m Hey, my name is Andre, I am a psychology major in university and love helping out people and playing chess.',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"peer"
    //     },
    //     {
    //         id: 3,
    //         name: 'Maria Stevens',
    //         age: 70,
    //         self_intro: 'Hi! I am a graduate school in history and I love crime shows!',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"peer"
    //     },
    //     {
    //         id: 4,
    //         name: 'Daya Powers',
    //         age: 75,
    //         self_intro: 'Hi! I am a graduate school in history and I love crime shows!',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"peer",
    //     },
    //     {
    //         id: 5,
    //         name: 'Dolly-Anna Ray',
    //         age: 55,
    //         self_intro: 'A woman with wisdom',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"Volunteer",
    //     },
    //     {
    //         id: 6,
    //         name: 'Jim Sanford',
    //         age: 60,
    //         self_intro: 'A woman with wisdom',
    //         img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    //         hobbies: ['baseball', 'cats'],
    //         title:"Volunteer",
    //     },
    //   ],
        filteredUsers:[],
    }),

    methods:{
        updateUsers: function(){
            this.filteredUsers=[];
            var usersNum = this.users.users.length;
            if(this.selection=='Age'){
                console.log("Age!!!!");
                for(var i=0; i<usersNum; i++){
                        this.filteredUsers.push(this.users.users[i]);
                }
                this.filteredUsers.sort(function(a, b){return b.age-a.age});
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
