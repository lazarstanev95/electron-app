import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
//axios.defaults.headers.common['Cookie'] = '_ga=GA1.2.665526998.1615921504; _gid=GA1.2.1136839929.1615921504; signed_in=lstanev';

class DataService {
    static get(url, options) {
        return axios
            .get(url, options)
            .catch(this.handlerError)
    }

    static handlerError(error) {
        if (error.response?.data) {
            throw error;
        }
    }
}

export default DataService