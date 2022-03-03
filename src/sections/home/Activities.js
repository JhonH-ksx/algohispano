import Card from 'components/Card'
import React from 'react'

const actvitiesList = [
  {
    title: 'Reuniones grupales',
    content: 'Nos reunimos a practicar y explicar temas de algorítmia. Si te animas puedes explicar un tema tú : )',
    img: ''
  },
  {
    title: 'Mock Interviews',
    content: 'En este espacio podrás preparte para tu próxima entrevista de trabajo. ¿Qué tan bueno eres escribiendo y explicando tu código al mismo tiempo?',
    img: ''
  },
  {
    title: 'Competencias internas',
    content: '',
    img: ''
  },
  {
    title: 'Fun meetings',
    content: 'Es hora de escuchar música, hacer preguntas, contar anedotas y aprender de la experencia de los demás.',
    img: ''
  },
  {
    title: 'Grupos de estudio',
    content: 'Si coincides con alguien en tiempo, ¿por qué no reunirnse a aprender juntos?.',
    img: ''
  },
] 


function Activities() {
  return (
    <section id="activities" className='activities'>
      <h2 className="section-title activities__title">Actividades</h2>

      <div className='activities__cards'>
        {
          actvitiesList.map(({title, img, content}, i) => (
            <Card
              key={`${title}-${i}`}
              img={img}
              title={title}
              content={content}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Activities