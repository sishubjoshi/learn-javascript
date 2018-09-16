class EasyHTTP {

    // Make Http GET request
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();

        return resData;

    }

    // Make Http POST request

    async post(url) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();

        return resData;

    }

    // Make a PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();

        return resData;

    }

    // Make a HTTP DELETE request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = await 'Resource Deleted';

        return resData;

    }

}