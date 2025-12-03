import { useState } from 'react';
import './App.css';

function App() {
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState(null);

  function calculateAge() {
    if (!birthday) {
      setAge("Please enter a valid date");
      return;
    }

    const today = new Date();
    const birthDate = new Date(birthday);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} years, ${months} months, ${days} days`);
  }

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="form">
        <label htmlFor="birthday">Enter your date of birth</label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate</button>
      </div>
      {age && <h2 className="result">Your age is: {age}</h2>}




    </div>
  );
}

export default App;
