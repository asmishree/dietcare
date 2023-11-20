import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import API from '../API';

const Dietplan = () => {
  const [bmr, setBmr] = useState('');
  const [activity, setActivity] = useState('moderately');
  const [dietpref, setDietpref] = useState('veg');
  const [result, setResult] = useState(null);

  const MyDietplan = async () => {
    if (bmr === "") {
      toast.error('Please enter all fields.');
      return;
    }
    if (bmr <= 0) {
      toast.error('Invalid Value.');
      return;
    }

    try {
      const response = await axios.get(`${API}/diet/shortby`, {
        params: {
          dietpref: dietpref,
          activity: activity
        }
      });

      setResult(response.data); // Assuming the API returns the result in the response data
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data. Please try again later.');
    }
  };

  return (
    <div className="main-container">
      <h1>Dietplan</h1>
      <div className='grid-box'>
        <div>
          <label>BMR:</label>
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
            <option value="moderately">Moderately Active</option>
            <option value="highly">Highly Active</option>
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
          
          <div dangerouslySetInnerHTML={{ __html: result[0].yourdiet }}/>
            
          
        </div>
      )}
    </div>
  );
};

export default Dietplan;
