import React from 'react';
import * as classes from './InputItem.css';

const inputItem = (props) => 
    {
        const inputType = props.inputType==="text" ? <textarea placeholder={props.pcText} value={props.value} onChange={props.changed} /> : <input placeholder={props.pcText} value={props.value} onChange={props.changed} />; 
        const cls = props.cls==="searchBox" ? classes.InputItem + ' ' + classes.searchBox : classes.InputItem;//class definition
        const labelDef = props.labelText ? <label>{props.labelText}</label> : '';
        return  <div className={cls}>
                    {labelDef}
                   {inputType} 
               </div>
    };

export default inputItem;