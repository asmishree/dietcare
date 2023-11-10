import React, { useState } from 'react';

function BmiCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    if (!height || !weight) {
      alert('Please enter valid height and weight.');
      return;
    }

    const heightInMeters = height / 100;

    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    let calculatedIdealWeight;
    let calculatedBmiCategory;

    if (gender === 'male') {
      calculatedIdealWeight = 22 * (heightInMeters * heightInMeters);
    } else if (gender === 'female') {
      calculatedIdealWeight = 21 * (heightInMeters * heightInMeters);
    }

    if (calculatedBmi < 18.5) {
      calculatedBmiCategory = 'Underweight';
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      calculatedBmiCategory = 'Normal Weight';
    } else if (calculatedBmi >= 24.9 && calculatedBmi < 29.9) {
      calculatedBmiCategory = 'Overweight';
    } else {
      calculatedBmiCategory = 'Obese';
    }

    setBmi(calculatedBmi);
    setIdealWeight(calculatedIdealWeight);
    setBmiCategory(calculatedBmiCategory);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'gender':
        setGender(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>Gender:</label>
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" name="height" value={height} onChange={handleChange} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="number" name="weight" value={weight} onChange={handleChange} />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && idealWeight && (
        <div>
          <p>BMI: {bmi.toFixed(2)}</p>
          <p>Ideal Weight: {idealWeight.toFixed(2)} kg</p>
          <p>BMI Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
