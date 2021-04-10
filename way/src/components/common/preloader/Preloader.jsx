import React from 'react';
import preloader from '../../../assets/icons/gif-load.gif';

let Preloader = (props) => {
  return (
    <div>
      <img className='img-loading' src={preloader} alt="" />
    </div>
  );
}

export default Preloader;