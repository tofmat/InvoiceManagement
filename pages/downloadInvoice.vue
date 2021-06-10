<template>
  <div class="">
    <div class="dashDefaultContent">
      <div class="row" v-if="invoice">
          <v-col cols="12" sm="12" class="">
            <div class="jobInfo">
              <div class="row">
                <v-col cols="12" sm="8" class="jobDesc">
                  <h3>Your Invoice has been generated</h3>
                  <p>Please download Invoice</p>
                  <p>Send to client</p>
                </v-col>
                <v-col cols="12" sm="4" class="jobControls">
                    <div class="flex alignCenter jobControl">
                      <i class="fas fa-dollar-sign mainColor"></i>
                      <p>Not Paid</p>
                    </div>
                    <div class="flex alignCenter jobControl">
                      <i class="fas fa-heart ashColor"></i>
                      <p>Send Invoice</p>
                    </div>
                    <div class="flex alignCenter jobControl">
                      <v-btn class="findBtn mt-5" @click="generateReport()">Download Invoice</v-btn>  
                    </div>
                </v-col>
              </div>
            </div>
          </v-col>
          <client-only >
            <vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="Generated Invoice"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="800px"

            @hasStartedGeneration="hasStartedGeneration()"
            @hasGenerated="hasGenerated($event)"
            ref="html2Pdf"
            >
                <section slot="pdf-content">                  
                  <h1>{{invoice.invoice[0].description}}</h1>
                  <p>{{invoice.invoice[0].sub_total}}</p>
                  <h1 class="mainColor">Customer Details</h1>
                  <p>Customer Name: {{invoice.invoice[0].customer_name}}</p>
                  <p>Customer Phone: {{invoice.invoice[0].customer_phone}}</p>
                  <p>Customer Phone: {{invoice.invoice[0].customer_address}}</p>
                  <h2 class="mainColor">Items</h2>
                  <p v-for="item in invoice.items" :key="item.id">{{item.description}} --> {{item.quatity}} --> {{item.rate}}</p>
                  <p></p>
                </section>
            </vue-html2pdf>
        </client-only>
      </div>
      <div v-else>
        <div>
          <h1 class="mainColor">
            No Invoice has been generated
          </h1>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueHtml2pdf from 'vue-html2pdf'
export default {
  layout: 'dashboard',
  methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
            this.$toasted.success('Invoice has been Downloaded')
        }
    },

    components: {
        VueHtml2pdf
    },
    computed: {
      ...mapGetters({
          invoice: 'invoice',
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