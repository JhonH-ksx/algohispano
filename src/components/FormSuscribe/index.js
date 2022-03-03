import React, { useEffect, useState } from 'react'
import { useForm } from 'hooks/useForm';
import { formValidation } from 'components/FormSuscribe/formValidation';

function FormSuscribe() {
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const {value: { name, email }, handleInputChange, handleSubmit} = useForm({
    name: '',
    email: ''
  });

  useEffect(() => {
    setIsValid(formValidation({ name, email }));
  }, [name, email]);

  const funcSubmit = () => {
    alert("Enviar correo y aparecer mensaje de bienvenida")
  }

  const submit = (e) => {
    e.preventDefault();
    handleSubmit({ setIsError, funcSubmit, formValidation });
  }

  return (
    <>
      {isError && <mark>Por favor verifica los campos</mark>}

      <form onSubmit={submit} className="suscribe__form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          aria-label='Tu nombre'
          placeholder="Tu nombre"
          className="suscribe__form__input"
          autoComplete='off'
          />

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          aria-label='Tu correo'
          placeholder="Tu correo"
          className="suscribe__form__input"
          autoComplete='off'
        />

        <button
          disabled={!isValid}
          type='submit'
          className='suscribe__form__submit-btn'
        > Suscribirse </button>
      </form>
    </>
  )
}

export default FormSuscribe;
