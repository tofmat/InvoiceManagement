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
                  v-model="item.description"
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
                  v-model="item.quantity"
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
                  v-model="item.rate"
                  required
                ></v-text-field>
              </v-col>
            </td>
            <td>
              {{gross_amount}}
            </td>
            <td>
              <i class="fas fa-trash" @click="removeItem(item)"></i>
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
      item: this.initialItem
    }
  },
  computed: {
    gross_amount() {
        const rate = this.item.rate
        const quantity = this.item.quantity

        const net_amount = rate * quantity

        // this.$emit('updatePrice', this.item)
        return net_amount
    }
}
}
</script>

<style>

</style>