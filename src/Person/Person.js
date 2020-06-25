import React from 'react';
import './Person.css'

function Person(props) {

  return (
    <div className="person"><p onClick={props.click}>Name: {props.name} Age: {props.age}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  
  )
}
export default Person;