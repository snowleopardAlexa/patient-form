import React, {useState} from 'react';
import { useInput } from './hooks/useInput';
import { Form, Button } from 'react-bootstrap';

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
        <>
        <h2 className="mt-4">Patient Form</h2>
        <Form className="mx-auto d-block mt-5" onSubmit={handleSubmit} style={{width: '60%'}}>
        <Form.Group>
          <Form.Label className="mb-4">First Name</Form.Label>
          <Form.Control 
           type="text" 
           {...bindFirstName}
           />
        </Form.Group>
      
        <Form.Group>
          <Form.Label className=" mt-4 mb-4">Last Name</Form.Label>
          <Form.Control 
            type="text" 
            {...bindLasttName}
          />
        </Form.Group>
       
      
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
    );
}

export default PatientForm;