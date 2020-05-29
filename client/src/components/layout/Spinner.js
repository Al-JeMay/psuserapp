/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style={{width: '200px', margin: '40px auto', display: 'block'}}
      />
    </div>
  );
};
