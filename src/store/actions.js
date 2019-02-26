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
        });
    }
}

export const articleDelete = (index) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/articles/${index}.json`;
        return axios.delete(query)
        .then(() => {
            dispatch(getArticleList());
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
        });
    }
}

export const articleListUpdate = (index, title, content, category, moduleName) => {
    return (dispatch) => {
        const query = `https://suitsupply-abe82.firebaseio.com/${moduleName}/${index}.json`;
        return axios.put(query,{
            title: title,
            content: content,
            category: category
        })
        .then(() => {
            dispatch(getArticleList());
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
        });
    }
}

export const getArticleListByCategory = (categoryId) => {
    return (dispatch) => {
        return axios.get('https://suitsupply-abe82.firebaseio.com/articles.json?orderBy="category"&equalTo="'+categoryId+'"')
        .then(res => {
            dispatch(updatedArticleList(res.data));
        });
    }
}

export const getCategoryList = () => {
    return (dispatch) => {
        return axios.get(`https://suitsupply-abe82.firebaseio.com/categories.json`)
        .then(res => {
            dispatch(updatedCategoryList(res.data));
        });
    }
}

export const getList = (moduleName) => {
    return (dispatch) => {
        return axios.get(`https://suitsupply-abe82.firebaseio.com/${moduleName}.json`)
        .then(res => {
            dispatch(updatedList(moduleName,res.data));
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