import './App.css';
import React, { useState, Suspense } from 'react';

const RemoteResourceList = React.lazy(() => import('addresses/ResourceList'));

const App = () => {

  const [currentPage, setCurrentPage] = useState<'home' | 'addresses'>('home');

  const Home = () => (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Paris Guide</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        
        <button onClick={() => setCurrentPage('addresses')} style={cardButtonStyle}>
          <h2>📍 Useful Addresses</h2>
          <p>Hospitals, Food, Day Centers, etc.</p>
        </button>

        <button disabled style={{ ...cardButtonStyle, opacity: 0.5 }}>
          <h2>✈️ Arriving in Paris</h2>
          <p>(Soon)</p>
        </button>

      </div>
    </div>
  );

  return (
    <div>
      {currentPage === 'home' ? (
        <Home />
      ) : (
        <div style={{ padding: '20px' }}>
          <button onClick={() => setCurrentPage('home')} style={{ marginBottom: '20px' }}>
            ⬅️ Back to Home
          </button>
          
          <Suspense fallback={<div>Loading remote content...</div>}>
            <RemoteResourceList />
          </Suspense>
        </div>
      )}
    </div>
  );
};

const cardButtonStyle: React.CSSProperties = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: '#f9f9f9',
  textAlign: 'center'
};

export default App;
