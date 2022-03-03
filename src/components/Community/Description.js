import { Link } from "react-router-dom";

const links = [
  { to: '/calendar', content: 'Calendario' },
  { to: '/competitions', content: 'Competencias' }
];

function Description() {
  return (
    <div className="community__content__description">
      <p>
        Club de Algoritmia Hispano, comunidad de personas interesadas en el
        mundo de los algoritmos, las estructuras de datos y las ciencias de la
        computación.
      </p>

      <div className="community__content__description__btns">
        <a
          href="https://discord.gg/6dewW2j"
          target="_blank"
          rel="noopener noreferrer"
          className="community__content__description__btns__btn"
        > Unirse </a>

        {
          links.map(({ to, content }) => (
            <Link
              key={to}
              to={to} 
              className="community__content__description__btns__btn"
            > {content} </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Description;
