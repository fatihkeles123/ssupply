import * as actionTypes from './actionTypes';
import axios from 'axios';

export const articleAdd = (title, content, category) => {
    return {
        type: actionTypes.ARTICLE_ADD, 
        title: title, 
        content: content,
        category: category
    };
}

export const articleClick = (index) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/articles/${index}.json`;
        return axios.delete(query)
        .then(() => {
            dispatch(getArticleList());
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const categoryAdd = (name, order) => {
    return {
        type: actionTypes.CATEGORY_ADD, 
        name: name,
        order: order
    };
}

export const listDelete = (index, moduleName) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/${moduleName}/${index}.json`;
        return axios.delete(query)
        .then(() => {
            dispatch(getList(moduleName));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const articleDelete = (index) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/articles/${index}.json`;
        return axios.delete(query)
        .then(() => {
            dispatch(getArticleList());
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const listUpdate = (index, name, moduleName) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/${moduleName}/${index}.json`;
        return axios.put(query,{
            name: name
        })
        .then(() => {
            dispatch(getList(moduleName));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const articleListUpdate = (index, title, content, date, category, moduleName) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/${moduleName}/${index}.json`;
        return axios.put(query,{
            title: title,
            content: content,
            date: date,
            category: category
        })
        .then(() => {
            dispatch(getArticleList());
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const categoryListUpdate = (index, name, order, moduleName) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/${moduleName}/${index}.json`;
        return axios.put(query,{
            name: name,
            order: order
        })
        .then(() => {
            dispatch(getCategoryList(moduleName));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const updatedArticleList = (data) => {
    return {
        type: actionTypes.ARTICLE_LIST_UPDATE,
        data
    }
}

export const updatedCategoryList = (data) => {
    return {
        type: actionTypes.CATEGORY_LIST_UPDATE,
        data
    }
}

export const updatedList = (moduleName,data) => {
    if (moduleName === 'categories'){
        return {
            type: actionTypes.CATEGORY_LIST_UPDATE,
            data
        }
    }    
}

export const getArticleList = () => {
    return (dispatch) => {
        return axios.get('https://suitsupply-abe82.firebaseio.com/articles.json')
        .then(res => {
            dispatch(updatedArticleList(res.data));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const getArticleListByCategory = (categoryId) => {
    return (dispatch) => {
        return axios.get('https://suitsupply-abe82.firebaseio.com/articles.json?orderBy="category"&equalTo="'+categoryId+'"')
        .then(res => {
            dispatch(updatedArticleList(res.data));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const getCategoryList = () => {
    return (dispatch) => {
        return axios.get(`https://suitsupply-abe82.firebaseio.com/categories.json`)
        .then(res => {
            dispatch(updatedCategoryList(res.data));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}

export const getList = (moduleName) => {
    return (dispatch) => {
        return axios.get(`https://suitsupply-abe82.firebaseio.com/${moduleName}.json`)
        .then(res => {
            dispatch(updatedList(moduleName,res.data));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}


export const articleListAdd = (title, content, category, moduleName) => {
    return (dispatch) => {
        const utc = new Date().toString().slice(0,24);
        console.log(utc);
        return axios.post(`https://suitsupply-abe82.firebaseio.com/articles.json`,{
            title: title,
            content: content,
            category: category,
            date: utc
        })
        .then(() => {
            dispatch(getArticleList(moduleName));
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}


export const categoryListAdd = (name, order) => {
    return (dispatch) => {
        return axios.post(`https://suitsupply-abe82.firebaseio.com/categories.json`,{
            name: name,
            order: order
        })
        .then(() => {
            dispatch(getCategoryList());
        });
    }
}

export const listAdd = (name, moduleName) => {
    return (dispatch) => {
        return axios.post(`https://suitsupply-abe82.firebaseio.com/${moduleName}.json`,{
            name: name
        })
        .then(() => {
            dispatch(getList(moduleName));
        });
    }
}