<template>
  <div>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Education></Education>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
  </div>
</template>

<script>

  import AboutMe from "../components/AboutMe";
  import Experience from "../components/Experience";
  import Education from "../components/Education";
  import Projects from "../components/Projects/Projects";
  import Skills from "../components/Skills";
  import Contact from "../components/Contact";
  import Footer from "../components/HomeFooter";
  export default {
    components: {
      AboutMe, Experience, Education, Projects, Skills, Contact,Footer
    },
    layout: "HomePageLayout"
  }
</script>

<style>

</style>
