<template>
    <div id="v-router">
      <p>
        <router-link to="/foo">go to foo</router-link>
        <router-link to="/bar">go to bar</router-link>
      </p>
      <router-view></router-view>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
  export default {
  name: 'v-router'
  }
</script>
