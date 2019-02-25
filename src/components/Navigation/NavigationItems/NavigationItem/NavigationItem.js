import React from 'react';
import { NavLink } from 'react-router-dom';
import * as classes from './NavigationItem.css';

const navigationItem = ( props ) => {
    let cls = classes.NavigationItem;
    if (props.cls === 'detail'){
        cls = classes.Detail;
    }
    return <li className={cls}>
        <NavLink 
            to={{
                pathname: props.link,
                state: {
                    categoryId: props.categoryId,
                    mode: props.mode, 
                    detailPage: props.detailPage,
                    articleId: props.articleId
                }
            }}
            exact={props.exact}>{props.children}</NavLink>
    </li>
};

export default navigationItem;