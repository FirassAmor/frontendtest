import React from 'react';

function Pagination({ currentPage, personsPerPage, totalPersons, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
