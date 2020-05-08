<template>
  <div class="project shadow-large">
    <div class="project-image">
      <img src="images/project.jpg">
    </div>
    <!-- End .project-image -->
    <div class="project-info">
      <h3>Project Name Here</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna.
        Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta
        quam laoreet placerat.
      </p>
      <a href="#">View Project</a>
    </div>
    <!-- End .project-info -->
  </div>
</template>

<script>
  export default {
    name: "Project"
  }
</script>

<style scoped>
  .project {
    position: relative;
    max-width: 900px;
    margin: 0 auto 30px auto;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
</style>
