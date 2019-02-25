import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as classes from './Articles.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import ArticlePage from '../../components/UI/ArticlePage/ArticlePage';
import InputItem from '../../components/UI/InputLayout/InputItem/InputItem';
import InputLayout from '../../components/UI/InputLayout/InputLayout';
import ButtonLayout from '../../components/UI/InputLayout/ButtonLayout/ButtonLayout';

class Articles extends Component {
    
    state = {
        title: '',
        content: '',
        category: '',
        mode: '',
        index: '',
        modal: false,
        detailPage: false, //If it is true, component will produce an article detail page//
        articleId: '', //we use it for aticle detail page to define which article info will be brought
    }

    componentDidMount(){
        const categoryId = this.props.history.location.state.categoryId;
        if(this.props.history.location.state.mode==='add'){
            this.setState({mode:'add', modal: true});
        }
        if(this.props.history.location.state.detailPage){
            this.setState({detailPage:true, articleId: this.props.history.location.state.articleId});
        }
        if(categoryId){
            this.props.onArticleListUpdated(categoryId);
        }
        else{
            this.props.onListUpdated();
        }
        this.props.onCategoryListUpdated();
    };
    
    titleChangeHandler = (event) => {
        this.setState({title: event.target.value});
    };

    contentChangeHandler = (event) => {
        this.setState({content: event.target.value});
    };

    categoryChangeHandler = (event) => {
        this.setState({category: event.target.value});
    };

    modeChangeHandler = (index, mode, title, content, category) => {
        this.setState({mode: mode, index: index, title: title, content: content, category: category, modal: true});
    };

    addClickHandler = (index = '') => {
        const title = this.state.title;
        const content = this.state.content;
        const category = this.state.category;
        const mode = this.state.mode;
        if (mode === 'add'){
            this.props.onAdded(title, content, category);
        }
        if ((mode === 'update') && (index !== '')){
            this.props.onUpdated(index, title, content, category);
            this.cancelHandler();
        }
        this.setState({title: '', content: '', category: ''});
    };

    deleteHandler = (index) => {
        this.props.onDeleted(index);
        this.cancelHandler();
    };

    cancelHandler = () => {
        this.setState({title: '', content: '', category: '', mode: 'add', index: '', modal: false});
    };

    render() {
        const articleKeys = this.props.articleList ? Object.keys(this.props.articleList) : [];
        const articleObject = this.props.articleList ? this.props.articleList : [];
        const categoryKeys = this.props.categoryList ? Object.keys(this.props.categoryList) : [];
        const categoryObject = this.props.categoryList ? this.props.categoryList : [];
        const title = this.state.title;
        const content = this.state.content;
        const category = this.state.category;
        const index = this.state.index;
        const mode = this.state.mode;
        let buttons = '';
        if (mode === 'update'){
            buttons = (
                <>
                    <button onClick={() => this.addClickHandler(index,title)}>Update</button>
                    <button onClick={() => this.deleteHandler(index)}>Delete</button>
                    <button onClick={() => this.cancelHandler()}>Cancel</button>
                </>
            );
        }
        else {
            buttons = (
                <>
                <button onClick={() => this.addClickHandler(index, title, content, category)}>Add</button>
                <button onClick={() => this.cancelHandler()}>Cancel</button>
                </>
            );
        }
        let articleList = <Spinner />;
        if (this.props.articleListLoading === false){
            if(this.state.detailPage) {
                articleList = articleKeys.map((item) => {
                    if(item === this.state.articleId){
                        let aList = articleObject[item];
                        return <ArticlePage 
                            clicked={() => this.modeChangeHandler(item,'update', aList.title, aList.content, aList.category)} 
                            title={aList.title} 
                            content={aList.content} 
                            idKey=''
                        />
                    }
                });
            }else {
                articleList = articleKeys.map((item) => {
                    let aList = articleObject[item];
                    let content = '';
                    let idKey = null;
                    if (aList.content.length > 800){
                        content = aList.content.slice(0, 800);
                        idKey=item;
                    }
                    else{
                        content = aList.content;
                    }
                    return <ArticlePage 
                        clicked={() => this.modeChangeHandler(item,'update', aList.title, aList.content, aList.category)} 
                        title={aList.title} 
                        content={content} 
                        key={item}
                        idKey={idKey}
                    />
                });
            }
        }
        
        return (
                <div>
                    <div className={this.state.modal? classes.Modal : classes.ModalNone}>
                        <InputLayout baslik="Add New Article">
                        <InputItem labelText="Title : " pcText="Title" value={title} changed={this.titleChangeHandler} />
                        <InputItem labelText="Content : " pcText="Content" value={content} changed={this.contentChangeHandler} inputType="text" />
                        <label>Category : </label>
                        <select value={category} onChange={this.categoryChangeHandler.bind(this)}>
                        <option key="1" value="">Category Name</option>
                        {categoryKeys.map((cKey) => <option key={cKey} value={cKey}>{categoryObject[cKey].name}</option>)}
                        </select>
                        <ButtonLayout>
                            {buttons}
                        </ButtonLayout>
                        </InputLayout>
                    </div>
                    {articleList}                
                </div>
        );

    };

}
const mapsStateToProps = state => {
    return {
        articleList: state.articleList,
        articleListLoading: state.articleListLoading,
        categoryList: state.categoryList
    }
}

const mapsDispatchToProps = dispatch => {
    const moduleName = 'articles';
    return {
        onAdded: (title, content, category) => dispatch(actionCreators.articleListAdd(title, content, category, moduleName)),
        onArticleListUpdated: (catId) => dispatch(actionCreators.getArticleListByCategory(catId)),
        onListUpdated: () => dispatch(actionCreators.getArticleList(moduleName)),
        onCategoryListUpdated: () => dispatch(actionCreators.getCategoryList()),
        onDeleted: (index) => dispatch(actionCreators.articleDelete(index)),
        onUpdated: (index, title, content, category) => dispatch(actionCreators.articleListUpdate(index, title, content, category, moduleName))
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(Articles);