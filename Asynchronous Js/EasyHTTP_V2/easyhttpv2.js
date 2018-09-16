class EasyHTTP {

    // Make Http GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make Http POST request

    post(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make a PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // Make a HTTP DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => resolve('Resource deleted'))
                .catch(err => reject(err));
        });

    }

}