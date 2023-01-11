import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithRole from '../WithRole';

function AdminOnlyRoute({ component: Component, ...rest }) {
  return (
    <Routes>
    <Route {...rest} render={(props) => (
      <WithRole allowedRoles={[0]}>
        <Component {...props} />
      </WithRole>
    )} />
    </Routes>
  );
}

export default AdminOnlyRoute;