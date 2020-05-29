/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import React from 'react';
import Spinner from './components/layout/Spinner';
import DatatFetCher from './utils/DatFetcher';

const Context = React.createContext ();

export const Provider = props => {
  const {data: posts, isLoading, error} = DatatFetCher (
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (error) {
    return (
      <div className="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong>
        {' '}
        {error.message}
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
      </div>
    );
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (posts === undefined) {
    return (
      <div className="alert alert-warning alert-dismissible fade show">
        <strong>Warning!</strong>
        {' '}
        Something wrong with the fetching posts.
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
      </div>
    );
  }
  if (posts && posts.length === 0) {
    return <p>posts is EMPTY!</p>;
  }

  return (
    <Context.Provider value={posts && {posts, heading: 'Top 100 Posts'}}>
      {props.children}
    </Context.Provider>
  );
};

export const Consumer = Context.Consumer;
