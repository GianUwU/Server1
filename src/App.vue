<template>
  <div>
    <h1>Hello from App.vue 🎉</h1>
    <MyButton />
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  name: 'App',
  components: { MyButton }
}
</script>

<style>
h1 {
  color: dodgerblue;
}
</style>
