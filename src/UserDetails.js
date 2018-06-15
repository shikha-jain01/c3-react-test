import React, { Component } from "react";
import './PearsonUser.css';

import {getUserList} from './service/getUserListsService';


export class UserDetails extends Component {

deleteUserEntry(userforDeletion){
    let userList = this.props.users;
    let updatedUserList= [];

    for(let user of userList){
      if(user.id !== userforDeletion.id){
        updatedUserList.push(user);
      }
    }
   this.props.updateUserList(updatedUserList);
}

 
 render() {
   const  {users} = this.props;
    const user = users.map(user =>(
      <div className='user_details' key={user.id}>
      <img
          className="avatar"
          src={user.avatar}
          height="80"
          width="80"
          alt="Avatar"
         />
      <div className='name'>{user.first_name} {user.last_name}</div>
      
      <div className='delete_button' onClick={() => this.deleteUserEntry(user)}>Delete</div>
      
      </div>
    ))
    
    return (
        <div className='display__image'>{user}</div> 
       );
  }
}
