import React, {useState} from 'react';

function PatientForm() {

const [name, setName] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name}`)
}

    return (
      <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input 
             type="text"
             value={name}
             onChange={e => setName(e.target.value)}
            />
        </label>
        <input type="submit" value="Sumbit" />
      </form>
    );
}

export default PatientForm;