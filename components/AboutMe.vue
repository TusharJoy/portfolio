<template>
  <div>
    <div id="lead">
      <div id="lead-content">
        <h1>Tushar Ghosh</h1>
        <h2>Software Engineer</h2>
        <a href="#" class="btn-rounded-white">Download Resume</a>
      </div>
      <!-- End #lead-content -->

      <div id="lead-overlay"></div>

      <div id="lead-down">
            <span  v-scroll-to="{ element: '#contact', duration: 4000 }" >
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
      </div>
      <!-- End #lead-down -->
    </div>
    <!-- End #lead -->

    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="heading">About Me</h2>
          </div>
          <div class="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet
              urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi
              dapibus porta quam laoreet placerat. Donec
              eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt
              libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra.
              Vivamus nunc justo, finibus
              ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat,
              mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End #about -->
  </div>
</template>

<script>
  export default {
    name: "AboutMe",
    methods: {
      topToBottom() {

      }
    }
  }
</script>

<style scoped>

</style>
