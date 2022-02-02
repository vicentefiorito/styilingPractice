import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValid, setEnteredValid] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setEnteredValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0 ) {
      setEnteredValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !enteredValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{
          background: !enteredValid ? 'salmon' : 'transparent', 
          borderColor: !enteredValid ? 'red' : 'white'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
