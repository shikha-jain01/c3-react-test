import React, { Component } from "react";

export class PearsonUser extends Component {
    render() {
        return (
                <td>
                <div className="image-align"><img className="round-image" src={this.props.user && this.props.user.avatar} alt="" /></div>
                <div className="users-name">
                    <div className="name-align">{this.props.user && this.props.user.first_name} {this.props.user && this.props.user.last_name}</div>
                </div>
                <div id={this.props.user && this.props.user.id} className='delete-user' onClick={this.props.deleteUser} type="button">Delete</div>
                </td>
    )
  }
}
