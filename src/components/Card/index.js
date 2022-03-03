import PropTypes from 'prop-types';

function Card({ title, img, content}) {
  return (
    <div className='card-flip'>
      <div className='card-flip__inner'>
        <div className='card-flip__inner__front'> {title} </div>
        <div className='card-flip__inner__back'> {content} </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
