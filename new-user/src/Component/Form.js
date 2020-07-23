import React from "react";

export default function Form(props) {
  const {
    inputChange,
    checkboxChange,
    disabled,
    errors,
    submit,
    values
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onInputChange = evt => {
    const { value, name } = evt.target
    inputChange(value, name)
  }
  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }


  return(
  <Form classname='form container' onSubmit={onSubmit}>
    <h1> Add New User</h1>
    <button disabled={disabled}>submit</button>

<div className='form values'>
    <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email&nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='text'
          />
        </label>
</div>

<label>checkbox
          <input
            type="checkbox"
            name='TermsOfService'
            checked={values.termsofservice === true}
            onChange={onCheckboxChange}
          />
        </label>


    <div className='errors'>
      
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>
  </Form>
  )

}

