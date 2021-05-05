import React, {useState} from 'react';
import { useInput } from './hooks/useInput';

function PatientForm() {

const {value:firstName, bind:bindFirstName, reset:resetFirstName} = useInput("");
const {value:lastName, bind:bindLasttName, reset:resetLastName} = useInput("");


const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`)
    resetFirstName();
    resetLastName();
}

    return (
      <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input 
             type="text"
             {...bindFirstName}
            />
        </label>
        <label>
            Last Name:
            <input 
             type="text"
             {...bindLasttName}
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default PatientForm;