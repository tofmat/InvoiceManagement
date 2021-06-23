<template>
  <div>
    <div class="dashDefaultContent">
      <p>Total Amount: {{invoices[0].total}}</p>
      <div class="">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
          ></v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: 'dashboard',
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Client',
            align: 'start',
            filterable: false,
            value: 'customer_name',
          },
          { text: 'Amount', value: 'sub_total' },
          { text: 'Invoice Date', value: 'created_at' },
          { text: 'Due Date', value: 'due_date' },
          { text: 'Is Paid', value: 'payment_status' },
        ],
        // totalAmountInvoice: this.invoices[0].total
      }
    },
    computed: {
      ...mapGetters({
          invoices: 'invoices',
      })
    },
}
</script>

<style>
.jobI {
  padding: 2em;
  background-color: white;
  border-radius: 10px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
.jobTips p{
  margin: 0;
}
.jobTips i{
  margin-right: 10px;
  color: #00E68A;
}
.jobFav i{
  margin-right: 20px;
}
.jobClientPrice{
  margin-right: 20px;
}
.textArea{
  border: solid 1px #CACACA;
  width: 100%;
  padding: 10px;
}
.attachFile p {
  margin: 0;
}
.attachFile i {
  margin-right: 10px;
  color: #00E68A;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 15px 20px 15px;
  }
}
</style>