<template>
  <div>
    <form @submit.prevent="submit">
      Username
      <input type="text" placeholder="Login" />
      Email
      <input type="email" placeholder="Email" />
      <input type="submit" />

    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      auth: {
        api_key: "78c544f6235ffc8f7ad7c717dfd72d27",
      }
    };
  },
  methods: {
  ...mapActions({
    signIn: "signIn"
  }),
  submit() {
    console.log("hry");
    console.log(this.auth);
    
    this.loading = true;
    this.signIn(this.auth)
      .then(() => {
        this.$router.push("/dashboard");
      })
      .catch(e => {
        console.log(e);
        this.loading = false;
      });
  }
}
}
</script>

<style>

</style>