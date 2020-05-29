/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
  const {userId, id, title, body} = post;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {body}
          </p>
          <p className="card-text">
            <strong><i className="fa fa-user" /> User Id</strong>: {userId}
          </p>
          <p className="card-text">
            <strong><i className="fa fa-paper-plane" /> Post Id</strong>: {id}
          </p>
          <Link
            className="btn btn-dark btn-block"
            to={{
              pathname: `/users/${userId}`,
              post: {
                id,
              },
            }}
          >
            <i className="fa fa-caret-right"> View User</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
