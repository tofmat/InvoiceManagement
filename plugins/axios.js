export default function ({ $axios }) {
  $axios.setBaseUrl('https://api.invoice.ng/v1/')

  const token = localStorage.getItem("token")
  $axios.setToken(token, 'Bearer')

  $axios.onResponse((response) => {
      if (response.status === 404) {
          console.log('Oh no it returned a 404')
      }
  })

}
