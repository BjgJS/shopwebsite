import superagent from 'superagent';

const API_ROOT = 'http://localhost:9000/api';

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};

const responseBody = res => res.body;
const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const Categories = {
    all: (flatten = false) => {
        let url = '/categories';
        if (flatten)
            url += '?mode=flatten';
        return requests.get(url);
    },
    update: (slug, category) => {
        return requests.put(`/categories/${slug}`, category);
    }
};

export default {
    Categories,
    setToken: _token => token = _token
};
