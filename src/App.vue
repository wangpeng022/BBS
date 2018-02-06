<template>
  <div id="app">
    <Mheader/>
    <router-view/>
  </div>
</template>

<script>
import Mheader from "./components/header";
export default {
  name: "App",
  components: {Mheader}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #e1e1e1;
}
ul li{
  list-style: none;
}
</style>
