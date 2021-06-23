<template>
  <div>
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
          <tr>
            <td>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="val.description"
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
                  v-model="val.quantity"
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
                  v-model="val.rate"
                  required
                ></v-text-field>
              </v-col>
            </td>
            <td>
              {{gross_amount}}
            </td>
            <td>
              <i class="fas fa-trash"></i>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ['initialItem'],
  data() {
    return {
      val: this.initialItem
    }
  },
  computed: {
    gross_amount() {
        const rate = this.val.rate
        const quantity = this.val.quantity

        const net_amount = rate * quantity

        // this.$emit('updatePrice', this.item)
        return net_amount
    }
  },
  methods: {
    // removeItem(val) {
    // this.invoice.items = this.invoice.items.filter(ite => {
    //   return ite.val.item_num !== val.item_num
    // })
  }
  }
</script>

<style>

</style>