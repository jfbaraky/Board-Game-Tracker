import axios from 'axios';

let instance = null;
let baseURL;

class Http {
    static config(isDev) {
        if (isDev) {
            baseURL = 'https://bg-production.herokuapp.com/api/'; // Using only prod for now
            instance = axios.create({
                baseURL,
                headers: {'content-type': 'application/json'}
            });
        } else {
            baseURL = 'https://bg-production.herokuapp.com/api/';
            instance = axios.create({
                baseURL,
                headers: {'content-type': 'application/json'}
            });
        }
    }

    static get(url) {
        console.log('GET - ' + baseURL + url);
        if (instance) {
            return instance.get(url).then(response => {
                console.log('response > ', response);
                return response;
            });
        } else {
            return null;
        }
    };

    static post(url, body) {
        console.log('POST - ' + baseURL + url);
        if (instance) {
            return instance.post(url, body).then(response => {
                console.log('response > ', response);
                return response;
            });
        } else {
            return null;
        }
    };

    static put(url, body) {
        console.log('PUT - ' + baseURL + url);
        if (instance) {
            return instance.put(url, body).then(response => {
                console.log('response > ', response);
                return response;
            });
        } else {
            return null;
        }
    };
}

export default Http;