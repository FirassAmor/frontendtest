import React, { useState, useEffect } from 'react';
import { fetchPersons } from '../services/api';

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Set your desired limit here
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchPersons(offset, limit);
        setPersons(response.persons);
        setTotal(response.total);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [offset]);

  const handleNextClick = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
    }
  };

  const handlePrevClick = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevClick} disabled={offset === 0 || loading}>
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={offset + limit >= total || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonList;
