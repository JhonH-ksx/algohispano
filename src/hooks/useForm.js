import { useState } from "react"

export const useForm = ( initialState = {} ) => { 
  const [value, setValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValue(prevValue => ({
      ...prevValue,
      [target.name]: target.value
    }))
  }

  const handleSubmit = ({
    formValidation,
    setIsError,
    funcSubmit
  }) => {

    if (formValidation(value)) {
      setIsError(false);
      funcSubmit();

    } else {
      setIsError(true);
    }
  }

  const reset = () =>{
    setValue(initialState);
  }

  return {
    value, 
    handleInputChange,
    handleSubmit,
    reset
  }
}

//TODO: agregar validador general aca (si te pasan los datos validar, si no dejarlos pasar)