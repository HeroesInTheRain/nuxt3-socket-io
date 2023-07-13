<template>
<div class="container">
  <div class="row align-items-start">
    <div class="col p-5 col-6">
      <div class="row pb-3">
        <label for="textInput" class="form-label">Write a message:</label>
        <input v-model="messageInput" type="text" class="form-control" id="textInput">
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary" @click="sendMessage()">Send message</button>
      </div>
    </div>
    <div class="col py-5 col-6">
      <div v-for="item in messagesList" :key="item" class="row">
        <div :class="'alert ' + item.type" role="alert">
          {{ item.message }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { state, socket } from "@/io/client"

const messageInput = ref("");

const messagesList = computed(() => {
  return state.messagesList;
})

const sendMessage = () => {
  if(messageInput.value != "")
    socket.emit("message", {
      message: messageInput.value,
      type: 'alert-info'
    });
}
</script>