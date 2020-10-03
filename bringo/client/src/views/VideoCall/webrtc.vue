<template>
  <div class="video-list" > 
      <div v-for="item in videoList"
          v-bind:video="item"
          v-bind:key="item.id"
          class="video-item">
        <video controls autoplay playsinline ref="videos" :height="150" :width="150" :muted="item.muted" :id="item.id"></video>
      </div>
  </div>
</template>


<script>
  import RTCMultiConnection from 'rtcmulticonnection';
  require('adapterjs');
  export default {
    name: 'vue-webrtc',
    components: {
      RTCMultiConnection
    },
    data() {
      return {
        rtcmConnection: null,
        localVideo: null,
        videoList: [],
        canvas: null,
        meetingname: null,
      };
    },
     props: {
      roomId: {
        type: String,
        default: 'Meeting Room'
      },
      socketURL: {
        type: String,
        default: 'https://rtcmulticonnection.herokuapp.com:443/'
      },
      cameraHeight: {
        type: [Number, String],
        default: 160
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      screenshotFormat: {
        type: String,
        default: 'image/jpeg'
      },
      enableAudio: {
        type: Boolean,
        default: true
      },
      enableVideo: {
        type: Boolean,
        default: true
      },
      enableLogs: {
        type: Boolean,
        default: false
      },
      stunServer: {
        type: String,
        default: null
      },
      turnServer: {
        type: String,
        default: null
      }
    },
  }

  </script>
  
<style scoped>
  .video-list {
    background: rgb(228, 191, 69);
    height: auto;
  }

    .video-list div {
      padding: 5px;
    }

  .video-item {
    background: #c3e9f0;
    display: inline-block;
  }
</style>