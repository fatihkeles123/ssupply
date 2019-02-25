import React from 'react';
import * as classes from './ButtonLayout.css';

const buttonLayout = (props) => (
    <div className={classes.ButtonLayout}>
        {props.children}
    </div>
);

export default buttonLayout;