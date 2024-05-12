import React, { useState, useEffect } from 'react';
import { fetchPersons } from '../services/api';

function PersonList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPersons();
        setPersons(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Person List</h1>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.name} - {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
