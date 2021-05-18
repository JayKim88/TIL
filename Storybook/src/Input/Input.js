import React from 'react';
import './Input.css';

function Input(props) {
  const { size, ...rest} = props;
  console.log(size)
  return (
    <input type="text" className={`input ${size}`} {...rest}/>
  )
}

export default Input;