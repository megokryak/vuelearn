<template>
  <div class="message">
    <p> Message component - {{ message}}</p>
  </div>
</template>

<script>
  export default {
    props: { // принимаем message HEllo
      message: {
        type: String,
        //required: true, // как обязательный параметр при передачи
        default: 'message' // если не отправили, то сработает это сообщение
      }
    }
  };
</script>

<style lang="scss" scoped>
  .message {
    text-align: center;
    padding: 20px;
  }
</style>
