const URL = 'https://reqres.in/api/users?page=1&per_page=10';

export const getUserList = onSuccess => {
    return fetch(URL)
        .then(response => response.json())
        .then(data => onSuccess(data));
};