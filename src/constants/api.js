function isFormData(obj) {
    try {
        if (typeof obj !== 'object') {
            return false;
        }

        return typeof obj.append === 'function';
    } catch {
        return false;
    }
}

function instance(url) {
    const _this = this;
    let headerToken = '';
    let headerLocale = '';

    function apiRequest(method, path, data, options = {}) {
        const headers = Object.assign(
            {
                Accept: 'application/json',
            },
            options.headers || {},
        );

        if (headerLocale) {
            headers['Locale'] = headerLocale;
        }

        if (headerToken && !headers.Authorization) {
            headers['Authorization'] = 'Bearer ' + headerToken;
        }
        const params = options.params || {};
        let api = url + '/' + path;
        if (Object.keys(params).length) {
            api += '?' + new URLSearchParams(params).toString();
        }

        return new Promise((resolve, reject) => {
            const option = {
                method: method.toUpperCase(),
                headers,
            };

            if (isFormData(data)) {
                option.body = data;
            } else if (data) {
                option.headers['Content-Type'] = 'application/json';
                option.body = JSON.stringify(data);
            }

            fetch(api, option)
                .then(async function (response) {
                    let data;
                    try {
                        data = await response.json();
                    } catch {
                        data = (await response.body) || null;
                    }

                    if (response.ok) {
                        return data;
                    }

                    throw {
                        data,
                        header: {
                            statusCode: response.status,
                            statusText: response.statusText,
                        },
                    };
                })
                .then(function (json) {
                    resolve(json);
                })
                .catch(function (err) {
                    reject(err);
                });
        });
    }

    _this.setAccessToken = (token) => {
        headerToken = token;
        return _this;
    };

    _this.setLocale = (locale) => {
        headerLocale = locale;
        return _this;
    };

    _this.get = (path, option = {}) => {
        return apiRequest('get', path, null, option);
    };

    _this.post = (path, data, option = {}) => {
        return apiRequest('post', path, data, option);
    };

    _this.patch = (path, data, option = {}) => {
        const params = option?.params || {};
        const headers = option?.headers || {};

        if (isFormData(data)) {
            params._method = 'patch';

            return apiRequest('post', path, data, { params, headers });
        }

        return apiRequest('patch', path, data, { params, headers });
    };

    _this.delete = (path, option = {}) => {
        return apiRequest('delete', path, null, option);
    };
}

export const API = new instance(process.env.NEXT_PUBLIC_API);
export const otherAPI = new instance('https://api.vietqr.io/v2');
export const CLIENTAPI = new instance('/api');
