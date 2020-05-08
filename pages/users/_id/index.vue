<template>
  <h1>This is Single User with ID: {{$route.params.id}}</h1>
</template>

<script>
  export default {
      validate ({ params }) {
          // Must be a number
          console.log(params);
          return /^\d+$/.test(params.id)
      }
  }
</script>
