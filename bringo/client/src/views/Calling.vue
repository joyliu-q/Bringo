<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-3">
                <h2>Meeting Room</h2>
                <input v-model="roomId">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="">
                    <vue-webrtc ref="webrtc"
                    width="100%"
                      :roomId="roomId"/>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 my-3">
            <button type="button" class="btn btn-primary" @click="onJoin">Join</button>
          </div>
        </div>
        </div>
</template>


<script>


export default {
    name: 'Calling',
    components:{

    },
    data(){
        return{
            roomId: "Meeting Room"
        }
    }

}
</script>