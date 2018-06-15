import React, { Component } from "react";
import './PearsonUser.css';
import {UserDetails} from './UserDetails';
import {getUserList} from './service/getUserListsService';

export class PearsonUsers extends Component {
  
  constructor(props) {
    super(props);
    this.removeDuplicates = this.removeDuplicates.bind(this);
    this.updateUserList = this.updateUserList.bind(this);
    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount(){
    let userList = this.state.users;
    getUserList(data => {
      userList = userList.concat(data.data);
      userList =  this.removeDuplicates(userList,'id');
      this.setState({users :userList});
   })
 
  }

  removeDuplicates( arr, prop ) {
    let obj = {};
    let newArr = [];
    
    for ( let i = 0, len = arr.length; i < len; i++ ){
      if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
    }
    
    for ( let key in obj ) newArr.push(obj[key]);
    
    return newArr;
  }

  updateUserList(userList){
    this.setState({users: userList});
  }
  
 
  render() {
    const users = this.state.users;
    return (
      <div className="pearson-users">
        <h1 className='heading'>Pearson User Management</h1>
        <div className= 'users__conatiner'>
        <UserDetails users={users} updateUserList= {this.updateUserList} />
        </div>
      </div>
    );
  }
}
