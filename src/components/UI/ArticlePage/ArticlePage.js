import React from 'react';
import ButtonLayout from '../InputLayout/ButtonLayout/ButtonLayout';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';
import * as classes from './ArticlePage.css';

const articlePage = (props) => {
    const detailLink = props.idKey ? <NavigationItem link="/article-detail" detailPage="true" articleId={props.idKey} cls='detail'>detail</NavigationItem> : '';
    return <div className={classes.ArticleBox}>
            <h1>{props.title}</h1>
            <p>
                {props.content}
                {detailLink}
            </p>            
            <ButtonLayout>
                <button onClick={props.clicked}>Edit</button>
            </ButtonLayout>
    </div>
};          

export default articlePage;