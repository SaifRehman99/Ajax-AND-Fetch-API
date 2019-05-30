class http {

    // GET HERE
    async get(url) {

        const resp = await fetch(url);

        const data = await resp.json();

        return data
    }

    // POST HERE
    async post(url, data) {

        const resp1 = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const data1 = await resp1.json();

        return data1;
    }



    // PUT HERE
    async put(url, data) {
        const resp2 = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const data2 = await resp2.json();

        return data2;

    }

    // DELETE HERE
    async delete(url) {

        const resp3 = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });

        const data3 = await 'Deleted..!';

        return data3
    }
}