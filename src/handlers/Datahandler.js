// eslint-disable-next-line no-unused-vars
import { http } from './http'
export const baseURL = import.meta.env.VITE_APP_API
export const gptURL = import.meta.env.VITE_APP_GPT

import ProductService from '../service/ProductService'

const MockService = new ProductService

/** Base endpoints */
//GET

export const fetchCompanies = (params) => {
    if (process.env.NODE_ENV === 'development') {
      return MockService.getCompanies()
    } else {
      return http.get(`${baseURL}/company/all?page=${params.page}&size=${params.size}&sort=`).then(({ data }) => data)
    }
  }
  export const fetchGreeting = (params) => {

      return http.get(`http://localhost:8080/items`).then(({ data }) => data)
    
  }


//POST
export const registerUser = (params) => {
    return http.post(`/hk-web/users/register?owner=${params.owner}`, params.postBody).then(({ data }) => data)
}