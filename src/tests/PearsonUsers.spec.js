import { PearsonUsers } from "../PearsonUsers";
import { PearsonUser } from "../PearsonUser";

describe("PearsonUsers", () => {
    let component;
    let user = {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
    const mockFn = jest.fn();
    mockFn(PearsonUsers.prototype.deleteUser);

  beforeEach(() => {
      component = mount(<PearsonUsers />);
    });
    
  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('calls componentDidMount', () => {
      sinon.spy(PearsonUsers.prototype, 'componentDidMount');
      const wrapper = mount(<PearsonUsers />);
      expect(PearsonUsers.prototype.componentDidMount.calledOnce).toEqual(true);
  });
  
  it('simulates delete click event', () => {
      const onButtonClick = sinon.spy();
      const spy = sinon.spy(PearsonUsers.prototype, 'deleteUser')
      const wrapper = shallow(<PearsonUser user={user} deleteUser={onButtonClick} />)
      wrapper.find('.delete-user').simulate('onclick');
      expect(wrapper.find('.delete-user').exists()).toBe(true)
      expect(mockFn).toHaveBeenCalled();
  });
});
