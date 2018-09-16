const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// User DAta
const data = {
    name: 'joshi',
    username: 'sishub',
    email: 'sishub@awesome.com'
}

// create post
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Update post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// DELETE user
http.delete('https://jsonplaceholder.typicode.com/users/3', )
    .then(data => console.log(data))
    .catch(err => console.log(err));