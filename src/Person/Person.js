import React from 'react';
import styled from 'styled-components';

function Person(props) {

  const StyledDiv = styled.div`
    width: 300px;
    border: 1px solid #333
    margin: 10px
    text-align: center
    padding: 5px`
  return (
    <StyledDiv><p onClick={props.click}>Name: {props.name} Age: {props.age}</p>
  <input type="text" onChange={props.change} value={props.name}/>
  </StyledDiv>
  
  )
}
export default Person;