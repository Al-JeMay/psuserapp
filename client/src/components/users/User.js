/*
===========================================================
 Title:  PolicyStreet User App Demo
 Author: Al JeMay
 Date:   29 May 2020
===========================================================
*/
import React from 'react';
import {Link} from 'react-router-dom';
import DatatFetCher, {isEmptyObj} from '../../utils/DatFetcher';
import Spinner from '../../components/layout/Spinner';

const User = props => {
  // console.log ('props.match.params.id::::::', props.match.params.id);
  // console.log ('props.location.post.id::::::', props.location.post.id);
  const {data: user, isLoading, error} = DatatFetCher (
    `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`
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
  if (user === undefined) {
    return (
      <div className="alert alert-warning alert-dismissible fade show">
        <strong>Warning!</strong>
        {' '}
        Something wrong with the fetching user's detail.
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
      </div>
    );
  }
  if (user && isEmptyObj (user)) {
    return <p>user is EMPTY!</p>;
  }
  const {name, username, email, address, phone, website, company} = user;
  return (
    <React.Fragment>
      <Link to={`/`} className="btn btn-dark btn-sm mb-4">Go Back</Link>
      <div className="card">
        <h5 className="card-header">
          {name}
          {' '}
          <br />
          <small>User id number </small>
          <small className="text-secondary">
            {props.match.params.id}{' '}
          </small>
          <small> accessing data of post id number </small>
          <small className="text-secondary">
            {props.location.post.id}{' '}
          </small>
        </h5>
        <div className="card-body">
          <p className="card-text">
            <strong><i className="fa fa-id-badge text-muted" /></strong>
            {' '}
            {username} <small className="text-muted">(username)</small>
          </p>
          <p className="card-text">
            <strong><i className="fa fa-at text-muted" /></strong>
            {' '}
            {email}
            <small className="text-muted">(email)</small>
          </p>
          <p className="card-text">
            <strong><i className="fa fa-mobile text-muted" /></strong>
            {' '}
            {phone}
            {' '}
            <small className="text-muted">(phone)</small>
          </p>
          <p className="card-text">
            <strong>
              <i className="fa fa-internet-explorer text-muted" />
            </strong>
            {' '}
            {website}<small className="text-muted">(website)</small>
          </p>
        </div>
      </div>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Address</strong>
          :
          <br />
          {`${address.street}, ${address.suite}, ${address.city} ${address.zipcode}`}
          <br />
          <strong><i className="fa fa-compass text-muted" /></strong>

          {` ${address.geo.lat}, ${address.geo.lng}`}
        </li>
        <li className="list-group-item">
          <strong>Company</strong>
          :
          <br />
          <strong><i className="fa fa-briefcase text-muted" /></strong>
          {` ${company.name}`}
          <br />
          {company.catchPhrase}
          <br />
          {company.bs}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default User;
