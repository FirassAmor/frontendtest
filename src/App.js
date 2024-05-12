import React from 'react';
import './App.css';
import PersonList from './components/PersonList'; // Import the PersonList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Persons</h1>
      </header>
      <main>
        <PersonList /> {/* Render the PersonList component */}
      </main>
    </div>
  );
}

export default App;
