import * as actionTypes from './actionTypes';

const initialState = {
    articleList: [],
    articleListLoading: true,
    categoryList: [],
    categoryListLoading: true             
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CATEGORY_ADD:
            return {
                ...state,
                categoryList: [...state.categoryList].concat({name: action.name, order: action.order})
            };
        case actionTypes.ARTICLE_ADD:
            return {
                ...state,
                articleList: [...state.articleList].concat({title: action.title, content: action.content, category: action.category})
            };
        case actionTypes.ARTICLE_CLICK:
            return {
                ...state,
                articleList: [...state.articleList].slice(0,action.index).concat([...state.articleList].slice(action.index+1))
            };
        case actionTypes.ARTICLE_LIST_UPDATE:
            return {
                ...state,
                articleListLoading: false,
                articleList: {...action.data}
            };
        case actionTypes.CATEGORY_LIST_UPDATE:
            return {
                ...state,
                categoryListLoading: false,
                categoryList: {...action.data}
            };
    } 
    return state;
};

export default reducer;