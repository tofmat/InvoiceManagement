<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <div class="row">
            <v-col cols="12" sm="12">
              <div class="jobDetailsTexts">
                <h3 class="mb-5 mainColor">Generate Invoice</h3>
              </div>
              <v-form v-model="valid">
                <v-row class="justifyBetween">
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="invoice.invoice_no"
                        label="Invoice Number (#)"
                        placeholder="121"
                        required>
                        <v-icon
                          slot="prepend"
                          color="grey"
                        >
                          mdi-plus
                        </v-icon>
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="as"
                        label="Invoice Name"
                        required
                      ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-textarea
                      v-model="invoice.description"
                      label="Project Describtion"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                      hint="Describe project scope"
                    ></v-textarea>
                  </v-col>
                </v-row>


                <v-row>
                    <v-col
                      class="d-flex"
                      cols="12"
                      md=4
                    >
                      <v-select
                        v-model="invoice.client"
                        :items="clients"
                        item-text="names"
                        item-value="id"
                        label="Client"
                      ></v-select>
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="invoice.tax_rate"
                        :counter="2"
                        label="Tax Rate (%)"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-select
                        v-model="invoice.currency"
                        :items="currency"
                        label="Currency"
                      ></v-select>
                    </v-col>
                </v-row>

                <div class="jobDetailsTexts">
                  <h3 class="mb-5 mainColor">Add Items</h3>
                </div>
                  <ItemForm
                      v-for="item in invoice.items"
                      v-bind:key="item.item_num"
                      v-bind:initialItem="item"
                  >
                  </ItemForm>

                  <div class="mt-5 ">
                    <v-btn class="findBtn" to="#" @click="addItem()">Add Item</v-btn>
                  </div>
              </v-form>

              <div>
                <h3 class="mt-5">Total Price: N100,000</h3>
              </div>
            </v-col>
          </div>
        </div>
        <div class="mt-10">          
          <div class="mt-10 centerflex ">
            <v-btn class="findBtn" to="#" @click="addIt()">Generate Invoice</v-btn>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemForm from '@/components/ItemForm.vue'
export default {
components: {
  ItemForm
},
layout: 'dashboard',
data: () => ({
  currency: ['USD', 'NGN', 'GBP', 'EUR'],
  invoice: {
    client: '645236872886793',
    invoice_no: '23',
    payment_status: "Not Paid",
    description: 'ascasfeas',
    currency: 'USD',
    tax_rate: 10,
    items: [
      {
        description: 'acdwrcar',
        quantity: 1,
        rate: 2000,
        item_num: 0
      }
    ]
  }
}),
methods: {
  ...mapActions({
      addInvoice: "addInvoice",
      getClients: "getClients"
  }),
  addItem() {
    this.invoice.items.push({
        item_num: this.invoice.items.length,
        description: '',
        rate: 0,
        quantity: 1,
    })
  },
  removeItem(item) {
    this.invoice.items = this.invoice.items.filter(ite => {
      return ite.item.item_num !== item.item_num
    })
  },
  addIt(){
    this.loading = true;
    this.addInvoice(this.invoice)
    .then(() => {
        console.log("Done");
        this.$toasted.success('Sucessfully Added Invoice')
        this.clientData = ""
    })
    .catch(e => {
        console.log(e);
        this.loading = false;
    });
  }

},
computed: {
  ...mapGetters({
      clients: 'clients',
  })
},
async mounted() {
    await this.getClients()
}
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