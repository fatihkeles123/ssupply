import React, { Component } from 'react';
import * as classes from './NavigationItems.css';
import * as actionCreators from '../../../store/actions';
import NavigationItem from './NavigationItem/NavigationItem';
import {connect} from 'react-redux';

class NavigationItems extends Component {
    
    componentDidMount(){
        this.props.onListUpdated();
    };

    render() {
        const categoriesKeys = Object.keys(this.props.categoryList);
        const categories = this.props.categoryList;
        const categoryMenu = categoriesKeys.map((cat) => {
           const navLink = "/articles/" + cat;
           return <NavigationItem link={navLink} categoryId={cat}>{categories[cat].name}</NavigationItem>
        });
        
        return (
            <div className={classes.Navigation}>
                <ul className={classes.NavigationItems}>
                <NavigationItem link="/articles" categoryId="" mode="" cls="">HOME</NavigationItem>
                    {categoryMenu}
                    <NavigationItem link="/add-article" mode="add" classType="manage" cls="">ADD ARTICLE</NavigationItem>
                    <NavigationItem link="/categories" classType="manage" cls="">CATEGORIES</NavigationItem>
                </ul>
                    
            </div>
        );
    };

};

const mapsStateToProps = state => {
    return {
        categoryList: state.categoryList
    }
};

const mapsDispatchToProps = dispatch => {
    return {
        onListUpdated: () => dispatch(actionCreators.getCategoryList())
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(NavigationItems);