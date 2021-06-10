import axios from 'axios'

export const state = () => ({
  clients: [],
  invoices: []

})

export const getters = {
  clients(state) {
    return state.clients
  },
  invoices(state) {
    return state.invoices
  }
}

export const mutations = {
  SET_CLIENTS(state, data) {
    state.clients = data
  },
  SET_INVOICES(state, data) {
    state.invoices = data
  },
}

export const actions = {
  async signIn( { dispatch }, data ) {
    console.log(data.api_key);
    let response = await axios.post("https://api.invoice.ng/v1/authenticate", data);
    localStorage.setItem("token", response.data.token);
    // return dispatch("setUser", response.data.data.jwt);
  },
  async addClient( { dispatch }, data ) {
    console.log(data.names);
    let response = await axios.post("https://api.invoice.ng/v1/client/add", data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    console.log(response);
  },
  async addInvoice( { dispatch }, data ) {
    let response = await axios.post("https://api.invoice.ng/v1/invoice/add", data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    console.log(response);
  },
  async getClients( {commit}) {
    let response = await axios.get("https://api.invoice.ng/v1/client/all", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    commit ('SET_CLIENTS', response.data.data)
  },
  async getInvoices( {commit}) {
    let response = await axios.get("https://api.invoice.ng/v1/invoice/all", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    commit ('SET_INVOICES', response.data.data)
  }
}