import React from 'react';
import * as classes from './ListItem.css';

const listItem = (props) => (
    <li className={classes.ListItem} onClick={props.clicked} id={props.id}>{props.children}</li>
);

export default listItem;