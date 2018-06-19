import React, { Component } from "react";
import { PearsonUser } from './PearsonUser';
import { HttpService } from './services/PearsonService';

export class PearsonUsers extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this)
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
            ],
            isLoading: false
        };
    }

    componentDidMount(){
        let service = new HttpService();
        service.getUsers()
          .then(list => {
              var dynamicTableData = []
              dynamicTableData = list.data.data
              let newArray = [...this.state.users, ...dynamicTableData]
              let uniqueUsers = this.removeDuplicates(newArray)
              this.setState({ users: uniqueUsers, isLoading: true })
              
          })
    }
    deleteUser(event) {
        var array = [...this.state.users]
        var index = array.filter(item => item.id.toString() !== event.target.id)
        this.setState({ users: index })
    }
    removeDuplicates(users) {
        return users.filter((s1, pos, arr) => arr.findIndex((s2) => s2.id === s1.id) === pos)
    }
    displayUsers() {
        return (
            <table className="base">
                <tbody>
                    <tr>
                        {this.state.users.map(d => (
                            <PearsonUser user={d} deleteUser={this.deleteUser} key={d.id} />
                    ))}
                    </tr>
                </tbody>
            </table>)
    }
    render() {
        return (
            <div className="pearson-users">
                <h1 className="heading">Pearson User Management</h1>
                {this.state.isLoading === true && this.displayUsers()}
      </div>
    );
  }
}
