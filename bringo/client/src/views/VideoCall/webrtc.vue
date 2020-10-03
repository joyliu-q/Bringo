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