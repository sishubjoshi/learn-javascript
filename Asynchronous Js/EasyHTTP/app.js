const http = new easyHTTP;


//  GET posts

// const posts = http.get('http://jsonplaceholder.typicode.com/posts',
//     function(err, response) {
//         if (err) {
//             console.log(err);

//         } else {
//             console.log(response);

//         }
//     });

//  Get single post
// http.get('http://jsonplaceholder.typicode.com/posts/1',
//     function(err, response) {
//         if (err) {
//             console.log(err);

//         } else {
//             console.log(response);

//         }
//     });


// POST request

const data = {
    title: 'custom post',
    body: 'this is a custom post'
};


// create post

// http.post('http://jsonplaceholder.typicode.com/posts/', data,
//     function(err, response) {
//         if (err) {
//             console.log(err);

//         } else {
//             console.log(response);

//         }
//     });



// UPDATE POST

// http.put('http://jsonplaceholder.typicode.com/posts/5', data, function(err, response) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log(response);

//     }
// });

// DELETE POST
http.delete('http://jsonplaceholder.typicode.com/posts/1',
    function(err, response) {
        if (err) {
            console.log(err);

        } else {
            console.log(response);

        }
    });