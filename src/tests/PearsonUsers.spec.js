import React from "react";
import { shallow, mount } from "enzyme";
import { PearsonUsers } from "../PearsonUsers";
import { UserDetails } from "../UserDetails";
import sinon from 'sinon';

describe("PearsonUsers", () => {
  let component;
  let userComponent;
  const actions = {
    deleteUserEntry: sinon.spy(),
    updateUserList: sinon.spy()
  };  


  beforeEach(() => {
    component = mount(<PearsonUsers />);
    component.setState({ users: [
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }] });
      userComponent = mount(<UserDetails users={component.state().users} updateUserList={actions.updateUserList}/>);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('Should have entries of user', () => {
    expect(userComponent.find('.user_details').length).toEqual(1);
  });

  it('Should have a delete user option ', () => {
     expect(userComponent.find('.delete_button').text()).toEqual('Delete');
  });

  it('Should dispalay firstName and LastName of user ', () => {
    expect(userComponent.find('.name').text()).toEqual('Eve Holt');
  });

 it('Should have avatar of user ', () => {
     expect(component.state().users[0]).toHaveProperty('avatar');
});

it('Should have a delete option as clickable', () => {
  userComponent
      .find('.delete_button')
      .simulate('click');
   expect(actions.deleteUserEntry).toHaveBeenCalled;
});

});
