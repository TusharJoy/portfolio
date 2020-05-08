<template>
  <div id="projects" class="background-alt">
    <h2 class="heading">Projects</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <project></project>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <project></project>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Project from "./Project";

  export default {
    name: "Projects",
    components: {Project}
  }
</script>

<style scoped>
  #projects {
    padding: 50px 15px;
    border-bottom: 1px solid #dcd9d9;
    text-align: center;
  }
</style>
