import axios from 'axios'

// const instance = axios.get('http://sps.inmarcopolo.com/api/orders/list', {
//  headers: {
//    "Authkey":'123456'
//  }
// })

const instance = axios.create({
    baseURL: 'http://sps.inmarcopolo.com/api/orders/list',
    timeout: 1000000,
    headers: {'Authkey':'123456'}
  });

export default instance;