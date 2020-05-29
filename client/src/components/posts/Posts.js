/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import React, {Component} from 'react';

import {Consumer} from '../../context';
import Post from './Post';

class Posts extends Component {
  render () {
    return (
      <Consumer>
        {values => {
          const {heading, posts} = values;
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">
                {heading || 'My Top 10 Posts'}
              </h3>
              <div className="row">
                {posts.map (post => <Post key={post.id} post={post} />)}
              </div>

            </React.Fragment>
          );
        }}

      </Consumer>
    );
  }
}

export default Posts;
