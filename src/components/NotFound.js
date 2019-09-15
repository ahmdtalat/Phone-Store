import React from 'react';

const NotFound = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-title text-center text-uppercase pt-5">
          <h1 className="display-3 my-auto">error</h1>
          <h1>404</h1>
          <h1>page not found</h1>
          <span className="text-danger">
            requested url "{props.location.pathname}" not found
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
