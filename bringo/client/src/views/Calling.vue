<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-3">
                <h2>Welcome</h2>
                <input v-model="roomId">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="">
                    <vue-webrtc ref="webrtc"
                        width="100%"
                        :roomId="roomId"
                        v-on:joined-room="logEvent"
                        v-on:opened-room="logEvent"
                        @error="onError"/>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <button type="button" class="btn btn-primary" @click="onJoin">Join Meeting Room</button>
          </div>
        </div>
        </div>
</template>


<script>
import Vue from 'vue';

import {WebRTC} from 'vue-webrtc'
Vue.component(WebRTC.name, WebRTC)

// ISSUE 5: https://github.com/westonsoftware/vue-webrtc/issues/5
import * as io from 'socket.io-client'
window.io = io

Vue.use(WebRTC)

//import webrtc from "../VideoCall/webrtc"

export default {
    name: 'calling',
    components:{
    },
    data(){
        return{
            roomId: "Meeting Room"
        };
    },
    mounted: function () {
        this.$refs.webrtc.join()
    }
    // methods: {
    //     onJoin(){
    //         this.$refs.webrtc.join();
    //     },
    //     onError(error, stream) {
    //     console.log('On Error Event', error, stream);
    //   },
    // }
};
</script>

<style>
#calling {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>