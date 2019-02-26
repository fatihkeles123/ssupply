import React from 'react';
import ButtonLayout from '../InputLayout/ButtonLayout/ButtonLayout';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';
import * as classes from './ArticlePage.css';

const articlePage = (props) => {
    const detailLink = props.detail ? <NavigationItem link="/article-detail" detailPage="true" articleId={props.idKey} cls='detail'>detail</NavigationItem> : '';
    return <div className={classes.ArticleBox}>
            <h1>{props.title}</h1>
            <p className={classes.date}>{props.date}</p>
            <p>
                {props.content}
                {detailLink}
            </p>            
            <ButtonLayout>
                <button onClick={props.clicked}>Edit</button>
                <button onClick={props.deleted}>Delete</button>
            </ButtonLayout>
    </div>
};          

export default articlePage;