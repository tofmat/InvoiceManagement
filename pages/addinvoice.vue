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
                        v-model="asad"
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
                        :items="items"
                        label="Client"
                      ></v-select>
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="lastname"
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
                        :currency="currency"
                        label="Currency"
                      ></v-select>
                    </v-col>
                </v-row>

                <div class="jobDetailsTexts">
                  <h3 class="mb-5 mainColor">Add Items</h3>
                </div>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Description
                          </th>
                          <th class="text-left">
                            Quantity
                          </th>
                          <th class="text-left">
                            Unit Price
                          </th>
                          <th class="text-left">
                            Amount
                          </th>
                          <th class="text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in invoice.items" :key="item.item_num">
                          <td>
                            <v-col
                              cols="12"
                            >
                              <v-text-field
                                v-model="Item"
                                placeholder="Item Description"
                                required
                              ></v-text-field>
                            </v-col>
                          </td>
                          <td>
                            <v-col
                              cols="12"
                            >
                              <v-text-field
                                placeholder="Item Quantity"
                                v-model="Item"
                                required
                              ></v-text-field>
                            </v-col>
                          </td>
                          <td>
                            <v-col
                              cols="12"
                            >
                              <v-text-field
                                placeholder="Price per unit"
                                v-model="Item"
                                required
                              ></v-text-field>
                            </v-col>
                          </td>
                          <td>
                            1000
                          </td>
                          <td>
                            <i class="fas fa-trash" @click="removeItem(item)"></i>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
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
            <v-btn class="findBtn" to="#">Generate Invoice</v-btn>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
layout: 'dashboard',
data: () => ({
  items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  invoice: {
    items: [
      {
        item_num: 0,
        title: '',
        unit_price: '',
        quantity: 1,
        vat_rate: 0,
        net_amount: 0
      }
    ]
  }
}),
methods: {
  addItem() {
    this.invoice.items.push({
        item_num: this.invoice.items.length,
        title: '',
        unit_price: '',
        quantity: 1,
        vat_rate: 0,
        net_amount: 0
    })
  },
  removeItem(item) {
    this.invoice.items = this.invoice.items.filter(ite => {
      return ite.item.item_num !== item.item_num
    })
  }
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