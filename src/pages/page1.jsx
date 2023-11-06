import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from Page 1!</h1>
      <button onClick={() => navigate('/')}>Go back</button>
      <button onClick={() => navigate('/page2')}>Go to Page 2</button>
    </div>
  );
}

export default Page1;