import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BodyFatCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    if (!height || !weight || !age) {
        toast.error('Please enter all fields.')
        return;
      }
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const ageValue = parseFloat(age);

    if (!isNaN(weightValue) && !isNaN(heightValue) && !isNaN(ageValue)) {
      let result;

      if (gender === 'male') {
        result = 0.29288 * weightValue + 0.0005 * Math.pow(weightValue, 2) - 0.00028826 * ageValue;
      } else {
        result = 0.29669 * weightValue + 0.00043 * Math.pow(weightValue, 2) - 0.00012925 * ageValue;
      }

      setBodyFat(result.toFixed(2));
    } else {
      setBodyFat(null);
    }
  };

  return (
    <div className=' main-container'>
      <h1>Body Fat Calculator</h1>

      <div className='grid-box'>
      <div>
<label>
        Weight (kg):
        
      </label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}  placeholder='Weight in kg'/>
</div>
     
      <div>
      <label>
        Height (cm):
        
      </label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Height in cm'/>
      </div>
      <div>
        
      <label>
        Age:
        
      </label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='min age 2 years'/>
      </div>
  
    <div>
    <label>
        Gender:
       
      </label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    </div>
      </div>


      
      <button onClick={calculateBodyFat} className='mybtt'>Calculate</button>

      {bodyFat !== null && (
        <div className='result'>
          <h2>Result:</h2>
          <p>Your estimated body fat percentage is {bodyFat}%.</p>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;
