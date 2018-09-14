document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    //  OPEN
    xhr.open('GET', 'data.txt', true);

    console.log('Ready state', xhr.readyState);


    xhr.onload = function() {
        if (this.status === 200) {
            console.log('Ready state', xhr.readyState);
            // console.log(this.responseText);

            document.getElementById('content').innerHTML = `<h3>
            ${this.responseText}</h3>`
        }
    }

    // optional - used for spinners/loaders
    xhr.onprogress = function() {
        console.log('Ready state', xhr.readyState);
    }


    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //          console.log('Ready state', xhr.readyState);
    //         console.log(this.responseText);

    //     }
    // }

    xhr.onerror = function() {
        console.log('Request error...');
    }


    xhr.send();

    /**
     * 0: request not initialized
     * 1: server connection established
     * 2: request recieved
     * 3: processing request
     * 4: request finished and response is ready
     */
}


// HTTP STATUSES
//  200: OK
// 403: FORBIDDEN
// 404: NOT FOUND