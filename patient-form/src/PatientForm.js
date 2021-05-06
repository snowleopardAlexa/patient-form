import React from 'react';
import { useInput } from './hooks/useInput';
import { Form, Button } from 'react-bootstrap';

function PatientForm() {

const {value:firstName, bind:bindFirstName, reset:resetFirstName} = useInput("");
const {value:lastName, bind:bindLastName, reset:resetLastName} = useInput("");
const {value:age, bind:bindAge, reset:resetAge} = useInput("");
const {value:disease, bind:bindDisease, reset:resetDisease} = useInput("");
const {value:cured, bind:bindCured, reset:resetCured} = useInput("");


const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName} ${age} ${disease} ${cured}`)
    resetFirstName();
    resetLastName();
    resetAge();
    resetDisease();
    resetCured();
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
            {...bindLastName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-4 mb-4">Age</Form.Label>
          <Form.Control 
            type="text" 
            {...bindAge}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-4 mb-4">Disease</Form.Label>
          <Form.Control 
            type="text" 
            {...bindDisease}
          />
        </Form.Group>
       
        <Form.Group>
          <Form.Label className=" mt-4 mb-4">Cured</Form.Label>
          <Form.Control 
            type="text" 
            {...bindCured}
          />
        </Form.Group>
      
        <Button className="mt-4" variant="primary" type="submit">
          Submit Patient Info
        </Button>
      </Form>
      </>
    );
}

export default PatientForm;