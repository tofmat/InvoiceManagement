<template>
  <div>
      <div>
          <div class="row noMargin">
              <v-col cols="12" sm="12" lg="9" class="">
                  <div class="dashMainContent">
                    <div>
                        <div class="row">
                            <v-col cols="12" sm="8" lg="6">
                                <div class="backWhite workHis">
                                    <h2 class="mb-4">Paid Invoices</h2>
                                    <hr class="fullWidth">
                                    <div class="mt-4"> 
                                        <div>
                                            <v-row>
                                                <v-col cols="12">
                                                    <h3 class="mainColor">{{allPaidInvoices | formatCurrency}}</h3>
                                                    <p class="textItalics mt-3">Total Amount of invoices paid and confirmed</p>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" lg="6">
                                <div class="backWhite workHis">
                                    <h2 class="mb-4">Outstanding</h2>
                                    <hr class="fullWidth">
                                    <div class="mt-4"> 
                                        <div>
                                            <v-row>
                                                <v-col cols="12">
                                                    <h3 class="mainColor">{{calculateNotPaidInvoice | formatCurrency}}</h3>
                                                    <p class="textItalics mt-3">Total Amount pending dibursemnet to you</p>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="row textCenter">
                            <v-col cols="6" sm="4">
                                <h3 class="mb-2">{{calculateTotalInvoice | formatCurrency}}</h3>
                                <p class="textMainColor">Total Invoices</p>
                            </v-col>
                            <v-col cols="6" sm="4">
                                <h3 class="mb-2">{{invoices.length}}</h3>
                                <p class="textMainColor">Invoices Sent</p>
                            </v-col>
                            <v-col cols="6" sm="4">
                                <h3 class="mb-2">{{invoices.length}}</h3>
                                <p class="textMainColor">Pending Invoices</p>
                            </v-col>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="backWhite workHis">
                            <h2 class="mb-4">Past Invoices</h2>
                            <hr class="fullWidth">
                            <div class="mt-4"> 
                                <div>
                                    <v-row v-for="invoice in invoices" :key="invoice.id">
                                        <v-col cols="12" sm="8">
                                            <h3 class="mainColor">{{invoice.description}}</h3>
                                            <p class="textItalics">{{invoice.created_at}}</p>
                                        </v-col>
                                        <v-col cols="12" sm="4" class="rightAlign">
                                            <h2>Status</h2>
                                            <h4>{{invoice.payment_status}}</h4>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </v-col>
              <v-col cols="12" sm="12" lg="3" class="rightSideDash">
                  <div>
                        <v-btn class="myBtn findBtn fullWidth" to="/addinvoice">
                            Generate Invoice
                        </v-btn>
                        <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-on="on" v-bind="attrs" class="myBtn findBtn fullWidth mt-5" to="#">
                                    Add Client
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="text-h5">Add Client</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container>
                                    <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                        v-model="clientData.names"
                                        label="Legal first name *"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="clientData.email"
                                        label="Email *"
                                        type="email"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="clientData.phone"
                                        label="Phone Number *"
                                        type="number"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="clientData.address"
                                        label="Address *"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Close
                                </v-btn>
                                <v-btn class="myBtn findBtn" to="#" @click="addUser()">
                                    Add Client
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <p class="mainColor mt-4 textCenter">View my invoice as others see it</p>
                  </div>
                  <hr class="fullWidth my-5"> 
                  <div>
                      <h3 class="mb-3">Availability</h3>
                      <p>Available as needed</p>
                  </div>
                  <hr class="fullWidth my-5"> 
                  <div>
                    <h3>Invoice Link</h3>
                    <v-btn class="workBtn fullWidth my-3" to="#">
                        https://www.invoice
                    </v-btn>
                    <p class="mainColor">Copy link</p>
                  </div>
                  <hr class="fullWidth my-5"> 
                  <div>
                      <h3 class="mb-3">Monthly Revenue</h3>
                      <p>May - $100,000</p>
                      <p>June - $50,000</p>
                  </div>
                  <button @click="totalNotPaid()"> Test </button>
              </v-col>
          </div>
          
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from "vuex";
export default {
    
    layout: 'dashboard',
    data: () => ({
      dialog: false,
      clientData: {
          names: '',
          email: '',
          phone: '',
          address: ''
      },
      totalInvoice: '',
      NotPaidArray: []
    }),
    methods: {
        ...mapActions({
            addClient: "addClient",
            getClients: "getClients"
        }),
        addUser(){
            this.loading = true;
            this.addClient(this.clientData)
            .then(() => {
                console.log("Done");
                this.dialog = false
                this.$toasted.success('Sucessfully Added Client')
                this.clientData = ""
            })
            .catch(e => {
                console.log(e);
                this.loading = false;
                this.$toasted.error('There was an error please try again')
            });
        },
        calculateTotalInvoice() {
            var addAll = this.invoices.reduce((acc, item) => acc + item.total, 0);
            console.log(addAll);
        },
        totalNotPaid() {
            console.log(this.totalNotPaidInvoiceAmount);
            
        }
    },
    async mounted() {
        await this.getClients()
    },
    computed: {
      ...mapGetters({
          invoices: 'invoices',
          totalInvoiceAmount: 'totalInvoiceAmount',
          totalNotPaidInvoiceAmount: 'totalNotPaidInvoiceAmount',
          totalPaidInvoices: 'totalPaidInvoices'
      }),
      calculateTotalInvoice() {
        var addAll = this.invoices.reduce((acc, item) => acc + item.total, 0);
        console.log(addAll);
        return addAll
      },
      calculateNotPaidInvoice() {
        var addAll = this.totalNotPaidInvoiceAmount.reduce((acc, item) => acc + item.total, 0);
        console.log(addAll);
        return addAll
        },
        allPaidInvoices() {
        var addAll = this.totalPaidInvoices.reduce((acc, item) => acc + item.total, 0);
        console.log(addAll);
        return addAll
        }
    },
    filters : {
        formatCurrency: function (value) {
        if (isNaN(value)) {
            return value
        } else {
            value = parseFloat(value.toString().replace(/,/g, ""))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return value
        }
        },
        encode: function (value) {
            value = window.btoa(value)
            return value
        }
    }
}
</script>

<style>
.textMainColor{
    color: #707070;
}
.jobStat .percent {
    width: 70%;
    height: 10px;
    background-color: #00E68A;
    border-radius: 20px;
    margin-top: 10px;
}
.colorBlue{
    color: blue;
}
.rightSideDash{
    background-color: white;
    padding: 50px 30px;
}
.dashMainContent{
    margin: 0px 10px 20px 120px;
}
.profilePicture img{
    width: 200px;
}
.nameAndLocation{
    margin: 0 !important;
}
.lca i {
    margin-right: 10px;
}
.backWhite{
    background-color: white;
}
.workHis{
    padding: 30px;
    border-radius: 20px;
}
.workBtn{
    padding: 20px !important;
    background-color: transparent !important;
    border: #00E68A solid 1px;
    color: #00E68A !important;
    box-shadow: none !important;
}
.findBtn{
    padding: 20px !important;
    background-color: #00E68A !important;
    color: white !important;
    box-shadow: none !important;
    margin-right: 10px;
}
@media(max-width: 1000px){
  .dashMainContent{
      margin: 1px 1px 20px 1px;
  }
}
@media(max-width: 600px){
  .profilePicture img {
      width: 150px;
  }
}
</style>