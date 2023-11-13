import React, { useState } from "react";
import toast from "react-hot-toast";

function BmiCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const calculateBmi = () => {
    if (!height || !weight ||!age) {
      toast.error("Please enter all fields.");
      return;
    }

    const heightInMeters = height / 100;

    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    let calculatedIdealWeight;
    let calculatedBmiCategory;

    if (gender === "male") {
      calculatedIdealWeight = 22 * (heightInMeters * heightInMeters);
    } else if (gender === "female") {
      calculatedIdealWeight = 21 * (heightInMeters * heightInMeters);
    }

    if (calculatedBmi < 18.5) {
      calculatedBmiCategory = "Underweight";
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      calculatedBmiCategory = "Normal Weight";
    } else if (calculatedBmi >= 24.9 && calculatedBmi < 29.9) {
      calculatedBmiCategory = "Overweight";
    } else {
      calculatedBmiCategory = "Obese";
    }

    setBmi(calculatedBmi);
    setIdealWeight(calculatedIdealWeight);
    setBmiCategory(calculatedBmiCategory);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "gender":
        setGender(value);
        break;
      case "age":
        setAge(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      <h1>BMI Calculator</h1>
      <div className="grid-box">
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            className="w-[100%]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            placeholder="between 2 yrs 120 yrs"
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleChange}
            placeholder="in cm"
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="in Kg"
          />
        </div>
      </div>
      <button className="mybtt" onClick={calculateBmi}>
        Calculate
      </button>
      {bmi?(<div className="result">
        <h2>Result:</h2>
        <div>
          <p>BMI: {bmi?.toFixed(2) | "0"}</p>
          <p>Ideal Weight: {idealWeight?.toFixed(2) | "NA"} kg</p>
          <p>BMI Category: {bmiCategory ? bmiCategory : "NA"}</p>
        </div>
      </div>):("")}
    </div>
  );
}

export default BmiCalculator;
