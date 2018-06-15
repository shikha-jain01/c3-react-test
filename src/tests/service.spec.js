import {getUserList} from '../service/getUserListsService';
global.fetch = require('jest-fetch-mock');

test('getUserList should invoke success callback function if response is successful', () => {
   
    const successMock = jest.fn();
    fetch.mockResponse(JSON.stringify(
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        }), {status: 200});

    return getUserList(successMock)
        .then(() => {
            expect(successMock.mock.calls.length).toBe(1);
            expect(successMock.mock.calls[0][0].id).toEqual(4);
            expect(successMock.mock.calls[0][0].first_name).toEqual('Eve');
        });
});