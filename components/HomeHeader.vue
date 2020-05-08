<template>
  <div>
    <div id="mobile-menu-open" class="shadow-large">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <!-- End #mobile-menu-toggle -->
    <header>
      <div id="mobile-menu-close">
        <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <ul id="menu" class="shadow">
        <li>
          <a v-scroll-to="{ element: '#about', duration: 3000 }">About</a>
        </li>
        <li>
          <a v-scroll-to="{ element: '#experience', duration: 3000 }">Experience</a>
        </li>
        <li>
          <a v-scroll-to="{ element: '#education', duration: 3000 }">Education</a>
        </li>
        <li>
          <a v-scroll-to="{ element: '#projects', duration: 3000 }">Projects</a>
        </li>
        <li>
          <a v-scroll-to="{ element: '#skills', duration: 3000 }">Skills</a>
        </li>
        <li>
          <a v-scroll-to="{ element: '#contact', duration: 3000 }">Contact</a>
        </li>
      </ul>
    </header>
    <!-- End header -->
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
