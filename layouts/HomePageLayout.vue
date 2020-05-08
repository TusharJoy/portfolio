<template>
  <div>
    <home-header></home-header>
    <nuxt/>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeHeader from "../components/HomeHeader";
  import HomeFooter from "../components/HomeFooter";

  export default {
    name: "HomePageLayout",
    components: {
      HomeHeader,
      HomeFooter
    },
    head: {
      script: [
        {src: '/js/scripts.js'},
      ],
      link: [
        {rel: 'stylesheet', src: '/css/styles.css'}
      ]
    },
  }
</script>

<style scoped>

</style>
