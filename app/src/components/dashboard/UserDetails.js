import React from 'react';

// Approach 1
// const UserDetails = (props) => {
//   const details = props.details;
// Approach 2
const UserDetails = ({ details }) => {
  return (
    <>
      {details != null && (<div>
        <h2>User details</h2>
        <ul>
          <li>User ID: {details.userId}</li>
          <li>ID: {details.id}</li>
          <li>Title: {details.title}</li>
          <li>Is this Completed: {details.completed}</li>
        </ul>
      </div>)}
    </>
  );
}

export default UserDetails;