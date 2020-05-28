import React from 'react';
import {Link} from 'react-router-dom';
import DatatFetCher, {isEmptyObj} from '../../utils/DatFetcher';
import Spinner from '../../components/layout/Spinner';

const User = props => {
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

  const {id, name, username, email, address, phone, website, company} = user;
  return (
    <React.Fragment>
      <Link to={`/`} className="btn btn-dark btn-sm mb-4">Go Back</Link>
      <div className="card">
        <h5 className="card-header">
          {name} <span className="text-secondary">for post id:{id} </span>
        </h5>
        <div className="card-body">
          <p className="card-text">
            <strong><i className="fa fa-id-badge" /></strong>
            {' '}
            {username} <small className="text-muted">(username)</small>
          </p>
          <p className="card-text">
            <strong><i className="fa fa-at" /></strong>
            {' '}
            {email}
            <small className="text-muted">(email)</small>
          </p>
          <p className="card-text">
            <strong><i className="fa fa-mobile" /></strong>
            {' '}
            {phone}
            {' '}
            <small className="text-muted">(phone)</small>
          </p>
          <p className="card-text">
            <strong><i className="fa fa-internet-explorer" /></strong>
            {' '}
            {website}<small class="text-muted">(website)</small>
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
          {`${address.geo.lat}, ${address.geo.lng}`}

          {/* {`${address.street}, ${address.suite}, ${address.city} ${address.zipcode}, ${address.geo.lat}, ${address.geo.lng}`${address.geo.lat}, ${address.geo.lng}`} */}
        </li>
        <li className="list-group-item">
          <strong>company</strong>
          :
          <br />
          {company.name}
          <br />
          {company.catchPhrase}
          <br />
          {company.bs}
          {/* {`${company.name}, ${company.catchPhrase}, ${company.bs}`} */}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default User;
