import { PearsonUser } from "../PearsonUser";

describe("Pearson User Component", () => {
  let component;
  let user = {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }

  beforeEach(() => {
      component = shallow(<PearsonUser user={user} />);
  });

  it('should render name', () => {
      expect(component.find('users-name').exists())
  })

  it('should have first name and last name', () => {
      expect(component.find(".name-align").text()).toEqual('Tracey Ramos')
  });
    
  it('should render avatar', () => {
      expect(component.find('img').exists()).toBe(true)
  })

  it('should have delete option', () => {
      expect(component.find(".delete-user").text()).toEqual('Delete');
  });

});
