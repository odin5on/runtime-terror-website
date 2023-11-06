import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from Page 2!</h1>
      <button onClick={() => navigate('/')}>Go back</button>
      <button onClick={() => navigate('/page1')}>Go to Page 1</button>
    </div>
  );
}

export default Page2;