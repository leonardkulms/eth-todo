import React from 'react';
import avocado from '../../avocado.svg';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <img
        src={avocado}
        className="loading--spin"
        alt="logo"
      />
      <p>Loading...</p></div>
  )
}

export default Loading;