// BMRCalculator.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMR = () => {
    if (weight === '' || height === '') {
        toast.error('Please enter valid height and weight.');
        return;
      }

    const bmr =
      gender === 'male'
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;

    setResult(bmr);
  };

  return (
    <div className="main-container">
      <h1>BMR Calculator</h1>
      
      
      <div className='grid-box'>
      <div>
        <label>
          Age:
          
        </label>
        <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='min age 2years'
          />
      </div>
      
      <div>
        <label>
          Height (in cm):
          
        </label>
        <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Height in cm'
          
          />
      </div>
      
      <div>
      <label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
      </div>

      <div>
        <label>
          Weight (in kg):
        
        </label>
        <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Weight in kg'
          />
      </div>

      </div>
      <button onClick={calculateBMR} className='mybtt'>Calculate BMR</button>
      
      {result !== null && (
        <div>
          <h2>Result:</h2>
          <p>Your BMR is: {result.toFixed(2)} calories/day</p>
        </div>
      )}
        
    </div>
  );
};

export default BMRCalculator;
