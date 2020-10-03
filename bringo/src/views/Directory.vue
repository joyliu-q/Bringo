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
            <v-select :items="items" outlined label="Filter By" dense></v-select>
            </v-col>
        </v-row>
            <v-row  no-gutters>
                <template v-for="(user,i) in users">
                
                    <v-card class="mx-auto" max-width="344" align="center" :key="i" width="350">
                        <v-avatar size="72" center>
                            <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                        </v-avatar>
                        <v-card-title>
                            {{user.name}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{user.self_intro}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn depressed color="primary">
                                Schedule a meeting
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
</wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper'

const users = [
    {
        id: 1,
        name: 'Som Boudy',
        self_intro: 'Hi! I’m Som, a recent high school graduate. I love playing and watching baseball and I love cats!',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },
    {
        id: 2,
        name: 'Andre Jones',
        self_intro: 'Hi! I’m Hey, my name is Andre, I am a psychology major in university and love helping out people and playing chess.',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },
    {
        id: 3,
        name: 'Maria Stevens',
        self_intro: 'Hi! I am a graduate school in history and I love crime shows!',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },
    {
        id: 4,
        name: 'Daya Powers',
        self_intro: 'Hi! I am a graduate school in history and I love crime shows!',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },
    {
        id: 5,
        name: 'Dolly-Anna Ray',
        self_intro: 'A woman with wisdom',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },
    {
        id: 6,
        name: 'Jim Sanford',
        self_intro: 'A woman with wisdom',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        hobbies: ['baseball', 'cats']
    },

];

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
      users,
    }),
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

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 59px;
        display: flex;
        color: #000000;
    }
</style>
