import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const ArrowPlayground = forwardRef(({ move, setDirMove }, arrowRef) => {

  return (
    <button
      className="community__content__playground__arrow"
      onClick={() => setDirMove(move)}
      ref={arrowRef}
    ><i className={`fa-solid fa-angle-${move}`} /></button>
  )
});

ArrowPlayground.propTypes = {
  move: PropTypes.oneOf([
    'left',
    'right'
  ]).isRequired,
  setDirMove: PropTypes.func.isRequired
}

export default ArrowPlayground;
