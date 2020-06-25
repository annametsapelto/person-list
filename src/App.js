import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'

function App() {
  const [personState, changeName] = useState({
    persons: [
      {key: '1', name: 'Anna', age: 33},
      {key: '2', name: 'Asko', age: 37},
      {key: '3', name: 'Nenna', age: 8},
      {key: '4', name: 'Melissa', age: 6}
    ]});

  const [showState, changeState] = useState({
    showList: false
  })  
  const toggleVisibility = (event) => {
    const isShowing = showState.showList;
    changeState({showList: !isShowing});
  }

  const deletePersonHandler = (index) => {
    const lessPersons = [... personState.persons];
    lessPersons.splice(index, 1);

    changeName({
      persons: lessPersons
      })
    }

  const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'green': 'red'};
    color: white;
    padding: 5px;
    &:hover {
      background-color: ${props => props.alt ? 'lightgreen': 'pink'};
      color: black;
    }` 
     
  const changeNameHandler = (event, key) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.key === key;
    })
    const person = {...personState.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    changeName({persons: persons})
  }
  let persons = null;
  if(showState.showList) {
    persons =
      <div>
        {personState.persons.map((person, index) =>{
          return <Person 
          click={() => deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.key}
          change={(event) => changeNameHandler(event, person.key)}/>
        })}
      </div>
      StyledButton.backgroundColor = 'red';
      }
  const classes = [] 
  if (personState.persons.length <= 3){
    classes.push('blue')
  }
  if (personState.persons.length <= 2) {
    classes.push('italics')
  }

  return (
    <div className="App">
      <h1 className={classes.join(' ')}>A List of Persons</h1>
      <StyledButton onClick={toggleVisibility} alt={showState.showList}>Toggle</StyledButton>
      {persons}
    </div>
  );
}

export default App;
