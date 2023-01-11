import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function withRole(allowedRoles) {
    return function (Component) {
      return function (props) {
        const navigate = useNavigate();

  // Get the user's role from the props
  const { role } = props;

  // If the user's role is not in the list of allowed roles, redirect to the homepage
  if (!allowedRoles.includes(role)) {
    navigate('/');
    return null;
  }

  // Otherwise, render the component
  return <Component {...props} />;
        };
    }
}