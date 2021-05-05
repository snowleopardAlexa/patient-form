import React, {useState} from 'react';

function PatientForm() {
    return (
      <>
        <label>
            Name:
            <input type="text" />
        </label>
        <input type="submit" value="Sumbit" />
      </>
    );
}

export default PatientForm;