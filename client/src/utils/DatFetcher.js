/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import {useState, useEffect} from 'react';

export const isEmptyObj = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty (prop)) return false;
  }
  return true;
};

const DatatFetCher = uri => {
  const [data, setData] = useState ([]);
  const [isLoading, setIsLoading] = useState (false);
  const [error, setError] = useState (null);

  useEffect (
    () => {
      console.log ('DatatFetCher>>>>', uri);

      setIsLoading (true);
      fetch (uri)
        .then (res => {
          if (res.ok) {
            return res.json ();
          } else {
            throw Error (`Error fetching data from uri: ${uri}`);
          }
        })
        .then (result => {
          console.log ('result:::::::', result);
          setData (result);
          setIsLoading (false);
        })
        .catch (error => {
          setIsLoading (false);
          setError (error);
        });
    },
    [uri]
  );

  return {data, isLoading, error};
};

export default DatatFetCher;
