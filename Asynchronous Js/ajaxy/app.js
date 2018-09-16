const http = new easyHTTP;

// UI Vars
document.querySelector('.button1').addEventListener('click', getPosts);
document.querySelector('.button2').addEventListener('click', getComments);

// Get Posts
function getPosts() {

    http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
        if (err) {
            document.querySelector('.get-posts').innerHTML = err;
        } else {
            let out = parseContent(posts);

            document.querySelector('.get-posts').innerHTML = out;
        }
    });
}


// Get Comments

function getComments() {
    http.get('https://jsonplaceholder.typicode.com/comments', function(err, posts) {
        if (err) {
            document.querySelector('.get-comments').innerHTML = err;
        } else {
            let out = parseContent(posts);
            document.querySelector('.get-comments').innerHTML = out;
        }
    });
}


// parse

function parseContent(posts) {
    let output = JSON.parse(posts);
    let out = '';
    output.forEach(function(post) {
        out += `
                    <div>
                    <ul>
                    <li>title:${post.body}</li>
                    </ul>
                    </div>
                `;
    });
    return out;
}