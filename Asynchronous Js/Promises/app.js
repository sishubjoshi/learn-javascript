const posts = [
    { title: 'post one', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi debitis nemo earum dolore quis necessitatibus repellendus recusandae nostrum? Voluptate.' },
    { title: 'post two', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi debitis nemo earum dolore quis necessitatibus repellendus recusandae nostrum? Voluptate.' }
]




function createPost(post) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            const error = false; // set it to false to use reject;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }

        }, 500);
    });

}



function getPosts() {
    setTimeout(function() {
        let output = '';

        posts.forEach(function(post) {
            output += `
            <ul>
            <li>${post.title}</li>
            <p>${post.body}</p>
            </ul>
            `
        });
        document.querySelector('.posts').innerHTML = output;
    }, 250);
}


createPost({ title: 'post three', body: 'Lorem ipsum dolor sit amet consectetur\
 adipisicing elit. Atque modi debitis nemo earum dolore quis\
  necessitatibus repellendus recusandae nostrum? Voluptate.' })
    .then(getPosts)
    .catch(function(err) {
        document.body.innerHTML = err;
    })