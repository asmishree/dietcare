// BMRCalculator.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Dietplan = () => {
  const [bmr, setBmr] = useState('');
  const [activity, setActivity] = useState('mactive');
  const [dietpref, setDietpref] = useState('veg');
  const [result, setResult] = useState(null);

  const MyDietplan = () => {
    if ( bmr=="") {
        toast.error('Please enter all fields.');
        return;
      }
};

  return (
    <div className="main-container">
      <h1>Dietplan</h1>
      
      
      <div className='grid-box'>
      <div>
        <label>
          BMR:
          
        </label>
        <input
            type="number"
            value={bmr}
            onChange={(e) => setBmr(e.target.value)}
            placeholder='Enter your BMR'
          />
      </div>
      
     
      <div>
      <label>Activty Level:</label>
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="mactive">Moderately Active</option>
            <option value="hactive">Highly Active</option>
          </select>
      </div>

      <div>
      <label>Dietary Preference:</label>
      <select value={dietpref} onChange={(e) => setDietpref(e.target.value)}>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non Vegetarian</option>
          </select>
      </div>

    

      </div>
      <button onClick={MyDietplan} className='mybtt'>Generate Dietplan</button>
      
      {result !== null && (
        <div className="result">
          <h2>Result:</h2>
          
        </div>
      )}
        
    </div>
  );
};

export default Dietplan;
