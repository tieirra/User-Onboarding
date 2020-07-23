import React, { useState, useEffect } from 'react'
import './App.css';
import formSchema from './validation/formSchema';
import axios from 'axios';
import Form from './Component/Form';
import * as yup from 'yup';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

export default function App() {

  const [User, setUser] = useState(initialFormValues) 
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(false)


  const postNewUser = () => {
    axios.post('https://reqres.in/api/users')
    .then(res => {
      setUser(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const checkboxChange = (name, checked) => {
    console.log(name, checked)
  }



  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
     password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }


  return (
    <div className="App">

<h2> Add New User </h2>
   
     <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}


