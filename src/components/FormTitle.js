import React from 'react';
import '../stylesheet/formTitle.css'

function FormTitle(props) {
  return(<h1 className='formTitle'>{props.text}</h1>);
}

export default FormTitle;
