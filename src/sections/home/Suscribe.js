import FormSuscribe from 'components/FormSuscribe'
import React from 'react'

function Suscribe() {
  return (
    <section id="suscribe" className='suscribe'>
      <div className='suscribe__info'>
        <p>¿Te gustaría recibir notificaciones por email de las actividades del club y/o añadirlas a tu calendario?</p>
        <p>Inscríbite - Es gratis por siempre</p>
      </div>

      <FormSuscribe />
    </section>
  )
}

export default Suscribe