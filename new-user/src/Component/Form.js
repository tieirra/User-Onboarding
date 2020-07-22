import React from "react";

function Form ({ details }) {
  return <div classname = 'form container'>
    <h1>{details.username}</h1>
    <p>Nmae: {details.name}</p>
    <p>Email: {details.email}</p>
    <p>Password: {details.password}</p>
    <p>Terms of service: </p>
  </div>
}

export default Form;