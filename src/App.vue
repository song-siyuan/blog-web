<template>
  <div id="app">
    <Header></Header>
    <Loading></Loading>
    <Sidebar></Sidebar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import { Header } from '@/components/layout/Header.vue'
import { Footer } from '@/components/layout/Footer.vue'
import { Loading } from '@/components/loading/loading.vue'
import { Sidebar } from '@/components/layout/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loading,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
