import axios from 'axios'

export const http = axios.create(
  {
    timeout: 40000,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
      localStorage.setItem("sessionExpired", false);
      if(status == 511 && localStorage.getItem("sessionExpired") == "false"){
        localStorage.setItem("sessionExpired", true);

        setTimeout(() => {
          window.location = `${window.location.protocol}://${window.location.hostname}/hk-web/logout`
          localStorage.setItem("sessionExpired", false);

        }, 5000);
      }
      return status >= 200 && status < 300;
  },
  }
)
