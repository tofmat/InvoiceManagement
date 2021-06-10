<template>
  <div class="fullPage centerflex">
    <div class="headFirst">
      <h1>Invoice Management</h1>
      <v-form class="fineForm">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First Name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <div class="mt-5 ">
        <v-btn class="findBtn" to="#" @click="submit()">Login</v-btn>
      </div>
    </div>
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
        this.$toasted.success('You are logged in')
      })
      .catch(e => {
        console.log(e);
        this.$toasted.error('There was an error logging in..')
        this.loading = false;
      });
  }
}
}
</script>

<style>
.fineForm .theme--light.v-input input{
  color: #00E68A !important;
  border-bottom: solid 1px #00E68a;
}
.fineForm {
  color: #00E68A !important;
}
.fineForm .theme--light.v-label {
  color: #00E68a;
}
.fullPage {
  height: 100vh;
  background-color: black;
  color: #00E68A;
}
.headFirst h1 {
  font-size: 50px;
}
</style>