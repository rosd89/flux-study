export default function ({ $axios, redirect }) {
  // $axios.defaults.maxRedirects = 0
  // $axios.defaults.validateStatus = status => status >= 200 && status < 400

  $axios.onError(error => {
    const { response } = error
    const { data } = response
    if (response.status === 401) {
      if (data && data.location) {
        redirect(data.location)
      }
    }
  })
}
