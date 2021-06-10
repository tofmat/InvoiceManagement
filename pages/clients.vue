<template>
  <div>
    <div class="dashDefaultContent">
      <div class="row">
          <v-col cols="12" sm="12" class="">
            <div class="jobInfo" v-for="client in clients" :key="client.id">
              <div class="row">
                <v-col cols="12" sm="8" class="jobDesc">
                  <h3>{{client.names}}</h3>
                  <p>{{client.address}}</p>
                  <p>{{client.phone}}</p>
                  <small>Addedd on {{client.added_on}}</small>
                </v-col>
                <v-col cols="12" sm="4" class="jobControls">
                    <div class="flex alignCenter jobControl">
                      <i class="fas fa-dollar-sign mainColor"></i>
                      <p>Paid</p>
                    </div>
                    <div class="flex alignCenter jobControl">
                      <i class="far fa-folder blueColor"></i>
                      <p>10000</p>
                    </div>
                    <div class="flex alignCenter jobControl">
                      <i class="fas fa-heart ashColor"></i>
                      <p>Send Invoice</p>
                    </div>
                    <div class="flex alignCenter jobControl">
                      <v-btn class="findBtn mt-5" to="job">Delete Client</v-btn>  
                    </div>
                </v-col>
              </div>
            </div>
          </v-col>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
layout: 'dashboard',
computed: {
  ...mapGetters({
      clients: 'clients',
  })
},
}
</script>

<style>
.dashDef {
  padding-top: 0 !important;
}
.dashSlate {
  background-color: white;
  padding: 2em;
  margin-bottom: 30px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
.dashSearch h3{
  margin-bottom: 20px;
}
.dashSearch input{
  border: solid 1px #E0E0E0;
  border-radius: 20px;
  padding: 3px;
}
.jobControls{
  background-color: #EBFFF7;
}
.jobDesc{
  padding: 2em;
}
.jobDesc h3 {
  padding-bottom: 15px; 
}
.jobControls{
  padding: 2em;
}
.jobControls p {
  margin: 0;
}
.jobControls i {
  margin-right: 10px;
  /* color: #00E68A; */
}
.jobControl{
  margin-bottom: 10px;
}
.catCheck {
  margin-bottom: 7px;
}
.catCheck p {
  margin: 0;
}
.catCheck input {
  margin-right: 10px;
}
.jobInfo{
  background-color: white;
  margin-bottom: 30px;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
}
</style>