<template>
  <div>
    <nuxt-child/>
    <h1>This is User</h1>
    <input v-model="userID" type="text" placeholder="Enter User ID">
    <button @click="loadUser"> Load User</button>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                userID: ''
            };
        },
        methods: {
            loadUser() {
                let url = '/users/'+this.userID ;
                this.$router.push(url);
            }
        }
    }
</script>
