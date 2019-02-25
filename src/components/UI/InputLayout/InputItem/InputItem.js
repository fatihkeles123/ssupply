import React from 'react';
import * as classes from './InputItem.css';

const inputItem = (props) => 
    {
        const inputType = props.inputType==="text" ? <textarea placeholder={props.pcText} value={props.value} onChange={props.changed} cols="90" rows="10" /> : <input placeholder={props.pcText} value={props.value} onChange={props.changed} />; 
        return  <div className={classes.InputItem}>
                    <label>{props.labelText}</label>
                   {inputType} 
               </div>
    };

export default inputItem;