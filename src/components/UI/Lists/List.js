import React from 'react';
import * as classes from './List.css';

const list = (props) => (
    <ul className={classes.List} onClick={props.clicked} key={props.key} id={props.id}>{props.children}</ul>
);

export default list;