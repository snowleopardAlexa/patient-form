import React, {useState} from 'react';
import { useInput } from './hooks/useInput';

function PatientForm() {

const {value, bind, reset} = useInput("");

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${value}`)
    reset();
}

    return (
      <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input 
             type="text"
             {...bind}
            />
        </label>
        <input type="submit" value="Sumbit" />
      </form>
    );
}

export default PatientForm;