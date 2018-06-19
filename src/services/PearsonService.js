import axios from 'axios'
export class HttpService {
    constructor() {
      this.getUsers = this.getUsers.bind(this);
    }
  
    getUsers() {
      return axios.get('https://reqres.in/api/users?page=1&per_page=10');
    }
  }