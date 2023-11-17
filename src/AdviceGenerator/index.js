import './style.css'
import React, { useState, useEffect } from 'react';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    generateAdvice();
  }, []);

  const generateAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Failed to fetch advice');
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='home'>
      <h1>Advice</h1>
      <p>{advice}</p>
      <button className='dice'  onClick={generateAdvice}>🎲</button>

    </div>
  );
};

export default AdviceGenerator;
