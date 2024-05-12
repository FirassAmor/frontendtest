import React from 'react';

function PersonItem({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Phone Number: {person.phone_number}</p>
      <p>City: {person.city}</p>
      <p>State: {person.state}</p>
      <p>Street: {person.street1}</p>
      <p>Zip Code: {person.zip_code}</p>
    </div>
  );
}

export default PersonItem;
