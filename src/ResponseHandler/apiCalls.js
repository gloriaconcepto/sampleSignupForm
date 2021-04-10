 const url = "http://167.99.82.56:5050/api/v1/register";
// const url =''
const message = "Something went wrong. Please try again in a bit";
export const basicHeader = {
    "Content-Type": "application/json",
};

class CustomError extends Error {
    constructor(message, errors) {
        super(message);
        this.errors = errors;
    }
}
export const handleResponse = (response) => {
    const contentType = response.headers.get("content-type");
    if (response.ok && response.status === 200) {
        return response.json();
    } else if (response.ok && response.status === 201) {
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else {
            return response.text();
        }
    } else if (response.ok && response.status === 204) {
        return null;
    }

    return response && contentType && contentType.indexOf("application/json") !== -1
        ? response.json().then((json) => {
              const error = new CustomError(json.description || json.responseMessage || message, json.errors);
              return Promise.reject(Object.assign(error, { response }));
          })
        : Promise.reject(Object.assign(new Error(message), { response }));
};

export const apiCall = (requestType,requestBody) => {
    let headers = { ...basicHeader, "Access-Control-Allow-Origin": "*" };

    const requestOptions = {
        method: requestType,
        headers,
        body: requestBody ? JSON.stringify(requestBody) : undefined,
    };

    return fetch(url, requestOptions).then(handleResponse);
};
