import React from 'react';
import * as classes from './InputLayout.css';

const inputLayout = (props) => (
    <div className={classes.InputLayout}>
        <h1>{props.baslik}</h1>
        {props.children}
    </div>
);

export default inputLayout;